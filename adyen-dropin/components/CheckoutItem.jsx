import useCart from "@/store/useCart";
import Image from "next/image";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "./Headless/Modal";
import { toast } from "sonner";

const CheckoutItem = ({ id, index, name, description, image, price }) => {
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center ">
        <Image
          className="rounded-md w-[100px] h-[100px]"
          src={image}
          width={100}
          height={100}
          objectFit="contain"
        />
        <div className="flex h-full w-full ml-7  justify-between">
          <div className="flex-col gap-2">
            <div className="text-md font-medium ">{name}</div>
            <div className="text-sm text-gray-500">{description}</div>
          </div>
          <div className="flex items-center gap-5">
            <div>${price}</div>
            <button
              onClick={() => {
                setIsRemoveOpen(true);
              }}
              className="mr-10 text-red-800"
            >
              <RiDeleteBin6Line size={25} />
            </button>
            <RemoveCartModal index = {index} setIsRemoveOpen={setIsRemoveOpen} isRemoveOpen={isRemoveOpen}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;


const RemoveCartModal = ({index, isRemoveOpen, setIsRemoveOpen}) => {
  const [removeItem] = useCart((state) => [state.removeItem]);
  return (
    <Modal
      isOpen={isRemoveOpen}
      setIsOpen={setIsRemoveOpen}
      title="Remove Item"
    >
      <div>Are you sure you want to remove {name} from your cart?</div>
      <div className="flex text-white gap-5">
        <button
          className="px-5 py-2 bg-emerald-500/80 rounded-lg"
          onClick={() => {
            removeItem(index);
            setIsRemoveOpen(false);
            toast.success("Item removed from cart");
          }}
        >
          Yes
        </button>
        <button
          className="px-5 py-2 bg-red-500/80 rounded-lg"
          onClick={() => {
            setIsRemoveOpen(false);
          }}
        >
          No
        </button>
      </div>
    </Modal>
  );
};
