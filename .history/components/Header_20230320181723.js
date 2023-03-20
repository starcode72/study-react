import Link from "next/link";
import {classes from "../components/Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
