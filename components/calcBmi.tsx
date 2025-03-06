'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { validateSet } from "@/lib/utils"



export default function CalcBMI(){
    const [showResult, setShowResult] = useState(false)
    const [height, setHeight] = useState("0")
    const [weight, setWeight] = useState("0")
    const [dataResult, setDataResult] = useState({
        imc: 0,
        classification: <span ></span>
    })

    function result(){
        if (+height < 0 && +weight < 0) return alert('Weight and height must be greater than zero!')
        
        const imc =  +weight /  ((+height) ** 2)
        
        if (imc < 18.5) {
            setDataResult({ 
                imc,
                classification:<span className="text-red-500">Underweight</span>
            })
            setShowResult(true)
        } 
        else if(imc >= 18.5 && imc <= 24.9){
            setDataResult({ 
                imc,
                classification:<span className="text-green-500">Normal</span>
            })
            setShowResult(true)
        }
        else if(imc >= 25 && imc <= 29.9){
            setDataResult({ 
                imc,
                classification:<span className="text-[#FEDF1B]">Overweight</span>
            })
            setShowResult(true)        
            }
        else if(imc >= 30 && imc >= 40){
            setDataResult({ 
                imc,
                classification: <span className="text-red-500">Obesity</span>
            })
            setShowResult(true)
        }
        else {
            return alert('Check if you entered valid values!')
        }
    }

    return <>
        <div className="">
            <Card className=" border-[#FEA500]/20">
                <CardContent>

                    <div className="flex justify-center sm:justify-between md:justify-around py-3 gap-3 flex-wrap items-center">
                        <div className="max-md:w-40 md:max-w-60 w-full">
                            <label htmlFor="beforeSale" className="text-lg">
                                Height
                            </label>

                            <div className="w-full flex">
                                <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-14 flex justify-center items-center rounded-l-md">
                                    <span className="text-lg">m</span>
                                </div>
                                <Input id="beforeSale"
                                    value={height}
                                    onChange={(e) => validateSet(e.target.value, setHeight)}
                                    className="border-[#FEA500]/20 rounded-l-none" />
                            </div>

                        </div>
                        <div className="max-w-40 md:max-w-60 w-full">
                            <label htmlFor="tax" className="text-lg">
                                Weight
                            </label>

                            <div className="w-full flex">
                                <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-14 flex justify-center items-center rounded-l-md">
                                    <span className="text-lg">kg</span>
                                </div>
                                <Input id="tax"
                                    value={weight}
                                    onChange={(e) => validateSet(e.target.value, setWeight)}
                                    className="border-[#FEA500]/20 rounded-l-none" />
                            </div>

                        </div>
                    </div>

                    
                </CardContent>
                <CardFooter className="flex justify-between md:justify-around md:px-10 px-5 gap-3 flex-wrap items-center">
                    <Button onClick={() => {
                        result()
                    }}>
                        Calculate
                    </Button>
                    <Button onClick={() => {
                        setHeight('0')
                        setWeight("0")
                        setDataResult({
                            imc: 0,
                            classification: <span></span>
                        })
                    }}>
                        To Clean
                    </Button>
                </CardFooter>
            </Card>

            <div className={`transition ease-in duration-300 overflow-hidden ${showResult ? "translate-y-0 " : "h-0"}`}>
                <Table className={` border border-[#FEA500]/20  delay-500 rounded-lg mt-5`}>
                    <TableCaption className="text-lg">
                        Result
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-lg">Your BMI</TableHead>

                            <TableHead className="text-lg">Classification</TableHead>
                        </TableRow>
                    </TableHeader>
                    
                    <TableFooter>
                        <TableRow className="text-lg">
                            <TableCell><span className="text-[#FEA500]">{dataResult.imc.toFixed(2)}</span></TableCell>
                            <TableCell className="font-bold">{dataResult.classification}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    </>
}