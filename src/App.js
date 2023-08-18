import './App.css';
import { Routes, Route, Outlet} from 'react-router-dom';
import { Home } from './routes/home/home.component';
import { Login } from './routes/login/login.component';
import { Browser } from './routes/browser/browser.component';
import { SignUp } from './routes/signup/signup.component';
//https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v 
//https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v
function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login />}/>
        <Route path='browser' element={<Browser />}/>
        <Route path='signup' element={<SignUp/>}/>
    </Routes>
    
  );
}

export default App;
