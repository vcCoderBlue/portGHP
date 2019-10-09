import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

// gray background
const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 0
}

const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: 'white',
    borderRadius: 5,
    /*maxWidth: 900,
    minHeight: 300,
    maxHeight: '75vh',*/
    maxWidth: '100%',
    minHeight: '100vh',
    overflow: 'auto',
    margin: '0 auto',
    padding: 0,
    position: "relative",
    cursor: 'pointer',
    textAlign: 'center'
};

const footerStyle = {
    position: "relative",
    bottom: 20
};

let dialogCloseButtonStyles = {
  color: 'black',
  marginBottom: '15px',
  padding: '3px 8px',
  cursor: 'pointer',
  borderRadius: '50%',
  border: 'none',
  width: '30px',
  height: '30px',
  fontWeight: 'bold',
  alignSelf: 'flex-end',
  float: 'right',
  display: 'none'
}

const modalRoot = document.getElementById("modal-root");

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }
    onClose = (e) => {
        console.log("BUTTON CLICKED");
        e.stopPropagation ();
        this.props.onClose && this.props.onClose(e);
    }

    onKeyUp = (e) => {
        // Lookout for ESC key (27)
        if (e.which === 27 && this.props.show) {
            this.onClose(e);
        }
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp);
        modalRoot.removeChild(this.el);
    }

    render() {
        var modalUI = (
            <div style={backdropStyle}>
                <div style={modalStyle}>
                <button style={dialogCloseButtonStyles} onClick={(e) => { this.onClose(e)}}> X </button><br />
                    {this.props.children}
                    <div style={footerStyle}>

                    </div>
                </div>
            </div>
        );
        if (!this.props.show) {
            return null;
        }
        return ReactDOM.createPortal (
            modalUI,
            this.el,
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}
