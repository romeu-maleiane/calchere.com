'use client'

import { Table } from "./ui/table"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "./ui/table"
import { useState } from "react"
import { validateSet } from "@/lib/utils"


export default function CalcSalesTax() {
    const [showResult, setShowResult] = useState(false)
    const [beforeSale, setBeforeSale] = useState(0.00)
    const [tax, setTax] = useState(0.00)
    const [dataResult, setDataResult] = useState({
        beforeSale: 0.00,
        tax: 0.00,
        saleTax: 0.00,
        afterSale: 0.00
    })

    function result(){
        const saleTax = (beforeSale / 100) * tax
        const afterTaxPrice = +beforeSale + +saleTax
        setDataResult({
            beforeSale: +beforeSale,
            tax: +tax,
            saleTax,
            afterSale: +afterTaxPrice
        })
        setShowResult(true)
    }

    return <>
        <div className="">
            <Card className=" border-[#FEA500]/20">
                <CardContent>

                    <div className="flex justify-center sm:justify-between md:justify-around py-3 gap-3 flex-wrap items-center">
                        <div className="max-md:w-40 md:max-w-60 w-full">
                            <label htmlFor="beforeSale" className="text-lg">
                                Before Tax Price
                            </label>

                            <div className="w-full flex">
                                <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-14 flex justify-center items-center rounded-l-md">
                                    <span className="text-lg">$</span>
                                </div>
                                <Input id="beforeSale"
                                    value={beforeSale}
                                    onChange={(e) => validateSet(e.target.value, setBeforeSale)}
                                    className="border-[#FEA500]/20 rounded-l-none" />
                            </div>

                        </div>
                        <div className="max-w-40 md:max-w-60 w-full">
                            <label htmlFor="tax" className="text-lg">
                                Sale Tax
                            </label>

                            <div className="w-full flex">
                                <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-14 flex justify-center items-center rounded-l-md">
                                    <span className="text-lg">%</span>
                                </div>
                                <Input id="tax"
                                    value={tax}
                                    onChange={(e) => validateSet(e.target.value, setTax)}
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
                        setBeforeSale(0.00)
                        setTax(0.00)
                        
                        setDataResult({
                            beforeSale: 0,
                            tax: 0,
                            saleTax: 0,
                            afterSale: 0
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
                        <TableRow className="text-lg">
                            <TableHead>Event</TableHead>

                            <TableHead>Values</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="text-lg">
                            <TableCell>Before Tasx Price</TableCell>
                            <TableCell>${dataResult.beforeSale.toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow className="text-lg">
                            <TableCell>Sale Tax</TableCell>
                            <TableCell>{dataResult.tax.toFixed(2)}% Or ${dataResult.saleTax.toFixed(2)}</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow className="text-lg">
                            <TableCell><span className="text-[#FEA500]">After Tax Price</span></TableCell>
                            <TableCell><span className="text-[#FEA500]">${dataResult.afterSale.toFixed(2)}</span></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    </>
}