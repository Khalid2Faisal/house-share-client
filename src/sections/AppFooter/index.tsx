import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Layout, Typography } from "antd";
import { Viewer } from "../../lib/types";

import logo from "./assets/logo.png";

import "./styles/AppFooter.css";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

const { Footer } = Layout;
const { Title } = Typography;

export const AppFooter = withRouter(
  ({ viewer, setViewer, location, history }: Props & RouteComponentProps) => {
    return (
      <Footer className="app-footer">
        <div className="app-footer__logo">
          <Link to="/">
            <img src={logo} alt="App logo" />
            <Title level={3} className="app-footer__logo-name">
              House Share
            </Title>
          </Link>
        </div>
        <div className="app-footer__links-container">
          <Title level={4} className="app-footer__text">
            Destination
          </Title>
          <div className="app-footer__links">
            <Link className="app-footer__link" to="/listings/usa">
              USA
            </Link>
            <Link className="app-footer__link" to="/listings/canada">
              Canada
            </Link>
            <Link className="app-footer__link" to="/listings/england">
              England
            </Link>
            <Link className="app-footer__link" to="/listings/egypt">
              Egypt
            </Link>
          </div>
        </div>
        <div className="app-footer__links-container">
          <Title level={4} className="app-footer__text">
            Community
          </Title>
          <div className="app-footer__links">
            <Link className="app-footer__link" to="/">
              Github
            </Link>
            <Link className="app-footer__link" to="/">
              Discord
            </Link>
            <Link className="app-footer__link" to="/">
              Twitter
            </Link>
            <Link className="app-footer__link" to="/">
              Youtube
            </Link>
          </div>
        </div>
        <div className="app-footer__actions-container">
          <Title level={4} className="app-footer__text">
            Get started
          </Title>
          <div className="app-footer-actions">
            <Link className="app-footer__link" to="/host">
              Try hostings
            </Link>
            {viewer.id && viewer.avatar ? (
              ""
            ) : (
              <>
                <Link className="app-footer__link" to="/login">
                  sign in
                </Link>
                <Link className="app-footer__link" to="/login">
                  sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </Footer>
    );
  }
);
