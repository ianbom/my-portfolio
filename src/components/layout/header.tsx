"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button, buttonStyles } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

const navigation = [{ href: "/", label: "Home" }, { href: "/projects", label: "Projects" }, { href: "/gallery", label: "Gallery" }, { href: "/contact", label: "Contact" }];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroActive, setHeroActive] = useState(pathname === "/");
  useEffect(() => {
    const update = () => {
      const hero = document.querySelector<HTMLElement>("[data-hero-section]");
      setHeroActive(Boolean(hero && hero.getBoundingClientRect().bottom > 64));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [pathname]);
  return <nav className={`${pathname === "/" ? "fixed" : "sticky"} top-0 z-50 w-full transition-all duration-300 ${menuOpen || !heroActive ? "bg-[#141414]/70 backdrop-blur-md" : "bg-transparent"}`} data-testid="site-header">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <Button variant="ghost" className="size-9 p-0 sm:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}</Button>
        <Link href="/" className="text-lg font-light tracking-[-.05em] sm:text-2xl">Ian Ale</Link>
        <div className="hidden items-center gap-8 sm:flex">{navigation.map(item => <Link className="text-sm font-medium transition-colors hover:text-white/65" href={item.href} key={item.href}>{item.label}</Link>)}</div>
        <div className="flex items-center"><Link className={buttonStyles("primary", "hidden h-8 sm:flex")} href="/contact">Let&apos;s Talk</Link><span className="w-9 sm:hidden" /></div>
      </div>
      {menuOpen && <div className="flex flex-col gap-4 pb-6 text-sm font-medium sm:hidden">{navigation.map(item => <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</div>}
    </div>
  </nav>;
}
