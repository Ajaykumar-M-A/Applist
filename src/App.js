import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddApi from './components/AddApi';
import ViewApi from './components/ViewApi';

function App() {
  return (
    <div>
<BrowserRouter>

<Routes>

<Route path='' element={<Login/>}/>
<Route path='/Add' element={<AddApi/>}/>
<Route path='/View' element={<ViewApi/>}/>



</Routes>


</BrowserRouter>

    </div>
  );
}

export default App;
