import React from "react";
import styled from "styled-components";
import {Link} from "../routes";

function Header() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link route='/'><a>Home</a></Link>
        </li>
        <li>
          <Link route='/first'><a>First</a></Link>
        </li>
        <li>
          <Link route='/second'><a>Second</a></Link>
        </li>
        <li>
          <Link route='/third'><a>Third</a></Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-left: 20px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
`;

export default Header;