"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { Logo } from "./logo";
import { CTA_HREF, CTA_LABEL, NAV_LINKS } from "@/lib/site";

export function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Close the drawer on navigation and on Escape
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    drawerRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  return (
    <header className="sticky top-0 z-50 bg-primary-bg/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 tablet:px-8"
      >
        <Link href="/" aria-label="Collage AI — home" className="rounded-md">
          <Logo />
        </Link>

        {/* Center pill (tablet and up) */}
        <ul className="hidden items-center gap-1 rounded-full border border-primary-highlight/20 bg-white/70 px-2 py-1 shadow-soft tablet:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="inline-block rounded-full px-4 py-2 font-ui text-body-m font-medium text-primary transition-colors hover:bg-primary-bg hover:text-primary-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden tablet:block">
          <Button href={CTA_HREF} showArrow>
            {CTA_LABEL}
          </Button>
        </div>

        {/* Mobile drawer toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-primary tablet:hidden"
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          onClick={() => setDrawerOpen((open) => !open)}
        >
          {drawerOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            id="mobile-drawer"
            ref={drawerRef}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-primary-highlight/15 bg-primary-bg tablet:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 font-ui text-button font-medium text-primary hover:bg-white"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-4 pb-2 pt-3">
                <Button href={CTA_HREF} showArrow className="w-full">
                  {CTA_LABEL}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
