'use client'
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { useState } from "react"
import { Input } from "./ui/input"
import { document } from "postcss"


export default function CalcAge() {
    const [dateOfBirthInput, setDateOfBirthInput] = useState('')
    const [ageAtThisDate, setAgeAtThisDate] = useState('')
    const [dataResult, setDataResult] = useState({})
    const [showResult, setShowResult] = useState(false)

    function result() {
        const birthDate = new Date(dateOfBirthInput)
        const reference = new Date(ageAtThisDate)

        const d1 = birthDate.getDate()
        const m1 = birthDate.getMonth() + 1
        const y1 = birthDate.getFullYear()

        const d2 = reference.getDate()
        const m2 = reference.getMonth() + 1
        const y2 = reference.getFullYear()

        function getdayInMonth(year: number, month: number){
            return new Date(year, month, 0).getDate()
        }

        console.log(m2,d2,y2)
        let d3, m3, y3;

        y3 = y2 - y1

        if(m2 >= m1){
            m3 = m2 - m1
        } else {
            y3--;
            m3 = 12 + m2 - m1
        }
        if(d2 >= d1){
            d3 = d2 - d1
        } else {
            m3--;
            d3 = getdayInMonth(y2, m2 - 1) - (d1 - d2)
        }
        if(m3 < 0){
            m3 = 11
            y3--;
        }

        setDataResult({
            year: y3,
            month: m3,
            day: d3
        })
        setShowResult(true)
        
    }

    return <>
        <div>
            <Card className=" border-[#FEA500]/20">
                <CardContent>

                    <div className="flex justify-center sm:justify-between md:justify-around py-3 gap-3 flex-wrap items-center">
                        <div className="w-44">
                            <label htmlFor="date" className="text-lg">
                                Date of Birth
                            </label>

                            <div className="w-full flex">
                                
                                <Input id="date"
                                    type="date"
                                    onChange={e => setDateOfBirthInput(e.target.value)}
                                    max={new Date().toISOString().split('T')[0]}
                                    // value={beforeSale}
                                    
                                    className="border-[#FEA500]/20 " />
                            </div>

                        </div>
                        <div className="w-44">
                            <label htmlFor="reference" className="text-lg">
                                Age at This Date
                            </label>

                            <div className="w-full flex">
                                
                                <Input id="reference"
                                    type="date"
                                    onChange={e => setAgeAtThisDate(e.target.value)}
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
            <div className={`text-xl border-b md:text-center border-b-[#FEA500]/20 mt-6 pl-3 pb-3 ${showResult ? "block " : "hidden"}`}>
                <p>{dataResult?.year} years, {dataResult.month} months and {dataResult.day} days</p>        
            </div>
        </div>
    </>
}