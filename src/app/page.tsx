
import Header from "@/components/02-molecules/Header/Header";
import HorarioFicha from "@/components/02-molecules/HorarioFicha/HorarioFicha";
import HorarioInstructor from "@/components/02-molecules/HorarioInstructor/HorarioInstructor";



export default function Home() {
  return (
    <div>
     
     <div><Header/></div>
 


 <div className="mt-3"> <HorarioInstructor/></div>
      


<div>


    <HorarioFicha/>

</div>

      </div>

      
    
  );
}
