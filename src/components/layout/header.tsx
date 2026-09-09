"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button, buttonStyles } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

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
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${pathname === "/" ? "fixed" : "sticky"} top-0 z-50 w-full transition-all duration-300 ${menuOpen || !heroActive ? "bg-[#141414]/70 backdrop-blur-md" : "bg-transparent"}`}
        data-testid="site-header"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-lg font-light tracking-[-.05em] sm:text-2xl"
            >
              Ian Ale Hansyah
            </Link>
            <nav
              aria-label="Desktop navigation"
              className="hidden items-center gap-8 sm:flex"
            >
              {navigation.map((item) => (
                <Link
                  className="text-sm font-medium transition-colors hover:text-white/65"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center">
              <div className="hidden sm:flex">
                <Link
                  className={buttonStyles("primary", "h-8")}
                  href="/contact"
                >
                  Let&apos;s Talk
                </Link>
              </div>
              <Button
                variant="ghost"
                className="!size-12 border border-white/25 bg-black/25 p-0 text-white shadow-lg shadow-black/25 backdrop-blur-sm sm:hidden"
                aria-controls="mobile-navigation-drawer"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((value) => !value)}
              >
                {menuOpen ? (
                  <CloseIcon className="size-7" />
                ) : (
                  <MenuIcon className="size-7" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 sm:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        data-testid="mobile-navigation-overlay"
      >
        <button
          aria-label="Close navigation backdrop"
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
          type="button"
        />
        <aside
          aria-hidden={!menuOpen}
          aria-label="Mobile navigation"
          aria-modal="true"
          className={`absolute inset-y-0 right-0 flex w-[min(90vw,36rem)] flex-col bg-[#11140f] px-7 py-9 shadow-2xl shadow-black/50 transition-transform duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          id="mobile-navigation-drawer"
          role="dialog"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium tracking-[.24em] text-[#f1e7d8]">
              EXPLORE MY WORK
            </p>
            <Button
              variant="ghost"
              className="!size-14 rounded-full border border-white/70 p-0 text-[#f5f3ed] hover:bg-white/10"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {<CloseIcon className="size-7" />}
            </Button>
          </div>
          <nav
            aria-label="Mobile navigation"
            className="mt-16 flex flex-col gap-5"
          >
            {navigation.map((item) => (
              <Link
                className="w-fit text-4xl font-medium leading-[1.06] tracking-[-.055em] text-[#f5f3ed] transition-colors hover:text-[#8db7dc] focus-visible:outline-none focus-visible:text-[#8db7dc]"
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
