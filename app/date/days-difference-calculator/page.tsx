import BreadCrumb from "@/components/breadCrumb";
import CalcDaysDiferrence from "@/components/calcDaysDiferrence";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Day Difference Calculator",
    description: "Calculate the number of days between two dates accurately with our day difference calculator. Ideal for travel planning, deadlines, and project management.",
  };

export default function PageDateCalculator() {

    return <>
        <main className="bg-white text-black h-[1fr]">
            <section className="h-[25rem] bg-[#FEA500]/20">

                <BreadCrumb route1={'Home'} route2={'Date'} route3="Days Difference Calculator"
                    href1="date" href2="days-difference-calculator" />

                <div className="h-full md:py-7 max-md:pb-7 max-md:pt-4 px-5 md:px-10 xl:px-60 lg:px-30  ">

                    <h1 className="max-md:text-3xl md:text-4xl text-[#FEA500] font-medium ">Days Difference Calculator</h1>
                    <p className="mt-4 text-xl ">
                    Quickly find the exact number of days between two dates with our easy-to-use calculator, 
                    perfect for planning deadlines, projects, or events.
                    </p>

                </div>

            </section>

            <section className="px-20 py-10 my-5 xl:px-80 lg:px-52">

                <CalcDaysDiferrence />


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

                    <h6 className="text-xl mt-5 font-medium">What is the difference between days?</h6>
                    <p className="text-xl mt-2">
                    The difference between days is the count of the number of days between two dates, 
                    used for deadline calculations, financial planning, and project tracking. Our calculator makes this task quick and accurate.
                    </p>

                    <h6 className="text-xl mt-5 font-medium">How to calculate the difference between days?</h6>
                    <p className="text-xl mt-2">
                    Simply enter the start date and the end date. The result will display the total number 
                    of days between the selected dates.
                    </p>

                    <h6 className="text-xl mt-5 font-medium">Why is calculating the difference between days important?</h6>
                    <p className="text-xl mt-2">
                    This calculation is widely used for contracts, payment deadlines, 
                    and travel planning, helping to manage commitments efficiently.
                    </p>

                </div>

            </section>
        </main>
    </>
}