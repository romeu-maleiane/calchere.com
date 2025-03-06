import CardCalc from "@/components/cardCalc";
import { Metadata } from "next";
import { Finance, Health, Date } from "@/calcData/page";

export const metadata: Metadata = {
  title: "Smart Calculators for Everyday Needs",
  description: "Quick and accurate calculators for dates, health, and finance. Simplify your tasks with smart tools for everyday needs.",
};

export default function Home() {
  return (
    <main className="bg-white text-black">
      <section className="h-[25rem] bg-[#FEA500]/20">
        <div className="h-full py-20 sm:px-20 px-5 xl:px-80 lg:px-40 text-center ">
          <h1 className="text-4xl text-[#FEA500] font-medium ">calchere.com</h1>
          <p className="mt-4 text-xl">
            Perform quick and accurate calculations for dates, health, and finances — all in one place. 
            Simplify your daily tasks with our easy-to-use tools. 
          </p>
        </div>
      </section>
      <section className="px-20 py-10 xl:px-60 lg:px-30">
        <div className="mb-12">
          <h4 className="text-2xl font-medium">Date</h4>
          <div className="mt-4">
            <CardCalc category={Date} />
          </div>
        </div>
        <div className="mb-12">
          <h4 className="text-2xl font-medium">Finance</h4>
          <div className="mt-4">
            <CardCalc category={Finance} />
          </div>
        </div>
        <div className="mb-12">
          <h4 className="text-2xl font-medium">Health</h4>
          <div className="mt-4">
            <CardCalc category={Health} />
          </div>
        </div>
      </section>
    </main>
  );
}
