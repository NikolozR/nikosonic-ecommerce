'use client'


function DeleteButton({id, handleDelete}: {id: number, handleDelete: (id:number) => void}) {
  return (
    <button className="dark:text-white" onClick={() => handleDelete(id)}>Delete</button>
)
}

export default DeleteButton