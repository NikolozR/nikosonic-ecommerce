"use client";
function Modal({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
}) {
  return (
    <div
      className={
        "fixed left-0 top-0 w-full h-full justify-center items-start z-50 overflow-auto bg-[rgba(0,0,0,0.8)]" +
        (isOpen ? " flex" : " hidden")
      }
    >
      <div className="relative top-[50%] bg-white w-[50%] max-h-[75%]">
        <div
          className="absolute top-0 left-0 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          x
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
