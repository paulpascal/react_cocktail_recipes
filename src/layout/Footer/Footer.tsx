import { memo } from "react";

import s from "./Footer.module.css";

const Footer = () => (
  <div className={s.footer}>
    <div className={s.footerContent}>
      <div>All rights reserved © 2021.</div>
      <div>
        <a
          href="https://maxfontani.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Max Fontani
        </a>
      </div>
    </div>
  </div>
);

export default memo(Footer);
