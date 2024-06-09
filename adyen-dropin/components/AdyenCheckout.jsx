import React from "react";
import { useEffect, useRef, useState } from "react";
import "@adyen/adyen-web/dist/adyen.css";
import { useRouter } from "next/navigation";
import { setupAdyenCheckout } from "@/actions/setupAdyenCheckout";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useCart from "@/store/useCart";

const AdyenCheckout = () => {
  const dropinContainerRef = useRef(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [items, emptyCart] = useCart((state) => [state.items, state.emptyCart]);

  const amount = items.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  useEffect(() => {
    async function createDropIn() {
      const checkout = await setupAdyenCheckout(router, amount, emptyCart);
      checkout.create("dropin").mount(dropinContainerRef.current);
      setIsLoading(false);
    }
    createDropIn();
  }, []);

  return (
    <>
      {isLoading && (
        <div className = 'w-[300px] h-[300px] flex justify-center items-center'>
          <AiOutlineLoading3Quarters
            size={100}
            className="animate-spin opacity-20"
          />
        </div>
      )}
      <div className="w-1/2" ref={dropinContainerRef}></div>
    </>
  );
};

export default AdyenCheckout;
