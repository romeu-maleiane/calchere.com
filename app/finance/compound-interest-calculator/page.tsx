import BreadCrumb from "@/components/breadCrumb";
import CalcCompoundInterest from "@/components/calcCompounInteres";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Compound Interest Calculator",
    description: "See how your savings grow with our compound interest calculator. Fast and reliable for investment planning and financial projections.",
};

export default function PageCompoundInterestCalculator() {

    return <>
        <main className="bg-white text-black h-[1fr]">
            <section className="h-[25rem]  bg-[#FEA500]/20">

                <BreadCrumb route1={'Home'} route2={'Finance'} route3="Compound Interest Calculator"
                    href1="finance" href2="compound-interest-calculator" />

                <div className="h-full md:py-7 max-md:pb-7 max-md:pt-4 px-5 md:px-10 xl:px-60 lg:px-30  ">

                    <h1 className="max-md:text-3xl md:text-4xl text-[#FEA500] font-medium  ">Compound Interest Calculator</h1>
                    <p className="mt-4 text-xl ">
                        Compound interest grows exponentially, making it a powerful tool for
                        investments. Use our calculator to estimate your future earnings with ease.
                    </p>

                </div>

            </section>

            <section className="px-20 py-10 my-5 xl:px-80 lg:px-52">

                <CalcCompoundInterest />

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

                    <h6 className="text-xl mt-5 font-medium">What is compound interest?</h6>
                    <p className="text-xl mt-2">
                        Compound interest represents the exponential growth of an initial amount,
                        where accumulated interest is added to the principal for the calculation
                        of new interest.
                    </p>

                    <h6 className="text-xl mt-5 font-medium">How to calculate compound interest?</h6>
                    <p className="text-xl mt-2">
                        Enter the initial amount, interest rate, and period to obtain the
                        final amount with compound interest.
                    </p>

                    <h6 className="text-xl mt-5 font-medium">Why is calculating compound interest important?</h6>
                    <p className="text-xl mt-2">
                        This calculation is essential for investments, loans, and financial planning,
                        helping to visualize the growth of values over time.
                    </p>

                </div>

            </section>
        </main>
    </>
}