"use client";
import React from "react";

interface PropsValue {
  showModal: boolean;
  setShowModal: (e: boolean) => void;
  children: React.ReactNode;
}

const Modal = ({ showModal, setShowModal, children }: PropsValue) => {
  const handleClick = (e: any) => {
    if (e.target.classList.contains("modal")) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <>
          <div
            className="modal justify-center items-center flex overflow-hidden fixed inset-0 z-50"
            onClick={handleClick}
          >
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              {children}
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
