import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/listcarousel.css';
 class VideoSlider extends Component {
  render() {
    return (
     <div>
         <div id="product">
    <div class="container" style={{width:998,height:700}}>
        <div id="pslide" class="carousel slide" data-ride="carousel" style={{color:'rgb(72,72,72)'}}>
            <div id="slides" class="carousel-inner container" role="listbox">
                <div class="carousel-item active">
                    <div class="row justify-content-center align-items-center" style={{marginLeft:0,marginRight:0}}>
                        <div class="col-sm-6 col-md-3">
                            <a href="#">
                            <img class="img-fluid" src="pentatonic.png" />
                            </a>
                            </div>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="allscales.png" /></a></div>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="backward.png" /></a></div>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="basic1.png" /></a></div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center align-items-center" style={{marginLeft:0,marginRight:0}}>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="scale1.png" /></a></div>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="reverse.png" /></a></div>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="legato.png" /></a></div>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="forwards.png" /></a></div>
                    </div>
                </div>
                {/* <div class="carousel-item">
                    <div class="row justify-content-center align-items-center" style={{marginLeft:0,marginRight:0}}>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="envato.png" /></a></div>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="designmodo.jpg" /></a></div>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="themeforest.jpg" /></a></div>
                        <div class="col-sm-6 col-md-3"><a href="#"><img class="img-fluid" src="creative-market.jpg" /></a></div>
                    </div>
                </div> */}
            </div>
            <div id="controls" style={{backgroundColor:'black'}}><a href="#pslide" class="carousel-control-prev" role="button" data-slide="prev"><span class="carousel-control-prev-icon" style={{backgroundColor:'black'}}></span><span class="sr-only"></span></a><a href="#pslide" class="carousel-control-next" role="button" data-slide="next"><span class="carousel-control-next-icon" style={{backgroundColor:'black'}}></span><span class="sr-only"></span></a></div>
            {/* <ol
                class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#pslide">List Item</li>
                <li data-slide-to="1" data-target="#pslide">List Item</li>
                <li data-slide-to="2" data-target="#pslide">List Item</li>
                </ol> */}
        </div>
    </div>
</div>
    
        
      </div>
    )
  }
}
export default VideoSlider;