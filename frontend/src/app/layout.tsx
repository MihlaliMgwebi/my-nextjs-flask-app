import React from 'react';
import './globals.css';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Next.js Flask App</title>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;