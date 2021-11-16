import React from "react";
import styled from "styled-components";

const Logo = ({ children }) => {
  return (
    <Text>
      <p className="font">{children}</p>
    </Text>
  );
};

const Text = styled.div`
  color: #fff;
  border: 1px solid #ff0080;
  border-radius: 2px;
  padding: 0.2em 0.5em;
`;

export default Logo;
