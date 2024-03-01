import Topbar from "./components/Topbar"
import Header from "./components/Header"
import Slideshow from "./components/Slideshow"
import Presentation from "./components/Presentation"
import Actually from "./components/Actually"
import Sport from "./components/Sport";
import Thisweek from "./components/Thisweek";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div>
      <Topbar />
      <section>
        <Header />
      </section>
      <Slideshow />
      <section>
      <Presentation />
      </section>
      <section>
        <Actually />
      </section>
      <section>
        <Thisweek />
      </section>
      <section>
        <Sport />
      </section>
      <section>
        <Footer />
      </section>
      
    </div>
  )
}