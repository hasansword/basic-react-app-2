import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards';
import Data from './data'
function App() {

  const cards = Data.map((item) => {
    return (
      <Cards
          key = {item.id}
          img = {item.coverImg}
          rating = {item.stats.rating}
          reviewCount = {item.stats.reviewCount}
          location = {item.location}
          title = {item.title}
          price = {item.price}
      />
      )
    })
    console.log(cards);


  return (
    <div className="App">     
        <Navbar />
        <Hero/>
        {cards}
    </div>
  );
}

export default App;
