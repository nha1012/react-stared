import React from "react"
import { NavLink } from "react-router-dom"
import { Footer, Logo, Menu, Nav } from "./SideNav.styles"
import { PATH } from "src/constants/paths"
import home from "src/assets/images/home.svg"
import list from "src/assets/images/list.svg"
import { connect, ConnectedProps } from "react-redux"

function SideNav() {
  return (
    <Nav>
      <h1>start</h1>
      <Menu className="list-unstyled mb-5">
        <li>
          <NavLink exact to={PATH.HOME}>
            <img src={home} alt="" />
            <span>Home</span>
          </NavLink>
        </li>
      </Menu>
      <Footer>
        <p>Copyright ©{new Date().getFullYear()}</p>
      </Footer>
    </Nav>
  )
}

export default SideNav
