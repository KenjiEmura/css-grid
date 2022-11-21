import { ReactNode } from "react";
import cls from "./layout.module.scss";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={cls.container}>
      <nav className={cls.nav}>Navbar</nav>
      <div className={cls.sidebar}>Sidebar</div>
      <main className={cls.main}>{children}</main>
      <footer className={cls.footer}>Footer</footer>
    </div>
  );
}
