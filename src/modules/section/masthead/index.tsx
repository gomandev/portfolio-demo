import React from "react";
import styled from "styled-components";
import Container from "../../shared/container";
import Wrapper from "../../shared/wrapper";
import { StaticImage } from "gatsby-plugin-image";
import o from "../../../asset/mo.png";

const Masthead = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Flex>
            <Left>
              <Img
                style={{ filter: "grayscale(100%)" }}
                src={o}
                alt="mo-awwal"
              />
            </Left>
            <Right>Hello fellas</Right>
          </Flex>
        </Container>
      </Wrapper>
    </>
  );
};

const Flex = styled.div`
  width: 100%;
  display: flex;
`;

const Img = styled.img`
  width: 500px;
`;

const Left = styled.div`
  flex-basis: 70%;
`;

const Right = styled.div`
  flex-basis: 30%;
`;

export default Masthead;
