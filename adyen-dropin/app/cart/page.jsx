"use client";

import CheckoutItem from "@/components/CheckoutItem";
import Subtitle from "@/components/Subtitle";
import useCart from "@/store/useCart";
import Link from "next/link";

export default function Home() {
  const [items] = useCart((state) => [state.items]);
  return (
    <div className="bg-gray-200 w-full">
      <div className="flex justify-center">
        <div className="flex flex-col gap-5 w-1/2 px-10">
          <Subtitle text="Bag" className="mb-5" />
          {items.length > 0 ? items.map((item, index) => {
            return (
              <>
                <CheckoutItem
                  key={index}
                  id={item.id}
                  index={index}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              </>
            );
          }) : (
            <div className="text-center text-gray-500">No items in your bag</div>
          )}
        </div>
        <div className="w-1/4">
          <Subtitle text="Summary" className="mb-5" />
          <div className="flex justify-between pb-8 border-b border-gray-500/20 text-lg">
            <p>
              Subtotal ({items.length} Item{items.length > 1 && "s"})
            </p>
            <div className="flex flex-col items-end">
              <p>
                ${items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">(Inclusive of tax)</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8 pb-8 border-b border-gray-500/20 text-lg">
            <p>Shipping</p>
            <div>
              <p>$4.99</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8 mb-8 pb-8 border-b border-gray-500/20 text-lg">
            <p>Total</p>
            <div>
              <p>
                $
                {(
                  items.reduce((acc, item) => acc + item.price, 0) + 4.99
                ).toFixed(2)}
              </p>
            </div>
          </div>
          <Link
            href="/payment/checkout"
            className={
              !items.length > 0 && "disabled opacity-20 pointer-events-none"
            }
          >
            <button className="bg-black text-white w-full py-3 rounded-md mt-8">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
