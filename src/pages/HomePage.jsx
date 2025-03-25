import CardTrips from "../components/CardTrips";
import tripsArray from "../data/tripsArray";

export default function HomePage() {
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
         
      <div className="container">
        <div className="row row-cols-3">
          <CardTrips trips={tripsArray} />
        </div>
      </div>
    </>
  );
}
