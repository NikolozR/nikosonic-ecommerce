import React from "react";
import Input from "../shared/Input";

function ProfileDetails({user}: {user: User}) {
  return (
    <div className="flex flex-col gap-[24px]">
      <h2 className="text-[1.25rem] font-semibold">Account Details</h2>
      <Input name="FirstName" defaultValue={user.name} label="First Name" placeHolder="First Name" />
      <Input name="LastName" label="Last Name" defaultValue={user.surname} placeHolder="Last Name" />
      <Input
        name="DisplayName"
        label="Display Name"
        additionalInfo="This will be how your name will be displayed in the account section and in reviews"
        placeHolder="Display Name"
        defaultValue={user.displayname ?? ''}
      />
      <Input name="FirstName" label="Email" placeHolder="Email" defaultValue={user.email} disabled />
    </div>
  );
}

export default ProfileDetails;
