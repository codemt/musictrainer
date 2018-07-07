import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link ,  } from 'react-router-dom';
 class DashBoard extends Component {
  render() {
    return (
            <div>
                    <h1> Your Dashboard </h1>
                    <div class="container">
                            <Row>
                            <Col sm="6">
                            <Card body>
                                <CardTitle> Guitar Basics Course </CardTitle>
                                <img width="100%" src="https://i.ytimg.com/vi/9wniwSCyDoA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDAUU234PsHPPLXcu-1xfMmJzoWgA" alt="Card image cap" />
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Link to='/guitarbasics'>
                                <Button style={{width:408,height:37}}> Open </Button>
                                </Link>
                            </Card>
                            </Col>
                            <Col sm="6">
                            <Card body>
                                <CardTitle> Guitar Songs Playlist#1 </CardTitle>
                                <img width="100%" src="https://www.guitarplayerworld.com/wp-content/uploads/2013/05/SongsForKids.jpg" alt="Card image cap" style={{widht:408,height:228}} />
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Link to='/guitarbasics'>
                                <Button style={{width:408,height:37}}> Open </Button>
                                </Link>
                    
                            </Card>
                            </Col>
                        </Row>
                
                </div>
                
            </div>
    )
  }
};
export default DashBoard;