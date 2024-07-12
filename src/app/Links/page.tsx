"use client";
import  '../globals.css'

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()

    function previous() {
        window.history.back()
    }


    return (<div style={{position: 'relative', top: '50px', left: "50px"}}>

        <div>
            <div> You can contact me using several services: <br/> <br/></div>
            <a href="#" id="tg-link" className="btn btn-white btn-animate"
               style={{fontSize: '32px',position: 'relative', color:'aqua'}}>Visit my telegram
                <i className="fa fa-telegram"></i></a>
            <br/> <br/> <br/>
            <a href="#" id="gh-link" className="btn btn-white btn-animate"
               style={{fontSize: '32px',position: 'relative', color:'#22222'}}>Visit my GitHub
                <i className="fa fa-github"></i> </a>
            <br/> <br/> <br/>
            <a href="#" id="email" className="btn btn-white btn-animate"
               style={{fontSize: '32px',position: 'absolute', left:'500px', top:'96px', color:'crimson'}} >send me email
                <i className="material-icons" style={{fontSize: '35px',position: 'relative', top: '5px'}}>&#xe158;</i> </a>
        </div>

        <button className="back" onClick={previous}
                style={{position: "absolute", left: "-20px", bottom: "-50px"}}> Return
            Back
        </button>
    </div>)
}