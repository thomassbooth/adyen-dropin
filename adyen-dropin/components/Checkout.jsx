import React from "react";
import { useEffect, useRef, useState } from "react";
import "@adyen/adyen-web/dist/adyen.css";
import { useRouter } from "next/navigation";
import { setupAdyenCheckout } from "@/actions/setupAdyenCheckout";
import Modal from "@/components/Headless/Modal";

const Checkout = () => {
  const dropinContainerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    async function createDropIn() {
      const checkout = await setupAdyenCheckout(router);
      checkout.create("dropin").mount(dropinContainerRef.current);
    }
    createDropIn();
  }, []);

  return (
    <>
      <div className="p-9" ref={dropinContainerRef}></div>
    </>
  );
};

export default Checkout;
