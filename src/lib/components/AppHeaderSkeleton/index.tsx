import React from "react";
import { Layout, Typography } from "antd";

import logo from "./assets/logo.png";

import "./styles/AppHeaderSkeleton.css";

const { Header } = Layout;
const { Title } = Typography;

export const AppHeaderSkeleton = () => {
  return (
    <Header className="app-header">
      <div className="app-header__logo-search-section">
        <div className="app-header__logo">
          <img src={logo} alt="App logo" />
          <Title level={3} className="app-header__logo-name">
            House Share
          </Title>
        </div>
      </div>
    </Header>
  );
};
