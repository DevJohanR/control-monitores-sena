import HorarioAmbiente from "@/components/02-molecules/HorarioAmbiente/HorarioAmbiente";
import HorarioFicha from "@/components/02-molecules/HorarioFicha/HorarioFicha";
import HorarioInstructor from "@/components/02-molecules/HorarioInstructor/HorarioInstructor";

export default function HomePage() {
  return (
    <div className="mt-3">
      <div>
        <HorarioInstructor />
      </div>
      <div>
        <HorarioFicha />
      </div>
      <div>
        <HorarioAmbiente/>
      </div>
    </div>
  );
}
