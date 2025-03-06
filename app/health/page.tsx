import { Health } from "@/calcData/page";
import BreadCrumb from "@/components/breadCrumb";
import CardCalc from "@/components/cardCalc";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Health Calculators for Better Living",
    description: "Track BMI, BMR, and more to support your health and fitness goals with precision.",
  };

export default function PadeHealth() {

    return <>
        <main className="bg-white text-black h-[1fr]">
            <section className="h-[25rem] bg-[#FEA500]/20">

                <BreadCrumb route1={'Home'} route2={'Health'} href1="health" />

                <div className="h-full py-7 px-5 md:px-10 xl:px-60 lg:px-30  ">
                    <h1 className="text-4xl text-[#FEA500] font-medium ">Health</h1>
                    <p className="mt-4 text-xl ">
                        Track BMI, BMR, and more to support your health and fitness goals with precision.
                    </p>

                </div>

            </section>

            <section className="px-20 py-10 xl:px-60 lg:px-30">

                <div className="mb-12">
                    <h4 className="text-2xl font-medium">Health</h4>
                    <div className="mt-4">
                        <CardCalc category={Health} />
                    </div>
                </div>

            </section>
        </main>
    </>
}