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
            <Link href="http://localhost:3000/home">Anasayfa</Link>
          </li>
          <li>
            <Link href="http://localhost:3000/info">Hakkımızda</Link>
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
