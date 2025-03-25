import { useState } from "react";
import { useParams } from "react-router-dom";
import travelers from "../data/travelersArray";
import tripsArray from "../data/tripsArray";
import CardTrips from "../components/CardTrips";
import AccordionTravelers from "../components/AccordionTravelers";
import AddTravelersForm from "./../components/AddTravelersForm";

export default function SingleTravel() {
  const { id } = useParams();

  const [filteredTravelers, setFilteredTravelers] = useState(
    travelers.filter((t) => t.id_travel === parseInt(id))
  );

  const addNewTraveler = (newTraveler) => {
    travelers.push(newTraveler);

    setFilteredTravelers([...filteredTravelers, newTraveler]);
  };

  const travel = tripsArray.filter((trip) => {
    return trip.id === parseInt(id);
  });

  return (
    <>

    <div class="cards-box">
    <div class="container-img">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div> 
        
      <CardTrips trips={travel} />

      <AccordionTravelers traveler={filteredTravelers} />
      <AddTravelersForm
        viaggiatoriFiltrati={filteredTravelers}
        onAddTraveler={addNewTraveler}
      />
    </>
  );
}
