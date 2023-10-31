import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 60px;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
    return <Container>Great Shopping ! Free Transport on Payment over 50 euro</Container>
}

export default Announcement;