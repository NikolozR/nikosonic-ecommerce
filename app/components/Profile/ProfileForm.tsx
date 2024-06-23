"use client";
import React, { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Button as NextUIButton,
} from "@nextui-org/react";
import { handleProfileChange } from "../../actions";
import Button from "../shared/Button";

function ProfileForm({ user }: { user: User }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // State to manage loading state

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true); // Start loading
      const formData = new FormData(event.currentTarget);
      await handleProfileChange(formData);
      setMessage("Profile updated successfully!");
      onOpen();
      setTimeout(() => {
        onClose();
        setMessage(null);
      }, 3000);
    } catch (error) {
      console.error("Failed to update profile:", error);
      setMessage("Failed to update profile.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <form className="w-[60%] flex flex-col" onSubmit={handleSubmit}>
      <ProfileDetails user={user} />
      <div className="mt-[24px]">
        <Button
          type="submit"
          fontSize="1rem"
          leading="28px"
          padding="px-[40px] py-[12px]"
          disabled={loading} // Disable button when loading is true
        >
          {loading ? "Saving Changes..." : "Save Changes"} {/* Show loading state on button */}
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Profile Update Status
          </ModalHeader>
          <ModalBody>
            <p>{message}</p>
          </ModalBody>
          <ModalFooter>
            <NextUIButton color="primary" variant="light" onPress={onClose}>
              Close
            </NextUIButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
}

export default ProfileForm;
