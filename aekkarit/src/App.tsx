import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/index.css';
import Book from './components/book';
import Button from "./components/button"
import Cat from './components/cat';
import TextField from '@mui/material/TextField';
import { 
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate ,
  useLocation
} from 'react-router-dom';


function App() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div>
        <a href="/book">Go to book</a>
        <br />
        <Link to='/cat'>Go to cat(By Link)</Link>
        <br />
        <button onClick={() => {navigate('/button')}}>Go to New Button</button>
        <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}/>
        <br/>
        {
          'This path: '+location.pathname
        }
        <br /><br />
        <Routes>
          <Route path='/book' element={<Book/>} />
          <Route path='/button' element={<Button/>} />
          <Route path='/cat' element={<Cat/>} />

        </Routes>

    </div>

  );
}

export default App;