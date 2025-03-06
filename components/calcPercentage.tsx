'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { validateSet } from "@/lib/utils"



export default function CalcPercentage() {
    const [showResultValue, setShowResultValue] = useState(false)
    const [showResultPercent, setShowResultPercent] = useState(false)
    const [percent, setPercent] = useState(0)
    const [dataResultValue, setDataResultValue] = useState(0)
    const [percentValue, setPercentValue] = useState(0)
    const [valuePercent, setValuePercent] = useState(0)
    const [valueObjective, setValueObjective] = useState(0)
    const [dataResultPercent, setDataResultPercent] = useState(0)
    

    function resultValue(){
        const result = (percentValue / 100) * percent
        setDataResultValue(result)
        setShowResultValue(true)
    }

    function resultPercent(){
        const result = (valuePercent / valueObjective) * 100
        setDataResultPercent(result)
        setShowResultPercent(true)
    }

    return <>
        <div className="lg:px-30 xl:px-60">
            <Card className=" border-[#FEA500]/20">
                <CardContent>
                    <div className="flex justify-center py-3 items-center sm:px-10 ">
                       
                        <div className="w-full flex justify-center items-center">
                            <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-40 md:w-24 flex justify-center items-center rounded-l-md">
                                <span className="text-lg">What is </span>
                            </div>
                            <Input 
                                value={percent}
                                onChange={(e) => validateSet(e.target.value, setPercent)}
                                className="border-[#FEA500]/20 sm:w-24 w-20 rounded-none" />
                            <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-32 md:w-24 flex justify-center items-center rounded-none">
                                <span className="text-lg">% of </span>
                            </div>
                            <Input 
                                value={percentValue}
                                onChange={(e) => validateSet(e.target.value, setPercentValue)}
                                className="border-[#FEA500]/20 sm:w-28 w-24 rounded-none" />
                            <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-20 md:w-14 flex justify-center items-center rounded-r-md">
                                <span className="text-lg"> ?</span>
                            </div>
                        </div>

                    </div>


                </CardContent>
                <CardFooter className="flex justify-around md:px-10 px-5 gap-3 flex-wrap items-center">
                    <Button onClick={() => {
                        resultValue()

                    }}>
                        Calculate
                    </Button>
                    <Button onClick={() => {
                        setPercent(0)
                        setPercentValue(0)
                        setDataResultValue(0)
                    }}>
                        To Clean
                    </Button>
                </CardFooter>
            </Card>

            <div className={`transition ease-in duration-300 overflow-hidden ${showResultValue ? "translate-y-0 " : "h-0"}`}>
                <Table className={` border border-[#FEA500]/20  delay-500 rounded-lg mt-5`}>
                    <TableCaption className="text-lg">
                        Result
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-lg">Event</TableHead>

                            <TableHead className="text-lg">Values</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableFooter>
                        <TableRow className="text-lg">
                            <TableCell><span className="text-[#FEA500]">Value</span></TableCell>
                            <TableCell><span className="text-[#FEA500]">{dataResultValue}</span></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>


            <Card className=" border-[#FEA500]/20 mt-10">
                <CardContent>
                <div className="flex justify-center py-3 items-center sm:px-10 ">
                       
                       <div className="w-full flex justify-center items-center">
                           
                           <Input id="tax"
                               value={valuePercent}
                               onChange={(e) => validateSet(e.target.value, setValuePercent)}
                               className="border-[#FEA500]/20 sm:w-24 w-16 rounded-l-md rounded-r-none" />
                           <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-40 px-1  flex justify-center items-center rounded-none">
                               <span className="text-lg">is what percent of</span>
                           </div>
                           <Input id="tax"
                               value={valueObjective}
                               onChange={(e) => validateSet(e.target.value, setValueObjective)}
                               className="border-[#FEA500]/20 sm:w-28 w-20 rounded-none" />
                            <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-10 md:w-14 flex justify-center items-center rounded-r-md">
                                <span className="text-lg"> ?</span>
                            </div>

                       </div>

                   </div>


                </CardContent>
                <CardFooter className="flex justify-around md:px-10 px-5 gap-3 flex-wrap items-center">
                    <Button onClick={() => {
                        resultPercent()
                    }}>
                        Calculate
                    </Button>
                    <Button onClick={() => {
                        setValueObjective(0)
                        setValuePercent(0)
                        setDataResultPercent(0)
                    }}>
                        To Clean
                    </Button>
                </CardFooter>
            </Card>

            <div className={`transition ease-in duration-300 overflow-hidden ${showResultPercent ? "translate-y-0 " : "h-0"}`}>
                <Table className={` border border-[#FEA500]/20  delay-500 rounded-lg mt-5`}>
                    <TableCaption className="text-lg">
                        Result
                    </TableCaption>
                    <TableHeader>
                        <TableRow className="text-lg">
                            <TableHead>Event</TableHead>

                            <TableHead>Values</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableFooter>
                        <TableRow className="text-lg">
                            <TableCell><span className="text-[#FEA500]">percentage</span></TableCell>
                            <TableCell><span className="text-[#FEA500]">{dataResultPercent}%</span></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    </>
}