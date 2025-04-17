import React from "react";

export function NavigationMenu({ children, className }) {
  return (
    <nav className={`w-full ${className || ""}`}>
      {children}
    </nav>
  );
}

export function NavigationMenuList({ children, className }) {
  return (
    <ul className={`flex list-none ${className || ""}`}>
      {children}
    </ul>
  );
}

export function NavigationMenuItem({ children, className }) {
  return (
    <li className={`mx-2 ${className || ""}`}>
      {children}
    </li>
  );
}

export function NavigationMenuLink({ href, children, className }) {
  return (
    <a
      href={href}
      className={`transition-colors duration-200 ${className || ""}`}
    >
      {children}
    </a>
  );
}
