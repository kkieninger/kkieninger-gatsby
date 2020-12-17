import React, { FC } from "react";
import { Link } from "gatsby"

export const Navigation: FC = () => {
  return (
    <header className="header">
      <div className="fc-orange logo">kevin kieninger.</div>
      <ul className="navigation">
        <li>
          <Link to="/writing">writing</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </header>
  );
};
