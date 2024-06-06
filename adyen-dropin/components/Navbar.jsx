import Link from "next/link";
import Cart from "./Cart";


const Navbar = () => {
  return (
    <>
      <div className="w-full px-5 py-3 border-b-2 border-b-black flex justify-between">
        <Link href = '/'>Toms Demo Shop</Link>
        <Cart/>
      </div>
    </>
  );
};

export default Navbar;
