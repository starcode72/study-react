import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link>
        <a href="/">Index</a>
      </Link>
      <Link>
        <a href="/about">Index</a>
      </Link>
    </header>
  );
}
