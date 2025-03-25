
import CardTravelers from "./../components/CardTravelers";

export default function Partecipants() {
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
          <CardTravelers />
        </div>
      </div>
    </>
  );
}
