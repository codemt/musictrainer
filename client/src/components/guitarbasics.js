import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/multicard.css';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Responsive from 'react-responsive';
import Modal from 'react-modal';

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
  const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;
  
 class GuitarBasics extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
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
      }
    componentDidMount() {
        
        $("#myCarousel").on("slide.bs.carousel", function(e) {
            var $e = $(e.relatedTarget);
            var idx = $e.index();
            var itemsPerSlide = 3;
            var totalItems = $(".carousel-item").length;
          
            if (idx >= totalItems - (itemsPerSlide - 1)) {
              var it = itemsPerSlide - (totalItems - idx);
              for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                  $(".carousel-item")
                    .eq(i)
                    .appendTo(".carousel-inner");
                } else {
                  $(".carousel-item")
                    .eq(0)
                    .appendTo($(this).find(".carousel-inner"));
                }
              }
            }
          });          
      }
  render() {
    return (
      <div>
                    <div class="container-fluid">
                <h1 class="text-left md-3" style={{alignContent: 'left'}}>Guitar Basics Course</h1>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner row w-100 mx-auto">
                    <div class="carousel-item col-md-4 active">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson1.png" alt="Card image cap"   style={{width:400,height:200}}/>
                        <div class="card-body">
                            <h4 class="card-title">Guitar Basic Lesson 1 - Only Forwards </h4>
                            <p class="card-text">Forwards - Stand for playing in Ascending Order on the Guitar fretboard.
                            it a basic lesson to improve your finger movements on the guitar.</p>
                            <button   class="btn btn-primary" onClick={this.openModal}>View Now</button>
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
                              <div>Only Forwards Lesson</div>
                              <div class="video-container">
                             <iframe width="560" height="315" src="https://www.youtube.com/embed/HzHmJCXsSf0?rel=0&modestbranding=1&showinfo=0" frameBorder="0" allow="autoplay; encrypted-media"   allowfullscreen>
                              </iframe> 
                              </div> 
                            </Modal>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson2.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Guitar Basic Lesson 2 - Forwards & Backwards</h4>
                            <p class="card-text">Forwards and Backwards - In This Lesson , we play forwards and also go backwards to the same fret again.</p>
                            <Link to='/forwardbackward'>
                            <button type="button" class="btn btn-primary">View Now </button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson3.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Guitar Basic Lesson 3 - Reverse</h4>
                            <p class="card-text">Reverse - No Need to Play Forwards to do the reverse movement. This technique helps to  play really fast parts of any song easily.</p>
                            <button type="button" class="btn btn-primary" onClick={this.openModal}>View Now </button>
                            
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson4.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Guitar Basic Lesson 4 - Horizontal and Vertical</h4>
                            <p class="card-text">Horizontal and Vertical - Combining both Forwards and Reverse Techniques this lesson helps you to understand how to use them both.</p>
                            <button type="button" class="btn btn-primary">View Now </button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson5.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Guitar Basic Lesson 5 - 3 Major Scales</h4>
                            <p class="card-text"> Major Scales - Basic three Major scales lessons on the guitar.</p>
                            <button type="button" class="btn btn-primary">View Now </button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson6.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Guitar Basic Lesson 6 - All Major Scales</h4>
                            <p class="card-text">  Major Scales - Playing the 7 Major Scales on the Guitar.</p>
                            <button type="button" class="btn btn-primary">View Now </button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson7.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Guitar Basic Lesson 7 - Legatos</h4>
                            <p class="card-text">Legatos - A very important lesson on the guitar. Learning this  technique is what makes one a good lead guitarist.</p>
                            <button type="button" class="btn btn-primary">View Now </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
                    <span class="sr-only" >Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                </div>
      </div>
    )
  }
}
export default GuitarBasics;