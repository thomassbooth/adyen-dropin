"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { useState } from "react";

const Modal = ({ isOpen, setIsOpen, title, children }) => {
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-300 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog
          onClose={() => setIsOpen(false)}
          className="relative z-50 transition"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
              <DialogTitle className="font-bold">{title}</DialogTitle>
              {children}
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
