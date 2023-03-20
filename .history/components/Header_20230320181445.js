import Link from "next/link";
import classes from '../components/'

export function Header() {
  return (
    <header>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
