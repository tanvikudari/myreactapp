'use client';
import Link from 'next/link';
import '../globals.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </div>
      <div className="nav-name">
        <strong>Tanvi Kudari</strong>
      </div>
    </nav>
  );
}
