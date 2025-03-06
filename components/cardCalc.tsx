
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";


export default function CardCalc({ category }: { category: any[] }){

    return <>
        <ul className="flex flex-wrap gap-5 sm:justify-around">
            {category && category.length > 0 ?
            category.map((calcItem: { title: string; description: string; link: string; }, _i: number) => (
                <li key={_i}>
                    <Card className="border-[#FEA500]/20 max-w-80">
                        <CardHeader>
                            <CardTitle className="text-lg">{calcItem.title}</CardTitle>
                            <CardDescription className="text-md">{calcItem.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link href={calcItem?.link} className="ml-auto">
                                <Button className="">
                                    Acess
                                </Button>
                            </Link>
                        </CardFooter>  
                    </Card>
                </li>
            ))
            : null}
        </ul>
    </>
}