import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'flowbite';

// import from page
import Dashboard from './page/Dashboard';
import Test from './page/Test'
import Category from './page/Category';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} ></Route>
            <Route path='/test' element={<Test />} ></Route>
            <Route path='/category' element={<Category />} ></Route>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
