import './App.css';
import Headrs from './Headrs';
import Footer from './Footer';
import Home from './Home';
import View from './View';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Headrs></Headrs>
   <Routes>
        
       <Route path='' element={ <Home />}></Route>
       <Route path='singleView/:id' element={<View></View>}> </Route>
   </Routes>
      <Footer></Footer>
    </div>
  );
}


export default App;
