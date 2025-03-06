import Link from "next/link";



export default function BreadCrumb({route1, route2, route3, href1, href2 }: 
    {route1: string, route2: string, route3?: string,href1: string, href2?: string }){

    return <>
        <div className="px-5 md:px-10 pt-10 xl:px-60 lg:px-30">
            <div className="px-3 text-xl py-4 border-2 rounded-lg border-[#FEA500]">
                <span><Link href={'/'}>{route1}</Link> </span> 
                {route2 && <span>/ <Link href={`/${href1}`}>{route2}</Link> </span>} 
                {route3 &&<span>/ <Link href={`/${href1}/${href2}`}>{route3}</Link></span>}
            </div>
        </div>
    </>
}