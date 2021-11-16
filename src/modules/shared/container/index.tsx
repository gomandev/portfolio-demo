import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Contain>{children}</Contain>;
};

const Contain = styled.div`
  max-width: 80%;
  margin: 0 auto;
  overflow: hidden;
  height: 100%;
`;

export default Container;
