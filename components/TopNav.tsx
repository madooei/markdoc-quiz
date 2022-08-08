import React from 'react';
import Link from 'next/link';

export function TopNav({children}) {
  return (
    <div className='topnav'>
      <Link href="/" className='flex'>
        Home
      </Link>
      <section>{children}</section>
      <style jsx>
        {`
          .topnav {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem 2rem;
            background: white;
          }
          .topnav :global(a) {
            text-decoration: none;
          }
          section {
            display: flex;
            gap: 1rem;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}
