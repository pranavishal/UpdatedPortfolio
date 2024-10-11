import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto px-2">
        <Navbar />
        <Banner />
        <Resume />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
