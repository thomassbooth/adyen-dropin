import Link from "next/link";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <>
      <div className="w-full px-9 py-3 flex justify-between">
        <div className = 'flex items-center gap-2'>
          <Link className="font-bold" href="/">
            SkatersHub
          </Link>
          <span className = 'font-light text-xs opacity-20 pointer-events-none'>designed and coded by Thomas Booth</span>
        </div>
        <Cart />
      </div>
    </>
  );
};

export default Navbar;
