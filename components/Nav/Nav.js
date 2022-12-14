import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/Products">Products</Link>
      <Link href="/Sell">Sell</Link>
      <Link href="/Orders">Orders</Link>
      <Link href="/Account">Account</Link>
    </nav>
  );
}