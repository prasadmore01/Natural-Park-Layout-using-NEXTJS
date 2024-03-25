import { useState } from "react"
import Register from "./Modal/Register"
import Link from "next/link"

export default function Header(){

    const[modal,setModal] = useState(false)

    const modalOpen = () => {
        setModal(true)
    }

    const modalClose = () => {
        setModal(false)
    }


    return(
        <>
            <div className="w-[100%] h-[40px] bg-transparent absolute flex flex-wrap justify-between pl-8 pr-8 items-center pt-4 pb-4">
                <div>
                    <h1 className="font-bold text-[26px] text-white">Logo</h1>
                </div>
                <div>
                    <ul className="list-none flex flex-wrap gap-6 text-[18px] text-white font-semibold items-center">
                        <Link href="/"><li>Home</li></Link>
                        <Link href="/about"><li>About</li></Link>
                        <li>Contact</li>
                        <button className="p-3 pl-7 pr-7 bg-red-500 text-[18px] text-white rounded-[100px] hover:bg-red-400 duration-1000" onClick={modalOpen}>Sign Up</button> 
                    </ul>
                </div>
             <Register isModalOpen={modal} isModalClose={modalClose}/>
            </div>
        </>

    )
}