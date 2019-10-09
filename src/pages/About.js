import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Cycle from '../components/Cycle';
import Modal from '../components/Modal';
import AbIntro from '../components/AbIntro';
import '../CSS/contact.css';
import Logo from '../assets/coderBlueLogoW.svg';

const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    /*backgroundImage: 'linear-gradient(tan 40%,  darkgray 50%, grey 70%, black 95%)'*/
    backgroundColor: 'grey',
    /*padding: 50*/
    padding: 0
}

class About extends Component {
  state= {
    show: false
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }

  render(){
    return (
      <div style={backdropStyle}>
        <div className="banner">

            <div onClick={this.showModal}>
              <Cycle />

              <Modal onClose={this.showModal} show={this.state.show}>

                          <NavLink to="/Home" className="">
                            <img src={Logo} alt = " " style={{'height':'50px', 'marginRight':'90%'}} />
                          </NavLink> <br />

                          <AbIntro />

                          <div style={{'height':'50px', 'marginRight':'90%'}}>
                          </div>
                          <div className="theMode">
                             Contact: <br />
                             coderblue55@gmail.com
                          </div>

              </Modal>
            </div>
        </div>
      </div>
    );
  }
}

export default About;
