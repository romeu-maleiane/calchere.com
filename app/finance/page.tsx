import { Finance } from "@/calcData/page";
import BreadCrumb from "@/components/breadCrumb";
import CardCalc from "@/components/cardCalc";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Financial Calculators for Smarter Decisions",
    description: "Calculate interest, taxes, and discounts quickly to manage your finances effectively.",
  };

export default function PageFinance(){

    return <>
        <main className="bg-white text-black h-[1fr]">
            <section className="h-[25rem] bg-[#FEA500]/20">
                
                <BreadCrumb route1={'Home'} route2={'Finance'} href1="finance" />
                
                <div className="h-full py-7 px-5 md:px-10 xl:px-60 lg:px-30  ">
                    <h1 className="text-3xl md:text-4xl text-[#FEA500] font-medium ">Finance</h1>
                    <p className="mt-4 text-xl ">
                    Calculate interest, taxes, and discounts quickly to manage your finances effectively.
                    </p>
                
                </div>
            
            </section>
            
            <section className="px-20 py-10 xl:px-60 lg:px-30">
                
                <div className="mb-12">
                    <h4 className="text-2xl font-medium">Finance</h4>
                    <div className="mt-4">
                        <CardCalc category={Finance} />
                    </div>
                </div>
                
            </section>
        </main>
    </>
}