
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { useLocation } from "react-router-dom";

import About from './About.jsx'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Appliance from './Appliance.jsx'
import Tv from './Tv.jsx'
import Ac from './Ac.jsx'
import Fridge from './Fridge.jsx'
 import Mitv from './Mitv.jsx'
 import OrderForm from './OrderForm.jsx'
 import SamTv from './SamTv.jsx'
  import BlueStarAc from './BlueStarAc.jsx'
  import LgAc from './LgAc.jsx'
  import SonyTv from './SonyTv.jsx'
  import MisAc from './MisAc.jsx'
    import VoltasAc from './VoltasAc.jsx'
import WhirlpoolAc from './WhirlpoolAc.jsx'
  import HaierFridge from './HaierFri.jsx'
  import WhirlpoolFridge from './Whirlpoolfri.jsx'
    import SamsungFridge from './Samfri.jsx'
  import BlueStarFridge from './BlueStarFri.jsx'
    import VoltasFridge from './VoltasFri.jsx'
import LgTv from './LgTv.jsx'
import Panasonic from './Panasonic.jsx'
import WashingMechine from './WashingMechine.jsx'
import SamMec from './SamMec.jsx'
import LgMec from './LgMec.jsx'
import WhirlpoolMec from './WhirlpoolMec.jsx'
import HaierMec from './HaierMec.jsx'
import Signup from './Signup.jsx'
import S1 from './S1.jsx'

function Index(){
             
   const location = useLocation();
 const hideNavbar = location.pathname === "/" || location.pathname === "/signup";

    return(
    
      <>
        
          {!hideNavbar && <Navbar />}
        
        
                  <Routes>
                    
                     <Route path="/" element= {<Navigate to="/signup" />} />
                       <Route path="/signup" element={<Signup />} />
                     <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                     <Route path="/appliance" element={<Appliance/>} />
                     <Route path="/appliance/ac" element={<Ac />} />
                      <Route path="/appliance/fridge" element={<Fridge/>} />
                    <Route path="/appliance/tv" element={<Tv />} />
                     <Route path="/appliance/mitv" element={<Mitv />} />
                      <Route path="/appliance/samtv" element={<SamTv />} />
                       <Route path="/appliance/bluestarac" element={<BlueStarAc />} />
                       <Route path="/appliance/lgac" element={<LgAc />} />
                        <Route path="/appliance/sonytv" element={<SonyTv />} />
                        <Route path="/appliance/misac" element={<MisAc />} />
                           <Route path="/appliance/voltasac" element={<VoltasAc />} />
                          <Route path="/appliance/whirlpoolac" element={<WhirlpoolAc />} />
                        <Route path="/appliance/haierfridge" element={<HaierFridge />} />
                        <Route path="/appliance/whirlpoolfridge" element={<WhirlpoolFridge />} />
                        <Route path="/appliance/samsungfridge" element={<SamsungFridge />} />
                        <Route path="/appliance/bluestarfridge" element={<BlueStarFridge />} />
                         <Route path="/appliance/voltasfridge" element={<VoltasFridge />} />
                          <Route path="/appliance/tv/lgtv" element={<LgTv />} />
                           <Route path="/appliance/tv/panasonictv" element={<Panasonic />} />
                          <Route path="/appliance/washingmechine" element={<WashingMechine />} />
                            <Route path="/appliance/washingmechine/samsung" element={<SamMec />} />
                             <Route path="/appliance/washingmechine/lg" element={<LgMec />} />
                              <Route path="/appliance/washingmechine/whirlpool" element={<WhirlpoolMec />} />
                                <Route path="/appliance/washingmechine/haier" element={<HaierMec />} />
                                 <Route path="/service/person1" element={<S1 />} />



                        <Route path="/OrderForm" element={<OrderForm />} />

                     
                  </Routes>
     </>
      
        
    )
}
export default Index;