import Button from "./Button"

const handleSubmit = async () => {
    'use server'
}

function AdminUserForm({name = '', email ='', age = 0, role =''}: User) {
  return (
    <form action="">
        <input type="text" name="name" defaultValue={name} />
        <input type="email" name="email" defaultValue={email} />
        <input type="number" name="age" defaultValue={age} />
        <input type="text" name="role" defaultValue={role} />
        <Button handle={handleSubmit}>
            Submit
        </Button>
    </form>
  )
}

export default AdminUserForm