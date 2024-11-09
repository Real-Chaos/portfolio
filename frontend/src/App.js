import Hero from "./components/Hero";
import Nav from "./helpers/Nav";
import './styles/index.css'
function App() {
  return (
    <>
    <div className="container">
      <div className="luffy-nav">
        <Nav />
      </div>
      <div className="other-container">
        <Hero />
      </div>
    </div>
      
    </>
  );
}

export default App;
