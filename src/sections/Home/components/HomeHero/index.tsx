import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Input, Row, Typography } from "antd";

import luxorImage from "../../assets/Luxor4.jpg";
import greeceImage from "../../assets/Greece.jpg";

const { Title } = Typography;
const { Search } = Input;

interface Props {
  onSearch: (value: string) => void;
}

export const HomeHero = ({ onSearch }: Props) => {
  return (
    <div className="home-hero">
      <div className="home-hero__search">
        <Title className="home-hero__title">
          Find a place you'd love to stay at
        </Title>
        <Search
          placeholder="Search 'Luxor'"
          size="large"
          enterButton
          className="home-hero__search-input"
          onSearch={onSearch}
        />
      </div>
      <Row gutter={[12, 12]} className="home-hero__cards">
        <Col span={24} sm={12}>
          <Link to="/listings/greece">
            <Card cover={<img alt="Greece" src={greeceImage} />}>Greece</Card>
          </Link>
        </Col>
        <Col span={24} sm={12}>
          <Link to="/listings/luxor%20egypt">
            <Card cover={<img alt="Luxor" src={luxorImage} />}>Luxor</Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
