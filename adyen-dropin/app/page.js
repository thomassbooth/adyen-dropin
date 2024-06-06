"use client";

import { useEffect, useRef, useState } from "react";
import "@adyen/adyen-web/dist/adyen.css";
import { useRouter } from "next/navigation";
import { setupAdyenCheckout } from "@/actions/setupAdyenCheckout";
import Modal from "@/components/modal";
import Checkout from "@/components/Checkout";

export default function Home() {

  return (
    <div className = 'bg-gray-200'>
      <Checkout />
    </div>
  );
}
