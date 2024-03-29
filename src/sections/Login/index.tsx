import React, { useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { Card, Typography, Layout, Spin } from "antd";

import { ErrorBanner } from "../../lib/components";
import {
  displaySuccessNotification,
  displayErrorMessage,
} from "../../lib/utils";

import { Viewer } from "../../lib/types";
import { AuthUrl as AuthUrlData } from "../../lib/graphql/queries/AuthUrl/__generated__/AuthUrl";
import {
  Log_In as LogInData,
  Log_InVariables,
} from "../../lib/graphql/mutations/LogIn/__generated__/Log_In";
import { AUTH_URL } from "../../lib/graphql/queries";
import { LOG_IN } from "../../lib/graphql/mutations";

// image assets
import logo from "./assets/logo.png";
import googleLogo from "./assets/google_logo.jpg";

// styles
import "./styles/Login.css";

interface Props {
  setViewer: (viewer: Viewer) => void;
}

const { Text, Title } = Typography;
const { Content } = Layout;

export const Login = ({ setViewer }: Props) => {
  const client = useApolloClient();
  const [logIn, { data: logInData, loading: logInLoading, error: logInError }] =
    useMutation<LogInData, Log_InVariables>(LOG_IN, {
      onCompleted: (data) => {
        if (data && data.logIn) {
          setViewer(data.logIn);
          displaySuccessNotification("You 've successfully logged in!");
        }
      },
    });

  const logInRef = useRef(logIn);
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      logInRef.current({
        variables: {
          input: { code },
        },
      });
    }
  }, []);

  const handleAuthorize = async () => {
    try {
      const { data } = await client.query<AuthUrlData>({
        query: AUTH_URL,
      });
      window.location.href = data.authUrl;
    } catch {
      displayErrorMessage(
        "Sorry! we weren't able to log you in. Please try again later!"
      );
    }
  };

  if (logInLoading) {
    return (
      <Content className="log-in__spinner">
        <Spin size="large" tip="Logging you in..." />
      </Content>
    );
  }

  if (logInData && logInData.logIn) {
    const { id: viewerId } = logInData.logIn;
    return <Redirect to={`/user/${viewerId}`} />;
  }

  const logInErrorBannerElement = logInError ? (
    <ErrorBanner description="Sorry! we weren't able to log you in. Please try again later!" />
  ) : null;

  return (
    <Content>
      {logInErrorBannerElement}
      <div className="log-in-card__container">
        <Card className="log-in-card">
          <div className="log-in-card__intro">
            <Title level={3} className="log-in-card__intro-title">
              <span role="img" aria-label="wave">
                <img alt="logo" className="log-in-card__logo" src={logo}></img>
              </span>
            </Title>
            <Title level={3} className="log-in-card__intro-title">
              Log in to HouseShare!
            </Title>
            <Text>Sign in with Google to start booking available rentals!</Text>
          </div>
          <button
            className="log-in-card__google-button"
            onClick={handleAuthorize}
          >
            <img
              alt="google-logo"
              className="log-in-card__google-button-logo"
              src={googleLogo}
            ></img>
            <span className="log-in-card__google-button-text">
              Sign in with Google
            </span>
          </button>
          <Text type="secondary" className="log-in-card-text__secodary">
            Note: By signing in, you'll be redirected to the Google consent form
            to sign in with your Google account.
          </Text>
        </Card>
      </div>
    </Content>
  );
};
