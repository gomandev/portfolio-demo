import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  height?: string;
  children: React.ReactChild;
}

const Wrapper: FC<IProps> = ({ children, height }: IProps) => {
  return <Wrap style={{ height: height }}>{children}</Wrap>;
};

const Wrap = styled.div`
  width: 100%;
`;

export default Wrapper;
