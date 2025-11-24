import About from "./components/About";
import Contact from "./components/Contact";
import Doctor from "./components/Doctor";
import Feedbacks from "./components/Feedbacks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Doctor />
      <Feedbacks />
      <Contact />
      <Footer />
    </div>
  );
}
