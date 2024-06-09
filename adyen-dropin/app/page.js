"use client";

import "@adyen/adyen-web/dist/adyen.css";
import Checkout from "@/components/AdyenCheckout";
import { storeItems } from "@/lib/data";
import ShopItem from "@/components/ShopItem";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Title text="Skate shop" className = 'mb-10' />
      <div className = 'grid grid-cols-4 place-items-center'>
        {storeItems.map((item) => {
          return (
            <ShopItem
              key = {item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
