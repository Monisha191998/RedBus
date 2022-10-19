// import logo from './logo.svg';
import './App.css';

// import Login, { Signin } from './components/signin';
import {Signup} from './components/signup';
// import Traveller from './components/traveller';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Signin } from './components/signin';
import {Traveller} from './components/traveller';
import { Busregistration } from './components/busregistration';
import { Dashboard } from './components/dashboard';


 function App(){
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/trav' element={<Traveller/>}/>
      <Route path='/bus' element={<Busregistration/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
</BrowserRouter> 
    </div>
  );
}
export default App;
