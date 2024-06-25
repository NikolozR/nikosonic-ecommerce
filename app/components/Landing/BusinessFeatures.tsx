import { LiaShippingFastSolid } from "react-icons/lia";
import { CiMoneyBill } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { getTranslations } from "next-intl/server";

async function BusinessFeatures() {
  const t = await getTranslations("Features");
  return (
    <section className="dark:bg-[#241b33] bg-white">
      <div className="container">
        <div className="grid py-[40px] grid-cols-2 md:grid-cols-4 gap-[24px]">
          <div className="bg-[#F3F5F7] dark:bg-[#201424] py-[48px] px-[10px] xs:pl-[24px] xs:pr-[10px]">
            <LiaShippingFastSolid
              size={40}
              className="mb-[16px] dark:hidden"
            ></LiaShippingFastSolid>
            <LiaShippingFastSolid
              size={40}
              color="#ECEDEE"
              className="mb-[16px] hidden dark:block"
            ></LiaShippingFastSolid>
            <h3 className="font-medium dark:text-[#ECEDEE] font-poppins text-[0.875rem] lg:text-[1.25rem] leading-[20px]">
              {t("ship")}
            </h3>
            <p className="mt-[8px] text-[#6C7275] font-poppins text-[0.7rem] lg:text-[0.875rem]">
              {t("shipText")}
            </p>
          </div>
          <div className="bg-[#F3F5F7] dark:bg-[#201424] py-[48px] px-[10px] xs:pl-[24px] xs:pr-[10px]">
            <CiMoneyBill size={40} className="mb-[16px] dark:hidden"></CiMoneyBill>
            <CiMoneyBill
              size={40}
              className="mb-[16px] hidden dark:block"
              color="#ECEDEE"
            ></CiMoneyBill>
            <h3 className="font-medium dark:text-[#ECEDEE] font-poppins text-[0.875rem] lg:text-[1.25rem] leading-[20px]">
              {t("money")}
            </h3>
            <p className="mt-[8px] text-[#6C7275] font-poppins text-[0.7rem] lg:text-[0.875rem]">
              {t("moneyText")}
            </p>
          </div>
          <div className="bg-[#F3F5F7] dark:bg-[#201424] py-[48px] px-[10px] xs:pl-[24px] xs:pr-[10px]">
            <CiLock size={40} className="mb-[16px] dark:hidden"></CiLock>
            <CiLock
              size={40}
              className="mb-[16px] hidden dark:block"
              color="#ECEDEE"
            ></CiLock>
            <h3 className="font-medium dark:text-[#ECEDEE] font-poppins text-[0.875rem] lg:text-[1.25rem] leading-[20px]">
              {t("payment")}
            </h3>
            <p className="mt-[8px] text-[#6C7275] font-poppins text-[0.7rem] lg:text-[0.875rem]">
              {t("paymentText")}
            </p>
          </div>
          <div className="bg-[#F3F5F7] dark:bg-[#201424] py-[48px] px-[10px] xs:pl-[24px] xs:pr-[10px]">
            <FiPhone size={40} className="mb-[16px] dark:hidden"></FiPhone>
            <FiPhone
              size={40}
              className="mb-[16px] hidden dark:block"
              color="#ECEDEE"
            ></FiPhone>
            <h3 className="font-medium dark:text-[#ECEDEE] font-poppins text-[0.875rem] lg:text-[1.25rem] leading-[20px]">
              {t("support")}
            </h3>
            <p className="mt-[8px] text-[#6C7275] font-poppins text-[0.7rem] lg:text-[0.875rem]">
              {t("supportText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessFeatures;
