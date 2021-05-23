import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CatAdoption from "./components/CatAdoption";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="container">
        <Header />
        <CatAdoption />
      </main>
      <Footer />
    </>
  );
};

export default App;
