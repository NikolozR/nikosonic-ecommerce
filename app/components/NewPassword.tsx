import Input from "./shared/Input"

function NewPassword() {
  return (
    <div className='flex flex-col gap-[24px] mt-[40px]'>
        <h2 className='text-[1.25rem] font-semibold'>Password</h2>
        <Input name='old' label='Old password' placeHolder="Old Password" />
        <Input name='new' label='new password' placeHolder="New Password" />
        <Input name='repeat' label='rEPEAT NEW PASSWORD' placeHolder="Repeat new password" />
    </div>
  )
}

export default NewPassword