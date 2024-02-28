import NavButtons from "@/app/components/NavButtons";
import Link from "next/link";

function BaseNavbar() {
  return (
    <nav className="sticky top-0">
      <div className="flex justify-between items-center">
        <NavButtons />
      </div>
    </nav>
  );
}

export default BaseNavbar;