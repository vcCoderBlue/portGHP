import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/project.css';
import PoP from '../assets/PoP2.svg';
import Law from '../assets/lawLogoBanner1.svg';
import NavigationB from  '../components/NavigationB';

class Projects extends Component {
  render(){
    return (

      <div >
          <NavigationB />

          <div className="content2" style={{'marginTop':'0px', 'marginBottom':'0px', 'background':'black'}}>

            <div id="Cart2">
              <mainA data-aos="fade-right" data-aos-delay="">
                <NavLink to="/PoP" className="">
                  <div className='link' data-aos="fade-in" data-aos-delay="0">
                    <img src={PoP} alt="" style={{'width':'55%','height':'auto', 'marginTop':'-20%'}} />
                  </div>
                </NavLink>
              </mainA>

              <mainB data-aos="fade-left">
                <NavLink to="/Law" className="">
                  <div className='link1' data-aos="fade-in" data-aos-delay="300">
                    <img src={Law} alt="" style={{'width':'63%','height':'auto', 'marginTop':'-15%'}} />
                  </div>
                </NavLink>
              </mainB>

               <footerA data-aos="fade-right" data-aos-delay="600" style={{'background':'black', 'color':'#ffffff', 'marginBottom':'0px'}}>
                <div className="" style={{'textAlign':'left','paddingTop':'', 'fontWeight':'bold'}}>
                  <br />  <br />  <br />  <br />
                   Contact: <br />
                   coderblue55@gmail.com
                </div>



               </footerA>
             </div>
         </div>

      </div>

    );
  }
}

export default Projects;
