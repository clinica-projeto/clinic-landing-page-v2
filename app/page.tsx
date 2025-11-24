import About from "./components/About";
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
    </div>
  );
}
