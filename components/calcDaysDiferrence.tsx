'use client'
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { useState } from "react"
import { Input } from "./ui/input"
import { document } from "postcss"


export default function CalcDaysDiferrence() {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [dataResult, setDataResult] = useState({
        weeks: 0,
        days: 0,
        hours: 0
    })
    const [showResult, setShowResult] = useState(false)

    function result() {
        const startD = new Date(startDate)
        const endD = new Date(endDate)

        const getWeek = 1000 * 60 * 60 * 24 * 7
        const getDay = 1000 * 60 * 60 * 24
        const getHour = 1000 * 60 * 60

        const startUTC = Date.UTC(startD.getFullYear(), startD.getMonth(), startD.getDate())
        const endUTC = Date.UTC(endD.getFullYear(), endD.getMonth(), endD.getDate())
        console.log(startUTC)

        const weeks = Math.floor((endUTC - startUTC) / getWeek)
        const days = Math.floor((endUTC - startUTC) / getDay)
        const hours = Math.floor((endUTC - startUTC) / getHour)


        setDataResult({
            weeks,
            days,
            hours
        })
        setShowResult(true)
        
    }

    return <>
        <div>
            <Card className=" border-[#FEA500]/20">
                <CardContent>

                    <div className="flex justify-center sm:justify-between md:justify-around py-3 gap-3 flex-wrap items-center">
                        <div className="w-44">
                            <label htmlFor="start-date" className="text-lg">
                                Start Date
                            </label>

                            <div className="w-full flex">
                                
                                <Input id="start-date"
                                    type="date"
                                    onChange={e => setStartDate(e.target.value)}
                                    // value={beforeSale}
                                    
                                    className="border-[#FEA500]/20 " />
                            </div>

                        </div>
                        <div className="w-44">
                            <label htmlFor="end-date" className="text-lg">
                                End Date
                            </label>

                            <div className="w-full flex">
                                
                                <Input id="end-date"
                                    type="date"
                                    onChange={e => setEndDate(e.target.value)}
                                    className="border-[#FEA500]/20 " />
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
                </CardFooter>
            </Card>
            <div className={`text-xl border-b md:text-center border-b-[#FEA500]/20 mt-6 pl-3 pb-3 ${showResult && dataResult.weeks >= 1 ? "block " : "hidden"}`}>
                <p>{dataResult.weeks} {dataResult.weeks > 1 ? 'weeks' : 'week'}</p>        
            </div>
            <div className={`text-xl border-b md:text-center border-b-[#FEA500]/20 mt-3 pl-3 pb-3 ${showResult ? "block " : "hidden"}`}>
                <p>{dataResult.days} {dataResult.days > 1 ? 'days' : 'day'}</p>        
            </div>
            <div className={`text-xl border-b md:text-center border-b-[#FEA500]/20 mt-3 pl-3 pb-3 ${showResult ? "block " : "hidden"}`}>
                <p>And {dataResult.hours} hours</p>        
            </div>
        </div>
    </>
}