import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TraData from "./TravelData";
import "./App.css";

function App() {
  const TD = TraData.map((data) => {
    //generalize the invokation of caed component inside app.js
    return (
      <TravelBlog
        key={data.id}
        placeHeading={data.placeHeading}
        placeImg1={data.placeImg1}
        placeImg2={data.placeImg2}
        placeImg3={data.placeImg3}
        placeDescription={data.placeDescription}
      />
    ); //end of the map function's callback body
  });

  return (
    <div className="App">
      <Hero />
      <section className="product-container">{TD}</section>
      <br></br>
    </div>
  );
}

export default App;
