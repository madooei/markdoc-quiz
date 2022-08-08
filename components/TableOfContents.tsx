import React from 'react';
import Link from 'next/link';

export function TableOfContents({toc}) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  );

  if (items.length <= 1) {
    return null;
  }

  return (
    <div className='aside'>
      <ul>
        {items.map((item) => {
          const href = `#${item.id}`;
          const active =
            typeof window !== 'undefined' && window.location.hash === href;
          return (
            <li
              key={item.title}
              className={[
                active ? 'active' : undefined,
                item.level === 3 ? 'padded' : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <Link href={href} passHref>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          .aside {
            flex: 0 0 auto;
            align-self: flex-start;
            margin-bottom: 1rem;
            padding: 0.5rem 0 0;
          }
          ul {
            margin: 0;
            padding: 0 1.5rem;
          }
          li {
            list-style-type: none;
            margin: 0 0 1rem;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active a {
            text-decoration: underline;
          }
          li.padded {
            padding-left: 1rem;
          }
        `}
      </style>
    </div>
  );
}
