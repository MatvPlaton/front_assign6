"use client";
import  '../globals.css'

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()

    function previous() {
        window.history.back()
    }


    return (<div style={{position: 'relative', top: '50px', left: "50px"}}>
        <div style={{position: "relative", left: "-25px"}}> During these two years,<br/> I worked on various<br/> educational projects: </div>
        <ul>
            <li>matrix calculator</li>
            <li>tourism application </li>
            <li>creator of crossword puzzles</li>
            <li> booking website (now)</li>
        </ul>
        <button className="back" onClick={previous} style={{position: "absolute", left: "-20px", bottom: "-50px"}}> Return
            Back
        </button>
    </div>)
}