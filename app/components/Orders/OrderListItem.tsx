"use client";
import React, { useOptimistic } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { format } from "date-fns";
import Button from "../shared/Button";
import { cancelOrder } from "../../api/api";

interface OrderListItemProps {
  order: TransformedOrder;
}

const formatDate = (dateString: string) => {
  return format(new Date(dateString), "MMMM dd, yyyy");
};

const OrderListItem: React.FC<OrderListItemProps> = ({ order }) => {
  const [optimisticOrder, updateOptmisticOrder] = useOptimistic(
    order,
    (_: TransformedOrder, action: TransformedOrder) => {
      return action;
    }
  );
  const {
    isOpen: isCancelOpen,
    onOpen: onCancelOpen,
    onClose: onCancelClose,
  } = useDisclosure();
  const {
    isOpen: isViewOpen,
    onOpen: onViewOpen,
    onClose: onViewClose,
  } = useDisclosure();

  return (
    <div className="grid w-full grid-cols-ordersTemplate border-b-1 border-solid border-[#E8ECEF]">
      <div className="text-[1rem] leading-[22px] py-[24px]">
        #{order.order_id}
      </div>
      <div className="text-[1rem] leading-[22px] py-[24px]">
        {formatDate(order.date)}
      </div>
      <div className="text-[1rem] leading-[22px] py-[24px]">
        {optimisticOrder.order_status}
      </div>
      <div className="text-[1rem] leading-[22px] py-[24px]">
        ${order.total_price}
      </div>
      <div className="flex items-center justify-end gap-[20px]">
        <Button
          fontSize="1rem"
          padding="px-[15px] py-[6px]"
          type="button"
          handleClick={onViewOpen}
        >
          View
        </Button>
        {optimisticOrder.order_status !== "canceled" && (
          <Button
            fontSize="1rem"
            padding="px-[15px] py-[6px]"
            type="button"
            handleClick={onCancelOpen}
          >
            Cancel
          </Button>
        )}
      </div>

      <Modal isOpen={isCancelOpen} onClose={onCancelClose}>
        <ModalContent>
          <ModalHeader>Cancel Order</ModalHeader>
          <ModalBody>
            Are you sure you want to cancel order #{order.order_id}?
          </ModalBody>
          <ModalFooter>
            <Button
              fontSize="1rem"
              padding="px-[30px] py-[8px]"
              type="button"
              handleClick={onCancelClose}
            >
              No
            </Button>
            <Button
              fontSize="1rem"
              padding="px-[30px] py-[8px]"
              type="button"
              handleClick={() => {
                const toUpdate = { ...optimisticOrder };
                toUpdate.order_status = "canceled";
                updateOptmisticOrder(toUpdate);
                onCancelClose();
                cancelOrder(optimisticOrder.order_id);
              }}
            >
              Yes, Cancel Order
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* View Order Modal */}
      <Modal isOpen={isViewOpen} onClose={onViewClose}>
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <p className="text-lg font-semibold">
                <strong>Order ID:</strong> #{order.order_id}
              </p>
              <p className="text-lg">
                <strong>Date:</strong> {formatDate(order.date)}
              </p>
              <p className="text-lg">
                <strong>Status:</strong> {order.order_status}
              </p>
              <p className="text-lg">
                <strong>Total Amount:</strong> ${order.total_amount.toFixed(2)}
              </p>
              <div>
                <strong className="text-lg">Items:</strong>
                <ul className="list-disc list-inside pl-5 space-y-2 mt-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-lg">
                      {item.name} - ${item.price} x {item.order_item_quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              fontSize="1rem"
              padding="px-[15px] py-[5px]"
              handleClick={onViewClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OrderListItem;
