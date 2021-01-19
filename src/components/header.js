import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { elevation } from "../utils/presets"

const NavLink = styled(Link)`
  background: linear-gradient(
    94.23deg,
    #5374fa 12.41%,
    #fd9179 52.55%,
    #ff6969 89.95%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      background: linear-gradient(
        94.23deg,
        #5374fa 12.41%,
        #fd9179 52.55%,
        #ff6969 89.95%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      z-index: ${elevation.overlay};
    `}
  >
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Notes
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
      </NavLink>
    </nav>
  </header>
)

export default Header
