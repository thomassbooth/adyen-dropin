import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { SiTicktick } from "react-icons/si";

export default function Home({ searchParams }) {
  const paymentRef = searchParams["paymentRef"];
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center">
      <Title text="Payment complete" className="mb-5" />
      <SiTicktick size={100} className="text-green-400 mb-5" />
      <p className="text-gray-500">Your reference code: </p>
      <p className="text-2xl font-semibold mb-10">{paymentRef}</p>
      <Subtitle
        text="Thank you for shopping at SkatersHub"
        className="mb-10 text-gray-00"
      />
    </div>
  );
}
