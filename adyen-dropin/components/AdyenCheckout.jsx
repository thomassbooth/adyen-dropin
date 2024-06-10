import { useEffect, useRef, useState } from "react";
import "@adyen/adyen-web/dist/adyen.css";
import { useRouter } from "next/navigation";
import { setupAdyenCheckout } from "@/actions/setupAdyenCheckout";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useCart from "@/store/useCart";

const AdyenCheckout = ({sessionId, redirectResult}) => {
  const dropinContainerRef = useRef(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [items, emptyCart] = useCart((state) => [state.items, state.emptyCart]);

  const amount = items.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  useEffect(() => {
    async function handleRedirect() {
      if (sessionId && redirectResult) {
        // Handle the redirect result for 3D secure payments
        const additionalConfiguration = {
          session: { id: sessionId },
        };
        //reinitialise our checkout to submit details
        const checkout = await setupAdyenCheckout(router, amount, emptyCart, additionalConfiguration);
        //submit details calls onPaymentCompleted which is already handled.
        checkout.submitDetails({ details: { redirectResult: redirectResult } });
      } else {
        // Regular Drop-in creation
        createDropIn();
      }
    }

    async function createDropIn() {
      const checkout = await setupAdyenCheckout(router, amount, emptyCart);
      checkout.create("dropin").mount(dropinContainerRef.current);
      setIsLoading(false);
    }

    handleRedirect()
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
