import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Girls from "../../assets/twoGirls.png";
import Junior from "../../assets/junior.jpg"
const Home = () => {
  return ( 
    <>
      <Navbar />
      <section className="header">
        <div>
          <h1>Having Queries<br/>about Companies?</h1>
          <button>Ask Your Senior</button>
        </div>
        <div>
          <img src={Girls} alt="" />
        </div>
      </section>
      {/* <h1 class="black-lives-matter">#Crack Placements</h1> */}
      <section className="header">
        <div>
          <img src={Junior} alt="" />
        </div>
        <div>
          <h1>Help Your Juniors :)</h1>
          <button>Tell Your Journey</button>
        </div>
      </section>
      <footer>
        <p>Copyrights Reserved</p>
      </footer>
    </>
   );
}
 
export default Home;