import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  padding: 0 49px 0 24px;
  justify-content: space-between;
`;
const Logo = styled.a`
  color: var(--ain, #3a42bf);
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 700;
`;

function NavPhone() {
  return (
    <Navbar>
      <Link to="/Nav">
        <img src="/Nav.png" alt="nav" width={"20px"} />
      </Link>
      <Link to="/">
        <Logo>DOUBLE CHECK</Logo>
      </Link>

      <div></div>
    </Navbar>
  );
}

export default NavPhone;
