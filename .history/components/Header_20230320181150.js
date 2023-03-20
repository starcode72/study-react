import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="/">
        Index</a>
      </Link>
      <Link href="/about">
        About
      </Link>
    </header>
  );
}
