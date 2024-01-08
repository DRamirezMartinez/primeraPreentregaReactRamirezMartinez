import Banner from "./components/Banner";
import Carrousel from "./components/Carrousel";
import Footer from "./components/footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


const App = () => {
  return (
      <>
       <NavBar />
       <Carrousel />
       <ItemListContainer greeting={"No se encontraron Productos!"}/>
       <Banner />       
       <Footer />
      </>
  )
}

export default App;
