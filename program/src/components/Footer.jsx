
import { Link } from "react-router-dom";
import whatsapp from '/assets/wa.png'
import insta from '/assets/ins.jpg'


function Footer(){




    return(
        <>
        <div className="grid grid-cols-1 justify-center p-10 bg-black text-white w-full md:grid-cols-2 lg:grid-cols-4 mt-24">
            <div className="text-center border-b md:border-b-0 lg:border-r border-white p-4"> 
                <h1 className=" text-2xl lg:text-3xl">Store location</h1>
                <p className="text-2xl p-6">
                    500 Terry Francine Street<br />
                    San Francisco, CA 94158 <br />
                    info@mysite.com<br />

                    123-456-7890< br />
         </p>
 
            </div>
             <div className=" border-b md:border-b-0 lg:border-r border-white p-4 text-center">
                <h1 className="text-3xl">shop</h1>
                <ul className="p-6 text-2xl">
                <li><Link to="/phone">phone</Link></li>
                 <li><Link to="/phone">homeappliances</Link></li>
                <li><Link to="/phone">phone</Link></li>
                  </ul>
             </div>
              <div className="text-center border-b md:border-b-0 lg:border-r border-white p-4">
                <h1 className="text-3xl">customer support</h1>
                 <ul className="p-6 text-2xl">
                <li><Link to="/phone">contact us</Link></li>
                 <li><Link to="/phone">about us</Link></li>
                <li><Link to="/phone">help center</Link></li>
                  </ul>
              </div>
               <div className="text-center border-b md:border-b-0 lg:border-r border-white p-4">
                <h1 className="text-3xl">policy</h1>
                 <ul className="p-6 text-2xl">
                <li><Link to="/phone">terms & conditions</Link></li>
                 <li><Link to="/phone">payment methods</Link></li>
                <li><Link to="/phone">FAQ</Link></li>
                  </ul>
               </div>
                
        </div>
        <div className=" justify-center items-center bg-black text-white">
            <h1 className="text-center mb-4">
                follow us on
            </h1>
            <div className="flex justify-center gap-6 mb-4">
            <img src={whatsapp} className="w-[50px] h-[50px] object-contain"/>
             <img src={insta} className="w-[50px] h-[50px] object-contain"/>
             <img src={whatsapp} className="w-[50px] h-[50px] object-contain"/>
            </div>
                 <h1 className="text-center text-sm">&copy; 2025 All Rights Reserved</h1>
        </div>
       
        
        </>
    )
}
export default Footer;