import BreadCrumb from "@/components/breadCrumb";
import CalcAge from "@/components/calcAge";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Age Calculator",
    description: "Determine your exact age in years, months, and days with our precise age calculator. Perfect for personal records and official documentation.",
  };

export default function PageAge() {

    return <>
        <main className="bg-white text-black h-[1fr]">
            <section className="h-[25rem] max-sm:h-[30rem]  bg-[#FEA500]/20">

                <BreadCrumb route1={'Home'} route2={'Date'} route3="Age Calculator"
                    href1="date" href2="age-calculator" />

                <div className="h-full md:py-7 max-md:pb-7 max-md:pt-4 px-5 md:px-10 xl:px-60 lg:px-30  ">

                    <h1 className="max-md:text-3xl md:text-4xl text-[#FEA500] font-medium ">Age Calculator</h1>
                    <p className="mt-4 text-xl ">
                    Accurately calculate your age or anyone else's 
                    from the birth date to the current day using our simple and fast tool.
                    </p>

                </div>

            </section>

            <section className="px-20 py-10 my-5 xl:px-80 lg:px-52">

                <CalcAge />


            </section>

            <section className="px-5 md:px-10 py-10 xl:px-60 lg:px-30">

                <div>
                    <h4 className="text-2xl font-medium">About</h4>
                    <p className="text-xl mt-4">
                        This website is designed to help you perform quick and accurate calculations for various purposes.
                        Whether calculating discounts, compound interest, date differences, or evaluating the Basal Metabolic Rate (BMR), our calculators offer an efficient solution for your daily needs.
                    </p>
                </div>

                <div className="mt-8">
                    <h4 className="text-2xl font-medium">Frequently Asked Questions (FAQ)</h4>

                    <h6 className="text-xl mt-5 font-medium">What is age?</h6>
                    <p className="text-xl mt-2">
                        Age represents the number of complete years from the birth date to the current date or a specific reference date. 
                        It is a simple but essential calculation for official records and celebrations.
                    </p>

                    <h6 className="text-xl mt-5 font-medium">How to calculate age?</h6>
                    <p className="text-xl mt-2">
                        Enter the birth date and the reference date to get the exact age in years, months, and days.
                    </p>
                    <h6 className="text-xl mt-5 font-medium">Why is calculating age useful?</h6>
                    <p className="text-xl mt-2">
                        This calculation is used in legal documents, retirement planning, 
                        and other situations requiring age accuracy.
                    </p>

                </div>

            </section>
        </main>
    </>
}