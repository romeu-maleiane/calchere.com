import BreadCrumb from "@/components/breadCrumb";
import CalcPercentage from "@/components/calcPercentage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Percentage Calculator",
    description: "Easily calculate percentages for discounts, increases, or proportions with our percentage calculator. Great for shopping, finance, and statistics.",
  };

export default function PagePercentage() {

    return <>
        <main className="bg-white text-black h-[1fr]">
            <section className="h-[25rem] bg-[#FEA500]/20">

                <BreadCrumb route1={'Home'} route2={'Finance'} route3="Percentage Calculator"
                    href1="finance" href2="percentage-calculator" />

                <div className="h-full md:py-7 max-md:pb-7 max-md:pt-4 px-5 xl:px-60 lg:px-30  ">

                    <h1 className="max-md:text-3xl md:text-4xl text-[#FEA500] font-medium ">Percentage Calculator</h1>
                    <p className="mt-4 text-xl ">
                    Perform percentage calculations for discounts, increases, or proportions easily and quickly 
                    with our practical tool.
                    </p>

                </div>

            </section>

            <section className="px-5 py-10 my-5 xl:px-52 lg:px-40">

                <CalcPercentage />


            </section>

            <section className="px-5 py-10 xl:px-60 lg:px-30">

                <div>
                    <h4 className="text-2xl font-medium">About</h4>
                    <p className="text-xl mt-4">
                        This website is designed to help you perform quick and accurate calculations for various purposes.
                        Whether calculating discounts, compound interest, date differences, or evaluating the Basal Metabolic Rate (BMR), our calculators offer an efficient solution for your daily needs.
                    </p>
                </div>

                <div className="mt-8">
                    <h4 className="text-2xl font-medium">Frequently Asked Questions (FAQ)</h4>

                    <h6 className="text-xl mt-5 font-medium">What is percentage?</h6>
                    <p className="text-xl mt-2">
                    Percentage expresses a fraction of 100 and is used to represent discounts, 
                    increases, and comparisons.
                    </p>

                    <h6 className="text-xl mt-5 font-medium">How to calculate a percentage?</h6>
                    <p className="text-xl mt-2">
                    Enter the total value and the desired percentage to get the corresponding value.
                    </p>

                    <h6 className="text-xl mt-5 font-medium">Why is calculating percentages useful?</h6>
                    <p className="text-xl mt-2">
                    This calculation is widely used in shopping, finance, and statistics, 
                    making it easier to understand proportional values.
                    </p>

                </div>

            </section>
        </main>
    </>
}