"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars4Icon,
  ClockIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  PencilSquareIcon,
  Squares2X2Icon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Button from "@/components/Button";
import LeftSideDrawer from "@/components/LeftSideDrawer";

const navButtons = [
  { label: "Note", icon: PencilSquareIcon, url: "#" },
  { label: "Shipping", icon: TruckIcon, url: "#" },
  { label: "Hold Orders", icon: ClockIcon, url: "#" },
  { label: "New Item", icon: PlusCircleIcon, url: "#" },
];

const mobileNavLinks = [
  { label: "Dashboard", icon: Squares2X2Icon, url: "#" },
  { label: "Location", icon: MapPinIcon, url: "#" },
  { label: "POS Invoices", icon: CurrencyDollarIcon, url: "#" },
  { label: "Settings", icon: Cog6ToothIcon, url: "#" },
];

export default function NavButtons() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeRoute = usePathname();
  const isActiveRoute = (activeNavLink) => activeRoute === activeNavLink;

  return (
    <div className="flex items-center gap-2 xl:gap-4">
      <Bars4Icon
        onClick={() => setDrawerOpen(true)}
        className="h-7 w-7 cursor-pointer"
        aria-hidden="true"
      />
      {navButtons.map((item, i) => (
        <Link className="hidden lg:flex" key={i} href={item.url}>
          <Button
            variant="secondary"
            className={`gap-1 xl:gap-2 items-center text-sm xl:text-lg font-normal xl:font-semibold px-2 ${isActiveRoute(item.url) && "bg-secondary-200 text-secondary-500"
              }`}
          >
            <item.icon className="w-5 xl:w-6" />
            {item.label}
          </Button>
        </Link>
      ))}



      <LeftSideDrawer open={drawerOpen} setOpen={setDrawerOpen}>
        <div className="flex lg:hidden flex-wrap items-end justify-start gap-2 pb-4">
          {navButtons.map((item) => (
            <Button
              key={item.url} // Assuming item.url is unique
              variant="secondary"
              className={`gap-1 xl:gap-2 items-center text-sm xl:text-lg font-normal xl:font-semibold px-2 ${isActiveRoute(item.url) ? "bg-secondary-200 text-secondary-500" : ""}`}
            >
              <item.icon className="w-5 xl:w-6" />
              {item.label}
            </Button>
          ))}
        </div>
        <hr className="py-2 block lg:hidden" />
        <div className="space-y-4">
          {mobileNavLinks.map((item, i) => (
            <Link
              key={i}
              className={`flex gap-2 items-center text-xl text-gray-400 ${isActiveRoute(item.url) && "bg-secondary-200 text-secondary-500"
                }`}
              onClick={() => setDrawerOpen(false)}
              href={item.url}
            >
              <item.icon className="text-gray-400 w-6" />
              {item.label}
            </Link>
          ))}
        </div>
      </LeftSideDrawer>
    </div>
  );
}
