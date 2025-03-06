import BreadCrumb from "@/components/breadCrumb";
import CalcSalesTax from "@/components/calcSalesTax";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sales Tax Calculator",
    description: "Quickly calculate sales tax on any purchase with our sales tax calculator. Ideal for budgeting and expense tracking.",
  };

export default function SalesTaxCalculator() {

    return <>
        <main className="bg-white text-black h-[1fr]">
            <section className="h-[25rem] bg-[#FEA500]/20">

                <BreadCrumb route1={'Home'} route2={'Finance'} route3="Sales Tax Calculator"
                    href1="finance" href2="sales-tax-calculator" />

                <div className="h-full md:py-7 max-md:pb-7 max-md:pt-4 px-5 md:px-10 xl:px-60 lg:px-30  ">

                    <h1 className="max-md:text-3xl md:text-4xl text-[#FEA500] font-medium ">Sales Tax Calculator</h1>
                    <p className="mt-4 text-xl ">
                        Automatically calculate the tax amount on your purchases, 
                        helping you manage your daily finances more effectively.
                    </p>

                </div>

            </section>

            <section className="px-20 py-10 my-5 xl:px-80 lg:px-52">

                <CalcSalesTax />


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

                    <h6 className="text-xl mt-5 font-medium">What is sales tax?</h6>
                    <p className="text-xl mt-2">
                        Sales tax is a fee applied to the value of goods or services purchased, 
                        varying according to local regulations.
                    </p>

                    <h6 className="text-xl mt-5 font-medium">How to calculate sales tax?</h6>
                    <p className="text-xl mt-2">
                        Simply enter the product value and tax rate to 
                        get the final amount, including tax.
                    </p>

                    <h6 className="text-xl mt-5 font-medium">Why is calculating sales tax relevant?</h6>
                    <p className="text-xl mt-2">
                    This calculation helps anticipate the total cost of purchases, allowing for more efficient financial planning.
                    </p>

                </div>

            </section>
        </main>
    </>
}