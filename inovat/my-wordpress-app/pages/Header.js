// Header.js
import './Header.css';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Anasayfa</Link>
          </li>
          <li>
            <Link href="/about">Hakkımızda</Link>
          </li>
          <li>
            <Link href="/about">Çözümler</Link>
          </li>
          <li>
            <Link href="/about">Sürdürülebirlik</Link>
          </li>
          <li>
            <Link href="/about">İletişim</Link>
          </li>
          {}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
