import React, {Component, lazy, Suspense} from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/project.css';
import Navigation from '../components/Navigation';
const PopG0 = lazy(()=> import('../components/PopG0'));
const PopG1 = lazy(()=> import('../components/PopG1'));
const PopG2 = lazy(()=> import('../components/PopG2'));
const PopG3 = lazy(()=> import('../components/PopG3'));


class PoP extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div>
          <div>
          <Navigation />
          </div>
          <div style={{'textAlign':'center', 'marginTop':'0', 'paddingTop':'3%'}}>
          <svg width="55%" height="auto" viewBox="0 0 300 300" enable-background="new 0 0 300 300">
              <g id="Layer_2" display="none">
                <rect display="inline" fill="#EFA573" width="300" height="300"/>
              </g>
              <g id="Layer_1">
                <g>
                  <path fill="#FFFFFF" stroke="#3953A3" stroke-width="5" stroke-miterlimit="10" d="M56.768,35.05
                    c-23.988,0-43.917,16.573-47.902,38.367c-0.366,2.002-0.677,4.041-1.591,6.116v134.666h56.679v-86.992
                    c23.769-3.684,41.43-22.771,41.43-45.763C105.383,55.819,83.617,35.05,56.768,35.05z M66.86,100.011
                    c-5.988,0-10.842-5.083-10.842-11.354s4.854-11.354,10.842-11.354c5.987,0,10.842,5.083,10.842,11.354
                    S72.848,100.011,66.86,100.011z"/>
                  <ellipse fill="#3953A3" stroke="#3953A3" stroke-miterlimit="10" cx="66.86" cy="88.657" rx="10.842" ry="11.354"/>
                  <path fill="#FFFFFF" stroke="#3953A3" stroke-width="5" stroke-miterlimit="10" d="M245.43,35.05
                    c-23.986,0-43.917,16.573-47.9,38.367c-0.366,2.002-0.678,4.041-1.592,6.116v134.666h56.679v-86.992
                    c23.769-3.684,41.431-22.771,41.431-45.763C294.046,55.819,272.279,35.05,245.43,35.05z M255.521,100.011
                    c-5.987,0-10.84-5.083-10.84-11.354s4.854-11.354,10.84-11.354c5.99,0,10.843,5.083,10.843,11.354S261.51,100.011,255.521,100.011
                    z"/>
                  <ellipse fill="#3953A3" stroke="#3953A3" stroke-miterlimit="10" cx="255.521" cy="87.592" rx="10.843" ry="11.354"/>
                  <path fill="#FFFFFF" stroke="#3953A3" stroke-width="5" stroke-miterlimit="10" d="M129.757,125.296
                    c-26.62,0-48.195,20.477-48.195,45.735c0,25.259,21.575,45.736,48.195,45.736c26.621,0,48.197-20.478,48.197-45.736
                    C177.954,145.773,156.378,125.296,129.757,125.296z M129.528,207.571c-5.987,0-10.84-5.083-10.84-11.354
                    c0-6.271,4.854-11.354,10.84-11.354c5.99,0,10.843,5.083,10.843,11.354C140.371,202.488,135.518,207.571,129.528,207.571z"/>
                  <ellipse fill="#3953A3" stroke="#3953A3" stroke-miterlimit="10" cx="129.528" cy="196.217" rx="10.843" ry="11.354"/>
                  <path fill="#FFFFFF" stroke="#3953A3" stroke-width="5" stroke-miterlimit="10" d="M228.957,246.804
                    c0,9.084-11.793,16.449-26.34,16.449H56.9c-14.547,0-26.341-7.365-26.341-16.449l0,0c0-9.084,11.793-16.449,26.341-16.449h145.717
                    C217.164,230.354,228.957,237.72,228.957,246.804L228.957,246.804z"/>
                  <path fill="#3953A3" stroke="#3953A3" stroke-width="5" stroke-miterlimit="10" d="M156.607,246.453c0,2.319-1.883,4.2-4.2,4.2
                    h-49.698c-2.318,0-4.2-1.881-4.2-4.2l0,0c0-2.318,1.882-4.199,4.2-4.199h49.698C154.725,242.254,156.607,244.135,156.607,246.453
                    L156.607,246.453z"/>
                </g>
              </g>
          </svg>
          </div>

          <div className="project">

            <div id="Project">
              <pMainA data-aos="fade-right" data-aos-delay="" style={{'textAlign':'center', 'padding':'5%'}}>
                  <h1>Portraits of Portraits </h1>
                  A Full-Stack MERN Application that receives orders for Custom Digital Portrait Prints, stores data & notifies administrators through automated structures.
              </pMainA>

              <pMainB data-aos="fade-right">
                <Suspense fallback={ <div>Loading ...</div>}>
                  <PopG0 />
                </Suspense>
              </pMainB>

              <pMainC data-aos="fade-left">
                <Suspense fallback={ <div>Loading ...</div>}>
                  <PopG1 />
                </Suspense>
              </pMainC>

              <pMainD data-aos="fade-right">
                <Suspense fallback={ <div>Loading ...</div>}>
                  <PopG2 />
                </Suspense>
              </pMainD>

              <pMainE data-aos="fade-left">
                <Suspense fallback={ <div>Loading ...</div>}>
                  <PopG3 />
                </Suspense>
              </pMainE>

               <pFooterA data-aos="fade-up" data-aos-delay="" style={{'background':''}}>
                  <NavLink to="/Law" className="navStyle">NEXT</NavLink>
                  <div className="" style={{'textAlign':'left','paddingTop':'10%', 'fontWeight':'bold'}}>
                     Contact: <br />
                     coderblue55@gmail.com
                  </div>
              </pFooterA>
             </div>
         </div>
      </div>
    );
  }
}

export default PoP;
