import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { SITE } from "@/lib/constants";

/** Stub — full navigation lands in the Layout & Routes phase. */
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <span className="font-display text-lg font-semibold tracking-wide">
          {SITE.name.toLowerCase()}
        </span>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
