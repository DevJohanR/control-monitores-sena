"use client";

import Footer from "@/components/02-molecules/Footer/Footer";
import Header from "@/components/02-molecules/Header/Header";
import HomePage from "@/components/05-pages/Home/HomePage";



export default function Home() {
  return (
    <div>
     <Header/>
     <div className="mt-20">  <HomePage/></div>
   

    <div className="mt-20">
    <Footer/>
    </div>
  
      </div>

      
    
  );
}
