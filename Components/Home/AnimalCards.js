import { useEffect, useState } from "react"
import axios from "axios"

export default function AnimalCards(){

    const[data,setData] = useState([])

    useEffect( ()=>{
         axios.get("http://localhost:3000/animal.json")
            .then((res)=>{
                setData(res.data)
            }).catch(err=>{
                console.log(err,"Error Occured")
            })

    },[])

    console.log(data)

    return(
        <>
        <div className="flex flex-wrap gap-5 flex-row justify-center mt-[50px] mb-[50px]">
            {
                data.map((d)=>{
                    return(
                        
                        <div className="w-[300px] h-[auto] p-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col gap-3 rounded-3xl m-2">
                            <img href={d.thumbnail}/>
                            <h1 className="text-[30px] font-bold">{d.name}</h1>
                            <h3 className="text-[20px] font-semibold">{d.species}</h3>
                            <p className="line-clamp-6">{d.description}</p>
                            
                        </div>
                        
                    )
                })
            }
            </div>
        </>
    )

}