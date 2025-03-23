import "./App.css";
import HeroMain from "./components/HeroSection/HeroMain";
import NavbarMain from "./components/Navbar/NavbarMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
    </main>
  );
}

export default App;
