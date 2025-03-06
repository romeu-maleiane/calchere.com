import { Date } from "@/calcData/page";
import BreadCrumb from "@/components/breadCrumb";
import CardCalc from "@/components/cardCalc";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Accurate Date Calculations",
    description: "Easily calculate days between dates or determine your exact age with our fast and reliable date calculators.",
  };

export default function PageDate() {

    return <>
        <main className="bg-white text-black h-[1fr]">
            <section className="h-[25rem] bg-[#FEA500]/20">

                <BreadCrumb route1={'Home'} route2={'Date'} href1="date" />

                <div className="h-full py-7 px-5 md:px-10 xl:px-60 lg:px-30  ">
                    <h1 className="text-3xl md:text-4xl text-[#FEA500] font-medium ">Date</h1>
                    <p className="mt-4 text-xl ">
                        Easily calculate days between dates or determine 
                        your exact age with our fast and reliable date calculators.
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

            </section>
        </main>
    </>
}