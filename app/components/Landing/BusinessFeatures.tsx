import { LiaShippingFastSolid } from "react-icons/lia";
import { CiMoneyBill } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

function BusinessFeatures() {
  return (
    <section>
        <div className="container">
            <div className="grid py-[40px] grid-cols-4 gap-[24px]">
                <div className="bg-[#F3F5F7] py-[48px] pl-[32px]">
                    <LiaShippingFastSolid size={40} className="mb-[16px]"></LiaShippingFastSolid>
                    <h3 className="font-medium font-poppins text-[1.25rem]">Free Shipping</h3>
                    <p className="mt-[8px] text-[#6C7275] font-poppins text-[0.875rem]">Order above $200</p>
                </div>
                <div className="bg-[#F3F5F7] py-[48px] pl-[32px]">
                    <CiMoneyBill size={40} className="mb-[16px]" ></CiMoneyBill>
                    <h3 className="font-medium font-poppins text-[1.25rem]">Money-back</h3>
                    <p className="mt-[8px] text-[#6C7275] font-poppins text-[0.875rem]">30 days guarantee</p>
                </div>
                <div className="bg-[#F3F5F7] py-[48px] pl-[32px]">
                    <CiLock size={40} className="mb-[16px]" ></CiLock>
                    <h3 className="font-medium font-poppins text-[1.25rem]">Secure Payments</h3>
                    <p className="mt-[8px] text-[#6C7275] font-poppins text-[0.875rem]">Secured by Stripe</p>
                </div>
                <div className="bg-[#F3F5F7] py-[48px] pl-[32px]">
                    <FiPhone size={40} className="mb-[16px]" ></FiPhone>
                    <h3 className="font-medium font-poppins text-[1.25rem]">24/7 Support</h3>
                    <p className="mt-[8px] text-[#6C7275] font-poppins text-[0.875rem]">Phone and Email support</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default BusinessFeatures