import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebardata";
import "./nav.css";
import Submenu from "./submenu";
import styled from "styled-components";

const MenuBar = styled(Link)`
  margin-left: -2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  bottom: 22rem;
  position: absolute;
  transform: rotate(270deg);
  text-decoration: none;
`;

// const SideBarNav = styled.nav`
//   background: #15171c;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? "0px" : "-100%")};
//   transition: 350ms;
//   z-index: 10;
// `;

// const SideBarWrap = styled.div`
//   width: 100%;
// `;

// const MenuBarClose = styled(Link)`
//   margin-left: 1rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   align-items: center;
//   bottom: 22rem;
//   position: absolute;
//   transform: rotate(270deg);
//   text-decoration: none;
// `;
const MenuBarLine = styled.div`
  position: absolute;
  width: 3px;
  height: 100vh;
  left: 107px;
  top: 6px;

  background: #ffffff;
`;

function SideBar({ show, setShow }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {!show && (
        <>
          {" "}
          <MenuBar onClick={handleShow}>
            Menu
            <IoIosArrowDown />
          </MenuBar>
          <MenuBarLine />{" "}
        </>
      )}
      {show && (
        <div
          style={{ width: "100vw", backgroundColor: "black", height: "100vh" }}
          // show={show}
        >
          <MenuBar onClick={handleClose}>
            Close <IoIosArrowUp />
          </MenuBar>
          <MenuBarLine />{" "}
          <div style={{ backgroundColor: "black" }}>
            <div>
              {" "}
              {SidebarData.map((item, index) => {
                return <Submenu item={item} key={index} />;
              })}
              <a href="#">
                <BsInstagram className="instagram" size="1.5rem" />
              </a>
              <a href="#">
                <AiOutlineLinkedin className="linkedin" size="1.5rem" />
              </a>
              <a href="#">
                <BsFacebook className="facebook" size="1.5rem" />
              </a>
              <h4>KANU G. AGABI AND ASSOCIATES</h4>
              <div>
                <div className="phone">Lagos phone: +234 039920287</div>
                <div className="email">Email: office@knfossdv.com</div>
                <div className="fax">Fax: 903-93904848-44</div>
                <a href="#" className="contact-us">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SideBar;
