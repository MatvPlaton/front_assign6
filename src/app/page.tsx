import  './globals.css'
import Link from "next/link";
export default function Home() {
  return (
      <div>
        <h1 style={{marginTop: "20px"}} className="gradient">Hello!</h1>

          <div style={{marginTop: "20px"}}> My name is Platonov Matvey Olegovich <br/> And I glad to see you on my website.</div>

          <Link style={{position: 'relative',top:'20px'}} href="about"> About me </Link>
          <Link style={{position: 'relative',top:'20px', left: "20px"}} href="Projects"> my Projects </Link>
          <Link style={{position: 'relative',top:'20px', left: "40px"}} href="Links"> Links </Link>
          <Link style={{position: 'relative',top:'20px', left: "40px"}} href="Image"> Image </Link>
      </div>
  );
}