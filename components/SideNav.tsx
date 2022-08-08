import { useRouter } from "next/router";
import Link from "next/link";

const items = [
  {
    title: "Pages",
    links: [
      { href: "/docs", children: "Overview" },
      { href: "/quiz", children: "Quiz" },
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <div className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul>
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? "active" : ""}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          .sidenav {
            // top: var(--top-nav-height);
            // height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}
