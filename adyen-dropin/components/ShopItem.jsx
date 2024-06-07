"use client";
import { useState } from "react";
import { storeItems } from "@/lib/data";
import Modal from "./Headless/Modal";
import { toast } from "sonner";
import Image from "next/image";
import useCart from "@/store/useCart";

const ShopItem = ({ id, name, image, description, price }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ShopItemModal isOpen={isOpen} setIsOpen={setIsOpen} name = {name} image = {image} description={description} price = {price} id = {id}/>
      <button
        className="flex flex-col items-center justify-center mb-10"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Image
          className="w-64 h-64 rounded-lg"
          src={image}
          width={300}
          height={300}
          objectFit="contain"
        />
        <div className="text-lg font-bold mt-2">{name}</div>
        <div className="text-md font-semi-bold mt-2 text-gray-500">
          ${price}
        </div>
      </button>
    </div>
  );
};

export default ShopItem;

const ShopItemModal = ({isOpen, setIsOpen, name, image, description, price, id}) => {
  const [items, addItem] = useCart((state) => [state.items, state.addItem]);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} name={name}>
      <div className="w-full">
        <div className="w-full flex justify-center mb-10">
          <Image
            className="rounded-lg  w-[500px] h-[500px]"
            src={image}
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
        <div className="w-full">
          <div className="text-lg font-bold mt-2">{name}</div>
          <div className="text-sm text-gray-500 mt-1">{description}</div>
          <div className="text-md font-semi-bold mt-2">${price}</div>
          <div className="w-full flex justify-end">
            <button
              className="px-3 py-2 bg-blue-500 rounded-md text-white text-sm whitespace-nowrap"
              onClick={() => {
                addItem({ id, name, image, description, price });
                toast.success("Item added to cart");
                setIsOpen(false);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
