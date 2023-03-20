import Link from "next/link";

export function Header() {
  return (
    <header>
    <Link
      <a href="/">Index</a>
      <a href="/about">About</a>
    </header>
  );
}
