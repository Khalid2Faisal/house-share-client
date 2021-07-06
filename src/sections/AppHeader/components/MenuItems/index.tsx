import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { Menu, Button, Avatar } from "antd";
import { HomeTwoTone, UserOutlined, LogoutOutlined } from "@ant-design/icons";

import {
  displaySuccessNotification,
  displayErrorMessage,
} from "../../../../lib/utils";

import { Viewer } from "../../../../lib/types";
import { LogOut as LogOutData } from "../../../../lib/graphql/mutations/LogOut/__generated__/LogOut";
import { LOG_OUT } from "../../../../lib/graphql/mutations";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

const { Item, SubMenu } = Menu;

export const MenuItems = ({ viewer, setViewer }: Props) => {
  const [logOut] = useMutation<LogOutData>(LOG_OUT, {
    onCompleted: (data) => {
      if (data && data.logOut) {
        setViewer(data.logOut);
        displaySuccessNotification("You 've successfully logged out!");
      }
    },
    onError: () => {
      displayErrorMessage(
        "Sorry! we weren't able to log you out. Please try again later!"
      );
    },
  });

  const handleLogOut = () => {
    logOut();
  };

  const subMenuLogin =
    viewer.id && viewer.avatar ? (
      <SubMenu title={<Avatar src={viewer.avatar} />}>
        <Item key="/user">
          <Link to={`/user/${viewer.id}`}>
            <UserOutlined style={{ marginRight: 5 }} />
            Profile
          </Link>
        </Item>
        <Item key="/logout">
          <div onClick={handleLogOut}>
            <LogoutOutlined style={{ marginRight: 5 }} />
            Log out
          </div>
        </Item>
      </SubMenu>
    ) : (
      <Item>
        <Link to="/login">
          <Button type="primary">Sign in</Button>
        </Link>
      </Item>
    );

  return (
    <Menu mode="horizontal" selectable={false} className="menu">
      <Item key="/host">
        <Link to="/host">
          <HomeTwoTone style={{ fontSize: 20, marginRight: 5 }} />
          Host
        </Link>
      </Item>
      {subMenuLogin}
    </Menu>
  );
};
