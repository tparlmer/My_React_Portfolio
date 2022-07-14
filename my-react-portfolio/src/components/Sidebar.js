import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <div id="outer-container">
      <Menu pageWrapId={"page-wrap "}>
        <main id="page-wrap">
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/">
            Literacy App
          </a>
          <a className="menu-item" href="/">
            SJDA Alphabet Test
          </a>
          <a className="menu-item" href="/">
            Emoji Hero
          </a>
          <a className="menu-item" href="/">
            Help I Am Bored
          </a>
          <a className="menu-item" href="/">
            HTML, CSS, JS Portfolio
          </a>
        </main>
      </Menu>
    </div>
  );
}
