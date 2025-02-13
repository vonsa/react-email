import classNames from "classnames";
import Link from "next/link";
import * as React from "react";
import { Logo } from "./logo";
import { Menu } from "./menu";

export const Topbar: React.FC<
  Readonly<React.ComponentPropsWithoutRef<"header">>
> = ({ className, ...props }) => (
  <header
    className={classNames(
      "z-[3] flex items-center justify-between px-6 py-8",
      className,
    )}
    {...props}
  >
    <Link className="-ml-[.375rem] flex" href="/">
      <Logo />
    </Link>
    <Menu />
  </header>
);
