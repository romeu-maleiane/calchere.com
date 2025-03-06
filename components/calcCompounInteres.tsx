'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle, ChevronDown } from "lucide-react";
import { validateSet } from "@/lib/utils";


export default function CalcCompoundInterest() {
    const [monthlyOurAnnual, setMonthlyOurAnnual] = useState(true)
    const [monthsOurYears, setMonthsOurYears] = useState(true)
    const [inicialValue, setInicialValue] = useState(0.00)
    const [monthlyValue, setMonthlyValue] = useState(0.00)
    const [interestRate, setInterestRate] = useState(0.00)
    const [periodIn, setPeriodIn] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [dataResult, setDataResult] = useState({
        totalInvested: 0,
        totalInterestEarned: 0,
        total: 0
    })


    function result() {
        if (inicialValue === 0 || isNaN(inicialValue) || monthlyValue === 0 ||  isNaN(monthlyValue) || interestRate === 0 || isNaN(interestRate) || periodIn === 0 || isNaN(periodIn)) {
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Fill in all fields correctly!
                </AlertDescription>
            </Alert>
            alert('Fill in all fields correctly!')

            return
        }
        const parseInterest =  ( monthlyOurAnnual ? +interestRate  / 100 : (1 + interestRate / 100) ** (1 / 12) - 1 )
        const parsePeriod =  (monthlyOurAnnual ? +periodIn : +periodIn * 12)
        const pass1 = +inicialValue * ((1 + parseInterest) ** +parsePeriod)
        const pass3 = (((1 + parseInterest) ** +parsePeriod) - 1) / parseInterest
        const pass4 = +monthlyValue * pass3
        const pass5 = pass1 + pass4

        const totalInvested = +inicialValue + (+monthlyValue * parsePeriod)
        const totalInterestEarned = pass5 - totalInvested

        setShowResult(true)
        setDataResult({
            totalInvested,
            totalInterestEarned,
            total: +pass5.toFixed(2)
        })

    }

    return <>
        <div className="">
            <Card className=" border-[#FEA500]/20">
                <CardContent>

                    <div className="flex justify-center sm:justify-between md:justify-around py-3 gap-3 flex-wrap items-center">
                        <div className="max-md:w-40 md:max-w-60 w-full">
                            <label htmlFor="inicialValue" className="text-lg">
                                Inicial Value
                            </label>

                            <div className="w-full flex">
                                <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-14 flex justify-center items-center rounded-l-md">
                                    <span className="text-lg">$</span>
                                </div>
                                <Input id="inicialValue"
                                    value={inicialValue}
                                    onChange={(e) => validateSet(e.target.value, setInicialValue)}
                                    className="border-[#FEA500]/20 rounded-l-none" />
                            </div>

                        </div>
                        <div className="max-w-40 md:max-w-60 w-full">
                            <label htmlFor="monthlyValue" className="text-lg">
                                Monthly Value
                            </label>

                            <div className="w-full flex">
                                <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-14 flex justify-center items-center rounded-l-md">
                                    <span className="text-lg">$</span>
                                </div>
                                <Input id="monthlyValue"
                                    value={monthlyValue}
                                    onChange={(e) => validateSet(e.target.value, setMonthlyValue)}
                                    className="border-[#FEA500]/20 rounded-l-none" />
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center sm:justify-between md:justify-around py-3 gap-3 flex-wrap items-center">
                        <div className="max-w-40 md:max-w-60">
                            <label htmlFor="interestRate" className="text-lg">
                                Interest rate
                            </label>

                            <div className="flex justify-center items-center">
                                <Input id="interestRate"
                                    value={interestRate}
                                    onChange={(e) => validateSet(e.target.value, setInterestRate)}
                                    className=" border-[#FEA500]/20 rounded-r-none" />
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild className="rounded-l-none">
                                        <Button variant="outline" className="border-[#FEA500]/20 h-10 p-2">%{monthlyOurAnnual ? 'Monthly' : 'Annual'} <ChevronDown /></Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem className="" onClick={() => setMonthlyOurAnnual(!monthlyOurAnnual)}>
                                            %{monthlyOurAnnual ? 'Annual' : 'Monthly'}
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <div className="max-w-40 md:max-w-60">
                            <label htmlFor="periodIn" className="text-lg">
                                Period in
                            </label>

                            <div className="flex justify-center items-center">
                                <Input id="periodIn"
                                    value={periodIn}
                                    onChange={(e) => validateSet(e.target.value, setPeriodIn)}
                                    className=" border-[#FEA500]/20 rounded-r-none" />
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild className="rounded-l-none">
                                        <Button variant="outline" className="border-[#FEA500]/20 h-10 p-2">{monthsOurYears ? 'Months' : 'Years'}</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => setMonthsOurYears(!monthsOurYears)}>
                                            {monthsOurYears ? 'Years' : 'Months'}
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
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
                        setInicialValue(0.00)
                        setInterestRate(0.00)
                        setMonthlyValue(0.00)
                        setPeriodIn(0.00)
                        setDataResult({
                            totalInvested: 0,
                            totalInterestEarned: 0,
                            total: 0
                        })
                    }}>
                        To Clean
                    </Button>
                </CardFooter>
            </Card>

            <div className={`transition ease-in duration-300 overflow-hidden ${showResult ? "translate-y-0 " : "h-0" }`}>
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
                <TableBody>
                    <TableRow>
                        <TableCell className="text-lg">Total Invested</TableCell>
                        <TableCell className="text-lg">${dataResult.totalInvested.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-lg">Total interest earned</TableCell>
                        <TableCell className="text-lg">{dataResult.totalInterestEarned.toFixed(2)}%</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell><span className="text-[#FEA500] text-lg">Total</span></TableCell>
                        <TableCell><span className="text-[#FEA500] text-lg">${dataResult.total}</span></TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            </div>
        </div>
    </>
}