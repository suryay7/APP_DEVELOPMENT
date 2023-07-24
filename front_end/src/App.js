import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import LoginPage from './Login';
// import RegistrationPage from './Reg';
import './App.css';
// import HomePage from './Home';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import Pet from './pets';
import AboutPage from './About';
import PetDonationPage from './donate';
import MoreDet from './more';
import Contact from './contact';
import { Route,  BrowserRouter, Routes, Link } from 'react-router-dom' 
import LoginPage from './Login';
import HomePage from './Home';
import RegistrationPage from './Reg';
import AdoptionProcessPage from './learn';
import VolunteerPage from './involve';
// import SettingsIcon from '@mui/icons-material/Settings';
// import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
// import Contact from './contact';
import ContactPageSharpIcon from '@mui/icons-material/ContactPageSharp';
import Bella from './Bella';
// import store from './store';
// import { Provider } from 'react';


const App = () => {
  return (
    <div>
      {/* <LoginPage/> */}
      {/* <RegistrationPage /> */}
      {/* <HomePage /> */}
      {/* <Pet /> */}
      <BrowserRouter>
      {/* <Provider> */}

      <AppBar position='static'>
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography variant="h5">Welcome to Pet Space🐾
          </Typography>

          <div style={{display:'flex',gap:'15px',color:'white'}}>
          <nav>
          <Link to='/home'>

          <HomeSharpIcon/>
          </Link>
          </nav>
          <nav>
            <Link to='/support'>
          <ContactPageSharpIcon/>
            </Link>
              
          </nav>
          <nav>
            <Link to='/about'>
          <InfoSharpIcon/>
            </Link>
              
          </nav>
          </div>
        </Toolbar>
          
      </AppBar>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/reg' element={<RegistrationPage/>} />
          <Route path='/pet' element={<Pet />} />
          <Route path='/' element={<LoginPage/>} />
          <Route path='learn' element={<AdoptionProcessPage/>} />
          <Route path='vol' element={<VolunteerPage/>} />
          <Route path='donate' element={<PetDonationPage/>} />
          <Route path='mo' element={<MoreDet/>} />
          <Route path='/support' element={<Contact/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/Bel' element={<Bella/>} />
          


        </Routes>
      {/* </Provider> */}
      </BrowserRouter>

      
     


    </div>
    
    );
  };
  
  export default App;
  
  
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;
