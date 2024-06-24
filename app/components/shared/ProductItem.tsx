'use client'
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import ClientSideWrapper from "./ClientSideProductWrapper";
import AddToCartButton from "./AddToCartButton";
import AuthorizeModal from "./AuthorizeModal";
import { Claims } from "@auth0/nextjs-auth0";
import { deleteProduct } from "../../api/api";
import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Spinner } from "@nextui-org/react";
import { useCartContext } from "../providers/CartProvider";

function ProductItem({
  product,
  isNew = false,
  isHot = false,
  user,
  grid,
  auth0User,
}: {
  product: Product;
  user: User;
  isNew?: boolean;
  isHot?: boolean;
  grid?: number;
  auth0User?: Claims | undefined;
}) {
  const cart = useCartContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isAdmin = auth0User && auth0User.role && auth0User.role[0] === "Admin";

  const handleDeleteClick = (productId: number) => {
    setDeleteId(productId);
    onOpen();
  };

  const confirmDelete = async () => {
    if (deleteId) {

      setIsLoading(true);
      await deleteProduct(deleteId);
      setIsLoading(false);
      onClose();
      const cartItem: CartItem = {
        id: 0,
        user_id: user.id,
        product_id: deleteId,
        quantity: 1,
        created_at: "",
        updated_at: "",
        name: '',
        brand: '',
        color: '',
        stock: 0,
        average_rating: 0,
        price: 0,
        thumbnail_url: '',
        gallery_urls: [],
        description: '',
        views: 0,
        review_count: 0,
        category: "headband"
      } 
      cart.removeCartItem(cartItem)
    }
  };

  return (
    <div
      className="w-full dark:bg-[#241b33] cursor-pointer group bg-white pb-[20px] rounded-[15px] relative"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <div
        className={`p-4 relative w-full ${
          grid === 3 ? "h-[350px]" : "h-[400px]"
        }`}
      >
        <ClientSideWrapper productId={product.product_id}>
          {(isNew || isHot) && (
            <span className="w-fit z-50 absolute px-[14px] py-[4px] font-bold text-[1rem] bg-[#FFAB00A3] text-[#26355D] rounded-[4px]">
              {isNew ? "NEW" : "HOT"}
            </span>
          )}
        </ClientSideWrapper>
        {isAdmin && (
          <div className="opacity-0 flex items-center cursor-pointer z-[100] group-hover:opacity-100 transition-all ease-in-out duration-[0.3s] group-hover:top-[16px] justify-center absolute right-[16px] top-[0]">
            <FaTrashAlt size={20} color="black" className="mr-2 opacity-100" onClick={() => handleDeleteClick(product.product_id)} />
          </div>
        )}
        <ClientSideWrapper productId={product.product_id}>
          <Image
            src={product.thumbnail_url}
            className="rounded-[15px] rounded-b-none"
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
            alt={product.name}
          />
        </ClientSideWrapper>
        {user ? (
          <AddToCartButton user={user} product={product} />
        ) : (
          <AuthorizeModal />
        )}
      </div>
      <ClientSideWrapper productId={product.product_id}>
        <div className="bg-white dark:bg-[#241b33] px-3 text-[#141718] font-semibold flex flex-col gap-[15px]">
          <div className="flex mt-[10px]">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index < product.average_rating ? "#FFAB00A3" : "gray"}
              />
            ))}
          </div>
          <h2 className="dark:text-[#ECEDEE]">{product.brand + " " + product.name}</h2>
          <span className="dark:text-[#ECEDEE]">${product.price}</span>
        </div>
      </ClientSideWrapper>
      
      {/* Confirmation Modal */}
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Confirm Delete</ModalHeader>
            <ModalBody>
              <p>Are you sure you want to delete this product?</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose} disabled={isLoading}>
                Cancel
              </Button>
              <Button color="primary" onClick={confirmDelete} disabled={isLoading}>
                {isLoading ? <Spinner color="danger" /> : "Delete"}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ProductItem;
