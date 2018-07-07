import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../stylesheets/youtube-video.css';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import $ from 'jquery';
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom';
const customStyles = {
    content : {
      top                   : '10%',
      left                  : '10%',
      right                 : 'auto',
      bottom                : '10%',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };
 class Legatos extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: true,
          redirect: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
    
      openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
        this.setState({
            redirect: true
          })
         this.renderRedirect();
      }
      
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/guitarbasics' />
        }
      }
      
    
  render() {
    return (
      <div>
      {this.renderRedirect()}
      <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStyles}
      style={{width:950,height:400,top:10,left:10}}
      contentLabel="Example Modal"
    >

      <h2 ref={subtitle => this.subtitle = subtitle}></h2>
      <button  onClick={this.closeModal}>x</button>
      <div> Guitar Basic Lesson 4 - Horizontal and Vertical</div>
      <div class="video-container">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/HzHmJCXsSf0?rel=0&modestbranding=1&showinfo=0" frameBorder="0" allow="autoplay; encrypted-media"   allowfullscreen>
      </iframe> 
      </div> 
    </Modal>
     
      </div>
    )
  }
}

export default Legatos;