import React, { FC } from "react"
import { Navigation } from "./navigation";
import { Footer } from "./footer";

import { rhythm } from "../utils/typography"

const Layout: FC = ({ children }) => {

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Navigation />
        <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
