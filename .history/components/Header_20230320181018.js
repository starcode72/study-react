import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="">
        <a href="/">Index</a>
      </Link>
      <Link>
        <a href="/about">About</a>
      </Link>
    </header>
  );
}
