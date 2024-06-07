"use client";
import { LuShoppingCart } from "react-icons/lu";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import useCart from "@/store/useCart";
import Link from "next/link";

const Cart = () => {
  const [items] = useCart((state) => [state.items]);
  return (
    <>
      <Menu>
        <MenuButton className="flex">
          <LuShoppingCart size={20} />
          <span className="text-sm/6 text-black ml-1 font-medium">
            {items.length}
          </span>
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 mt-2 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            <MenuItem>
              <p>
                Total: ${items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </p>
            </MenuItem>
            <MenuItem>
              <Link href="/cart">Checkout</Link>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
};

export default Cart;
