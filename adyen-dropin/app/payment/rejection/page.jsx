"use client";

import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Link from "next/link";
import { RxCrossCircled } from "react-icons/rx";

export default function Home({ searchParams }) {
  const paymentRef = searchParams["paymentRef"];
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center">
      <Title text="There was an error handling your payment" className="mb-5" />
      <RxCrossCircled  size={100} className="text-red-400 mb-5" />

      <p className="text-gray-500">Your reference code: </p>
      <p className="text-2xl font-semibold mb-10">{paymentRef}</p>
      <Subtitle
        text="Lets get you back where you came from"
        className="text-gray-800 mb-5"
      />
      <Link href='/' className = 'py-2 px-5 bg-gray-500 text-white rounded-full'>Home</Link>
    </div>
  );
}
