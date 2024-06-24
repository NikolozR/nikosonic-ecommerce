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
import { useTranslations } from "next-intl";

function ProfileForm({ user }: { user: User }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const t = useTranslations('Profile')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
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
      setLoading(false);
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
          disabled={loading} 
        >
          {loading ? t('saving') : t('save')}
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {t('status')}
          </ModalHeader>
          <ModalBody>
            <p>{message?.includes('Failed') ? t('fail') : t('success')}</p>
          </ModalBody>
          <ModalFooter>
            <NextUIButton color="primary" variant="light" onPress={onClose}>
              {t("close")}
            </NextUIButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
}

export default ProfileForm;
