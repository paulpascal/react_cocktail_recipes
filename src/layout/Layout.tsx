import { Header, Content, Footer } from "../components/index";

import { LayoutProps } from "./types";
import s from "./Layout.module.css";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={s.container}>
      <div className={s.layout}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </div>
    </div>
  );
}
