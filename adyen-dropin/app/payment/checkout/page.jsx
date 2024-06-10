"use client";

import AdyenCheckout from "@/components/AdyenCheckout";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import useCart from "@/store/useCart";


export default function Home({searchParams}) {
  const redirectResult = searchParams['redirectResult']
  const sessionId = searchParams ['sessionId']

  return (
    <div className="bg-gray-200 flex flex-col items-center">
      <Title text="Checkout" className = 'mb-5'/>
      <Subtitle text="Choose how youd like to pay!"className = 'mb-10 text-gray-500'/>
      <AdyenCheckout sessionId={sessionId} redirectResult={redirectResult}/>
    </div>
  );
}
