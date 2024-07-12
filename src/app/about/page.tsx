"use client";
import  '../globals.css'

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()

    function previous() {
        window.history.back()
    }


    return (<div style={{position: 'relative', top: '50px', left: "10px"}}>
        I was born in the small city of Nizhnekamsk. <br/> In 2022, I graduated from school in my<br/> hometown
        and <br/>
        was able to enter Innopolis University.
        <button className="back" onClick={previous} style={{position: "absolute", left: "1px", bottom: "-40px"}}> Return Back </button>
    </div>)
}