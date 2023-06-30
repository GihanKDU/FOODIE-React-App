import logo from './logo.svg';
import './App.css';
import Navigation from './component/navigation';
import HeroSection from './component/hero';
import QuickMenu from './component/quickmenu';
import Offers from './component/offer';
import "aos/dist/aos.css";
import Services from './component/services';
import AppBanner from './component/appbanner';
import { Rating } from '@mui/material';
import Ratings from './component/ratings';
import Footer from './component/footer';
import MobileScreen from './component/mobilescreen';

function App() {
  return (
    <div className="App">
      <MobileScreen  />
    <Navigation/>
    <HeroSection/>
    <QuickMenu/>
    <Offers/> 
    <AppBanner/>
    <Services/>
    <Ratings/>
    <Footer/>
   
 
    </div>
  );
}

export default App;
