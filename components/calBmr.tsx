'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { Table, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { validateSet } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"




export default function CalcBMR(){
    const [showResult, setShowResult] = useState(false)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [man, setMan] = useState(false)
    const [female, setFemale] = useState(false)
    const [age, setAge] = useState(0)
    const [dataResult, setDataResult] = useState(0)

    function result(){
        if (height < 0 && weight < 0 && age < 0) return alert('Age, weight and height must be greater than zero!')
        if (height == 0 && weight == 0 && age == 0) return alert('Please fill in the blanks.')
        if (!man && !female) return alert('Please choose the gender.')

        let bmr = 0

        if(man){
            bmr = 88.367 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
        }

        if(female){
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
        }
        
        setDataResult(bmr)
        setShowResult(true)
    }

    return <>
        <div className="">
            <Card className=" border-[#FEA500]/20">
                <CardContent>

                    <div className="flex justify-center sm:justify-between md:justify-around py-3 gap-3 flex-wrap items-center">
                        <div className="max-md:w-40 md:max-w-60 w-full">
                            <label htmlFor="height" className="text-lg">
                                Height
                            </label>

                            <div className="w-full flex">
                                <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-14 flex justify-center items-center rounded-l-md">
                                    <span className="text-lg">cm</span>
                                </div>
                                <Input id="height"
                                    value={height}
                                    onChange={(e) => validateSet(e.target.value, setHeight)}
                                    className="border-[#FEA500]/20 rounded-l-none" />
                            </div>

                        </div>
                        <div className="max-w-40 md:max-w-60 w-full">
                            <label htmlFor="weight" className="text-lg">
                                Weight
                            </label>

                            <div className="w-full flex">
                                <div className="h-10 border-1 border-[#FEA500]/20 bg-[#FEA500]/20 w-14 flex justify-center items-center rounded-l-md">
                                    <span className="text-lg">kg</span>
                                </div>
                                <Input id="weight"
                                    value={weight}
                                    onChange={(e) => validateSet(e.target.value, setWeight)}
                                    className="border-[#FEA500]/20 rounded-l-none" />
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center sm:justify-between md:justify-around py-3 gap-3 flex-wrap items-center">
                        <div className="max-md:w-40 md:max-w-60 w-full">
                            <label htmlFor="age" className="text-lg">
                                Age
                            </label>

                            <div className="w-full flex">
                            
                                <Input id="age"
                                    value={age}
                                    onChange={(e) => validateSet(e.target.value, setAge)}
                                    className="border-[#FEA500]/20 " />
                            </div>

                        </div>
                        <div className="max-w-40 md:max-w-60 w-full">
                            <label htmlFor="gender" className="text-lg">
                                Gender
                            </label>

                            <div id="gender" className="w-full flex">
                                <RadioGroup className="flex">
                                    <div className="flex items-center space-x-1">
                                        <RadioGroupItem value="man" id="r1" onClick={() => {
                                            setMan(!man)
                                            setFemale(false)
                                        }}/>
                                        <label className="text-md">Man</label>
                                    </div>
                                    <div className="flex ml-3 items-center space-x-1">
                                        <RadioGroupItem value="Female" id="r1" onClick={() => {
                                            setFemale(!female)
                                            setMan(false)
                                        }}/>
                                        <label className="text-md">Female</label>
                                    </div>
                                </RadioGroup>
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
                        setHeight(0)
                        setWeight(0)
                        setAge(0)
                        setDataResult(0)
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
                            <TableHead className="text-lg">Your BMR</TableHead>
                        </TableRow>
                    </TableHeader>
                    
                    <TableFooter>
                        <TableRow className="text-lg">
                            <TableCell><span className="text-[#FEA500]">Calories/day</span></TableCell>
                            <TableCell><span className="text-[#FEA500]">{dataResult.toFixed(2)}</span></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    </>
}