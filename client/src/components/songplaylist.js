import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/multicard.css';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
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
  
 class SongPlaylist extends Component {
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
                <h1 class="text-left md-3" style={{alignContent: 'left'}}> Songs Playlist </h1>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner row w-100 mx-auto">
                    <div class="carousel-item col-md-4 active">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson1.png" alt="Card image cap"   style={{width:400,height:200}}/>
                        <div class="card-body">
                            <h4 class="card-title">Basic Lesson# - Only Forwards </h4>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button onClick={this.openModal}>View Now</button>
                            <Modal
                              isOpen={this.state.modalIsOpen}
                              onAfterOpen={this.afterOpenModal}
                              onRequestClose={this.closeModal}
                              style={customStyles}
                              style={{width:950,height:400,top:10,left:10}}
                              contentLabel="Example Modal"
                            >
                    
                              <h2 ref={subtitle => this.subtitle = subtitle}></h2>
                              <button onClick={this.closeModal}>x</button>
                              <div>Only Forwards Lesson</div>
                              <div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/HzHmJCXsSf0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
                            </Modal>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson2.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Card 2</h4>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" class="btn btn-primary">View Now </button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson3.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Card 3</h4>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" class="btn btn-primary">View Now </button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson4.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Card 4</h4>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" class="btn btn-primary">View Now </button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson5.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Card 5</h4>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" class="btn btn-primary">View Now </button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson6.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Card 6</h4>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button type="button" class="btn btn-primary">View Now </button>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item col-md-4">
                        <div class="card">
                        <img class="card-img-top img-fluid" src="lesson7.png" alt="Card image cap"  style={{width:400,height:200}} />
                        <div class="card-body">
                            <h4 class="card-title">Card 7</h4>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
export default SongPlaylist;