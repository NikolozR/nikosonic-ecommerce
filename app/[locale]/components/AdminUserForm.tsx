'use client'
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalProvider";


function AdminUserForm({
  id,
  name = "",
  email = "",
  age = 0,
  role = "",
  type,
  handleSubmit
}: AdminFormUser) {
  const {setIsOpen} = useContext(ModalContext)
  return (
    <form action={handleSubmit} onSubmit={() => setIsOpen(false)} className="flex flex-col gap-10 items-center">
      {type === 'edit' && <input defaultValue={id} name="id" className="hidden"></input>}
      <div className="w-[300px] flex justify-between">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          className="dark:bg-transparent focus-visible:outline-none dark:border-neutral-1 pb-[10px] border-solid border-b-2 border-neutral-7"
          defaultValue={name}
        />
      </div>
      <div className="w-[300px] flex justify-between">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          className="dark:bg-transparent focus-visible:outline-none dark:border-neutral-1 pb-[10px] border-solid border-b-2 border-neutral-7"
          defaultValue={email}
        />
      </div>
      {type === "add" && (
        <div className="w-[300px] flex justify-between">
          <label htmlFor="email">Password:</label>
          <input
            type="password"
            name="password"
            className="dark:bg-transparent focus-visible:outline-none dark:border-neutral-1 pb-[10px] border-solid border-b-2 border-neutral-7"
          />
        </div>
      )}
      <div className="w-[300px] flex justify-between">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          className="dark:bg-transparent focus-visible:outline-none dark:border-neutral-1 pb-[10px] border-solid border-b-2 border-neutral-7"
          defaultValue={age}
        />
      </div>
      <div className="w-[300px] flex justify-between">
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          name="role"
          className="dark:bg-transparent focus-visible:outline-none dark:border-neutral-1 pb-[10px] border-solid border-b-2 border-neutral-7"
          defaultValue={role}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AdminUserForm;
