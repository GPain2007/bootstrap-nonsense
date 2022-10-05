import React, { useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarLink = styled(Link)`
  display: flex;

  color: white;

  align-items: center;
  padding: 0px;
  list-style: none;
  height: 30px;
  text-decoration: none;

  left: 479px;
  &:hover {
    color: #d2b202;
    cursor: pointer;
  }
`;

const DropDownLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 262px;
  height: 314px;
  left: 844px;
  top: 191px;

  border: 1px solid #454545;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.85);
  z-index: 1;
`;

const Submenu = ({ item }) => {
  const [subNav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subNav);

  return (
    <>
      <SideBarLink
        to={item.path}
        onMouseEnter={item.subNav && setSubnav}
        onMouseLeave={item.subNav && showSubnav}
        className={item.cName}
      >
        <div>{item.title} </div>
      </SideBarLink>
      {subNav &&
        item.subNav.map((item, index) => {
          return (
            <DropDownLink to={item.path} key={index}>
              <div className={item.cName}>{item.title}</div>
            </DropDownLink>
          );
        })}
    </>
  );
};
export default Submenu;
