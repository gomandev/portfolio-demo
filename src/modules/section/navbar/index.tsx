import React from "react";
import styled from "styled-components";
import Logo from "../../atom/logo";
import Container from "../../shared/container";
import Wrapper from "../../shared/wrapper";

const Navbar = () => {
  return (
    <>
      <Wrapper height="50px">
        <Container>
          <Center>
            <Logo>MO</Logo>
          </Center>
        </Container>
      </Wrapper>
    </>
  );
};

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Navbar;
