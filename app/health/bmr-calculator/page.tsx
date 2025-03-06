import BreadCrumb from "@/components/breadCrumb";
import CalcBMR from "@/components/calBmr";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: " Basal Metabolic Rate (BMR) Calculator ",
    description: "Estimate your daily calorie needs with our BMR calculator. Perfect for diet planning and weight management.",
  };

export default function PageBMR() {

    return <>
        <main className="bg-white text-black h-[1fr]">
            <section className="h-[25rem]  bg-[#FEA500]/20">

                <BreadCrumb route1={'Home'} route2={'Health'} route3="Basal Metabolic Rate (BMR) Calculator"
                    href1="health" href2="bmr-calculator" />

                <div className="h-full md:py-7 max-md:pb-7 max-md:pt-4 px-5 md:px-10 xl:px-60 lg:px-30  ">

                    <h1 className="max-md:text-3xl md:text-4xl text-[#FEA500] font-medium ">Basal Metabolic Rate (BMR) Calculator</h1>
                    <p className="mt-4 text-xl ">
                        Calculate the number of calories your body needs to maintain vital functions at rest, 
                        helping you better plan your diet and health goals.
                    </p>

                </div>

            </section>

            <section className="px-20 py-10 my-5 xl:px-80 lg:px-52">

                <CalcBMR />


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

                    <h6 className="text-xl mt-5 font-medium">What is Basal Metabolic Rate (BMR)?</h6>
                    <p className="text-xl mt-2">
                    BMR represents the number of calories the body consumes at rest to maintain vital functions.
                    </p>

                    <h6 className="text-xl mt-5 font-medium">How to calculate BMR?</h6>
                    <p className="text-xl mt-2">
                        Enter your age, weight, height, and gender to get the approximate BMR.
                    </p>
                    <h6 className="text-xl mt-5 font-medium">Why is calculating BMR important?</h6>
                    <p className="text-xl mt-2">
                        This calculation helps plan diets and strategies for weight management.
                    </p>

                </div>

            </section>
        </main>
    </>
}