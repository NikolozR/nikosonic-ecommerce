import React from "react";
import Input from "../shared/Input";
import {  } from "next-intl/server";
import { useTranslations } from "next-intl";

function ProfileDetails({user}: {user: User}) {
  const t = useTranslations("Profile")
  return (
    <div className="flex flex-col gap-[24px]">
      <h2 className="text-[1.25rem] font-semibold">{t('account')}</h2>
      <Input name="FirstName" inputClassName="dark:text-white" defaultValue={user.name} label={t('name')} placeHolder={t('name')} />
      <Input name="LastName" inputClassName="dark:text-white" label={t('lastName')} defaultValue={user.surname} placeHolder={t('lastName')} />
      <Input
        name="DisplayName"
        inputClassName="dark:text-white"
        label={t('display')}
        additionalInfo={t('explanation')}
        placeHolder={t('display')}
        defaultValue={user.displayname ?? ''}
      />
      <Input name="email" label={t('email')} inputClassName="dark:text-white" placeHolder={t('email')} defaultValue={user.email} disabled />
    </div>
  );
}

export default ProfileDetails;
