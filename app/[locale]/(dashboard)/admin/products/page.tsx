import AddProductForm from "../../../../components/AddProductForm";


function page() {
  return (
    <div className="container">
      <h1 className="font-poppins text-[3.375rem] text-[#240750] font-medium text-center py-[40px]">
        Create New Product
      </h1>
      <AddProductForm />
    </div>
  );
}

export default page;
