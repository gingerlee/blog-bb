import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"

const FooterLink = styled(Link)`
  color: #222;
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

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const Footer = () => (
  <footer
    css={css`
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    `}
  >
    <nav
      css={css`
        margin-top: 2rem;
      `}
    >
      <FooterLink to="/" activeClassName="current-page">
        Home
      </FooterLink>
      <FooterLink to="/contact/" activeClassName="current-page">
        Contact
      </FooterLink>
      <FooterLink to="#" onClick={scrollTop} activeClassName="current-page">
        Top
      </FooterLink>
    </nav>
    <div>💫 {new Date().getFullYear()}. Built with 💕 by gg</div>
  </footer>
)

export default Footer
