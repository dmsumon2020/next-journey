"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/register", label: "Register" },
  { href: "/login", label: "Login" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function NavLinks() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-4">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`px-4 py-2 rounded ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:underline"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
