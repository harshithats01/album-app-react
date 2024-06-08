import logo from './logo.svg';
import './App.css';
import AddAlbum from './components/AddAlbum';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddAlbum/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/view' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
