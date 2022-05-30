import {Routes,Route} from "react-router-dom" 
import DetailsPage from "./pages/DetailsPage";
import TDetailsPage from "./pages/TDetailsPage";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TicketPage from "./pages/TicketPage";
function App() {
  return (
          <div>
            <Routes>
              <Route path='/' element={<MainPage/>} />
              <Route path='/cinema/:slug' element={<DetailsPage/>} />
              <Route path='/theatr/:slug' element={<TDetailsPage/>} />
              <Route path='/login/' element={<LoginPage/>}/>
              <Route path='/register/' element={<RegisterPage/>}/>
              <Route path='/ticket/' element={<TicketPage/>}/>
            </Routes>
          </div>
        
  );
}

export default App;
