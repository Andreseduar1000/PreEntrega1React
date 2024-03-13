import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { NavBar } from "./Components/NavBar/NavBar"


export const App = () => {
  return (
    <>  
    <NavBar/>
    <div className="d-flex justify-content-center ">
    <ItemListContainer greeting="Bienvenidos a esta pagina en remodelacion"/>
    
    </div>
    
    </>
  )
}