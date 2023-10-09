import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from "react";
import { Button, Modal, ModalProps } from "antd";
import OrderTimeForm from "./OrderTimeForm";

interface OrderTimeRef {
  onShow: () => void;
  onClose: () => void;
}
const OrderTime: ForwardRefRenderFunction<OrderTimeRef, ModalProps> = (
  props,
  ref
) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useImperativeHandle(
    ref,
    () =>
      ({
        onShow: handleShow,
        onClose: handleClose,
      }) as OrderTimeRef
  );

  return (
    <Modal
      open={isOpen}
      centered
      title="Đặt hẹn"
      onCancel={handleClose}
      footer={null}
      // bodyStyle={{ overflowY: "scroll", height: "calc(100vh - 250px)" }}
      {...props}
    >
      <OrderTimeForm handleClose={handleClose} />
    </Modal>
  );
};

export default forwardRef<OrderTimeRef, ModalProps>(OrderTime);

export type { OrderTimeRef };
