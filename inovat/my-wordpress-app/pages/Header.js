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
            <Link href="http://localhost:3000/solutions">Çözümler</Link>
          </li>
          <li>
            <Link href="http://localhost:3000/sustainability">Sürdürülebirlik</Link>
          </li>
          <li>
            <Link href="http://localhost:3000/contact">İletişim</Link>
          </li>
          {}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
