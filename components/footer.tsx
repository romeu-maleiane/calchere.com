import { Heart } from "lucide-react";


export default function Footer(){
    
    return <>
        <footer className="max-sm:top-auto">
            <div className="bg-[#FEA500] text-white sm:px-10 px-5 py-14 flex justify-between items-center">
                <h1 className="">calchere@gmail.com</h1>
                <p className="wrap  max-sm:pl-20">Develop with <span><Heart className="text-red-500 inline"/></span> by calchere.com</p>
            </div>
        </footer>
    </>
}