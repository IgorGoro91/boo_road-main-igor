import { useGlobalContext } from "../context/GlobalContext";
import AccordionTravelers from "./AccordionTravelers";

export default function CardTravelers() {
  const { filteredTravelers } = useGlobalContext();
  return <AccordionTravelers traveler={filteredTravelers} />;
}