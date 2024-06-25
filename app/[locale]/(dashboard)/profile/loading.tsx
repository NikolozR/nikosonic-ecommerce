import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

function loading() {
  return (
    <section className="mb-[80px]">
      <div className="container">
        <Skeleton className="rounded-lg my-[40px]">
          <h1 className="font-poppins text-[3.375rem] font-medium text-center">
            My Profile
          </h1>
        </Skeleton>
        <div className="flex gap-[80px]">
          <Card className="bg-[#F3F5F7] dark:bg-slate-500 rounded-[8px] h-fit w-fit flex flex-col px-[16px] py-[40px]">
            <div>
              <Skeleton className="rounded-[100%] w-fit h-fit mx-auto">
                <div className="h-[100px] w-[100px] rounded-[50%] bg-default-300"></div>
              </Skeleton>
              <Skeleton className="rounded-lg mt-[6px]">
                <h2 className="text-[1.25rem] font-semibold text-center mb-[40px]">
                  User Name Surname
                </h2>
              </Skeleton>
            </div>
            <ul className="w-[230px] max-w-full flex flex-col gap-[12px]">
              {["Profile", "Addresses", "Orders", "My Blogs", "Log Out"].map(
                (_, index) => (
                  <li key={index} className="h-[42px] flex items-center">
                    <Skeleton className="w-full rounded-lg">
                      <div className="h-[20px] bg-default-300"></div>
                    </Skeleton>
                  </li>
                )
              )}
            </ul>
          </Card>
          <div className="w-[60%] flex flex-col">
            <Skeleton className="rounded-lg mb-[24px]">
              <h2 className="text-[1.25rem] font-semibold">Account Details</h2>
            </Skeleton>
            {["First Name", "Last Name", "Display Name", "Email"].map(
              (_, index) => (
                <Skeleton key={index} className="rounded-lg mb-[24px]">
                  <div className="h-[40px] bg-default-300"></div>
                </Skeleton>
              )
            )}
            <div className="mt-[24px]">
              <Skeleton className="rounded-lg">
                <div className="h-[40px] bg-default-300"></div>
              </Skeleton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default loading;
