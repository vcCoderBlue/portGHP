import React, {Component} from 'react';
import '../CSS/contact.css';
import Projects from './Projects';

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return (
      <div>

          <Projects />
      </div>
    );
  }
}

export default Home;
