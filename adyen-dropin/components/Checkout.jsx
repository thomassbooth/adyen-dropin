import React from 'react'
import { useEffect, useRef, useState } from "react";
import "@adyen/adyen-web/dist/adyen.css";
import { useRouter } from "next/navigation";
import { setupAdyenCheckout } from "@/actions/setupAdyenCheckout";
import Modal from "@/components/modal";

const Checkout = () => {
    const dropinContainerRef = useRef(null);
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      if (!isOpen) return
      async function createDropIn() {
        const checkout = await setupAdyenCheckout(router);
        checkout.create("dropin").mount(dropinContainerRef.current);
      }
      createDropIn();
    }, [isOpen]);
  
    return (
      <>
        <Modal isOpen = {isOpen} setIsOpen = {setIsOpen} title = {'checkout'}>
          <div className="p-9" ref={dropinContainerRef}></div>
        </Modal>
      </>
    );
}

export default Checkout