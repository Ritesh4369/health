import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap'
import logo5 from './images/logo-5.svg'
import logo4 from './images/logo-4.svg'
import logo3 from './images/logo-3.svg'
import logo2 from './images/logo-2.svg'
import logo1 from './images/logo-1.svg'
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <div className="App">
      {/* -----------------------------------------------------------------------------------------------------------------
                                                         Header
------------------------------------------------------------------------------------------------------------------ */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#"><img src={require("./images/logo.png")}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 align-items-center"
              style={{ maxHeight: '500px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">All coursrs</Nav.Link>
              <Nav.Link href="#action3">Yoga Sadhana </Nav.Link>
              <Nav.Link href="#action4">Eating Healthy</Nav.Link>
              <Nav.Link href="#action5">About</Nav.Link>
              <Nav.Link href="#action6">Contact</Nav.Link>
              <Nav.Link href="#action7"><Button>Start learning</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* -----------------------------------------------------------------------------------------------------------------
                                                         VIDEO COURSES
------------------------------------------------------------------------------------------------------------------ */}

      <Row className='COURSES'>
        <Col xl={"7"} lg={"7"} sm={"12"} md={"6"} xs={"12"} className='courses_text'>
          <p>ON-DEMAND VIDEO COURSES</p>
          <h1>Live a Healthy Life. Learn From Experts.</h1>
          <h3>Get healthier by following lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</h3>
          <Button>View All Courses</Button>
          <img src={require("./images/pattern.png")} width={180}></img>
        </Col>
        <Col xl={"5"} lg={"5"} sm={"12"} md={"6"} xs={"12"} className='video_coures'>
          <img src={require('./images/yoga-trainer.png')} className="img-fluid" />
        </Col>
      </Row>

      {/* -----------------------------------------------------------------------------------------------------------------
                                                         Featured In
------------------------------------------------------------------------------------------------------------------ */}

      {/* lg={"4"} md={"6"} sm={"12"} */}
      {/* <Container>
        <Row>
          <Col className='d-flex align-items-center'>
            <h4 md={"7"}>Featured In</h4>
            <img md={"1"} src={logo5} width={150}  />
            <img md={"1"} src={logo4} width={150}  />
            <img md={"1"} src={logo3} width={150}  />
            <img md={"1"} src={logo2} width={150}  />
            <img md={"1"} src={logo1} width={150}  />
          </Col>
        </Row>
      </Container> */}

      {/* -----------------------------------------------------------------------------------------------------------------
                                                         Health ratings
------------------------------------------------------------------------------------------------------------------ */}
      <Row className='Health_rating'>
        <Col lg={3} md={3} sm={6} xs={6} className='rating'>
          <h1>4.8</h1>
          <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
          <h4>2,394 Ratings</h4>
          <h3>Google Reviews</h3>
        </Col>
        <Col lg={3} md={3} sm={6} xs={6} className='rating'>
          <h1>A+</h1>
          <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
          <h4>125 Student Reviews</h4>
          <h3>BBB Rating</h3>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="reviews">
          <h3>Trusted by over 7000 Health Seekers, Worldwide. Since 2005.</h3>
          <Row >
            <Col lg={8} md={8} sm={12} xs={12} className='reviews_text'>
              <h4>Jessica Simon</h4>
              <p>I have been following this routine and became healthier by doing lorem ipsum proin gravida nibh vel velit auctor aliquet aenean.</p>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <img src={require("./images/customer-review.jpg")} width={110} />
            </Col>
          </Row>
        </Col>
      </Row>
      {/* -----------------------------------------------------------------------------------------------------------------
                                                        LIFE
------------------------------------------------------------------------------------------------------------------ */}
      <Row className='life'>
        <Row>
          <Col lg={"7"} xs={"12"} md={"7"} className='life_text'>
            <h3>CHANGE YOUR LIFE</h3>
            <h1>Start Your Journey of Happiness and Health Today!</h1>
          </Col>
          <Col lg={"5"} xs={"12"} md={"5"} className="life_button">
            <Button>View All Courses</Button>
          </Col>
        </Row>
        <Row className='Yoga'>
          <Col lg={"4"} xs={"12"} md={"4"} className='Yoga_about'>
            <img src={require("./images/yoga.jpg")} width={410}></img>
            <h3>Seek Health with Yoga Sadhana</h3>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
          </Col>
          <Col lg={"4"} xs={"12"} md={"4"} className='Yoga_about'>
            <img src={require("./images/nutritions.jpg")} width={410}></img>
            <h3>Healthy Eating for Healthy Life</h3>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
          </Col>
          <Col lg={"4"} xs={"12"} md={"4"} className='Yoga_about'>
            <img src={require("./images/pranayama.jpg")} width={410}></img>
            <h3>Control Your Brain with Pranayama</h3>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
          </Col>
        </Row>
        <Row className='Features_Benefits'>
          <Col lg={"12"} xs={"12"} md={"12"} className="fb">
            <p>Features & Benefits</p>
          </Col>
        </Row>
        <Row className='Features'>
          <Col lg={"4"} xs={"12"} md={"4"} className='Features_text'>
            <h3>Features</h3>
            <p><i className="fa-solid fa-circle-dot"></i>Yoga Training</p>
            <p><i className="fa-solid fa-circle-dot"></i>Healthy Eating Habits</p>
            <p><i className="fa-solid fa-circle-dot"></i>Simple Language</p>
            <p><i className="fa-solid fa-circle-dot"></i>Lifetime Access</p>
            <p><i className="fa-solid fa-circle-dot"></i>No Ads. Focus on Health.</p>
          </Col>
          <Col lg={"4"} xs={"12"} md={"4"} className='Features_text'>
            <h3>Benefits</h3>
            <p><i className="fa-solid fa-circle-dot"></i>Improve Your Stamina</p>
            <p><i className="fa-solid fa-circle-dot"></i>Get Better Health</p>
            <p><i className="fa-solid fa-circle-dot"></i>Achieve Peace of Mind</p>
            <p><i className="fa-solid fa-circle-dot"></i>Look Young & Beautiful</p>
            <p><i className="fa-solid fa-circle-dot"></i>Achieve more in Life</p>
          </Col>
          <Col lg={"4"} xs={"12"} md={"4"} className="Features_img">
            <img src={require("./images/features-and-benefits.jpg")}></img>
          </Col>
        </Row>
      </Row>
      {/* -----------------------------------------------------------------------------------------------------------------
                                                        WE HELP YOU STAY HEALTHY
------------------------------------------------------------------------------------------------------------------ */}
      <Row className='STAY_HEALTHY'>
        <Row>
          <Col lg={"12"} md={"12"} sm={"12"} xs={"12"} className='STAY_HEALTHY_text'>
            <h3>WE HELP YOU STAY HEALTHY</h3>
            <h1>The Trainers</h1>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={"3"} md={"6"} sm={"12"} xs={"12"} className="trainers_img">
            <img src={require("./images/trainer1-1.jpg")} />
          </Col>
          <Col lg={"3"} md={"6"} sm={"12"} xs={"12"} className="trainers_text ">
            <h3>Jamie Hofstadter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo luctus .</p>
          </Col>
          <Col lg={"3"} md={"6"} sm={"12"} xs={"12"} className="trainers_img">
            <img src={require("./images/trainer2.jpg")} />
          </Col>
          <Col lg={"3"} md={"6"} sm={"12"} xs={"12"} className="trainers_text">
            <h3>Annie Hofstadter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo luctus .</p>
          </Col>
        </Row>
      </Row>
      {/* -----------------------------------------------------------------------------------------------------------------
                                                        Happy Faces of Happy Students
------------------------------------------------------------------------------------------------------------------ */}
      <Row className='Student_Face'>
        <Col xl={"4"} lg={"12"} md={"12"} sm={"12"} xs={"12"} className="About_student">
          <h2>Happy Faces of Happy Students</h2>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollici tudin, lorem quis biben dum auctor, nisi elit conse quat.  </p>
          <Button>View All Testimonials</Button>
        </Col>
        <Col xl={"2"} lg={"3"} md={"3"} sm={"12"} xs={"12"} className="student_img">
          <img src={require("./images/student1.jpg")}/>
        </Col>
        <Col xl={"4"} lg={"6"} md={"6"} sm={"12"} xs={"12"} className="student_img0">
          <Row>
            <Col xl={"7"} lg={"8"} md={"8"} sm={"7"}  xs={"8"} className="student_img1">
              <img src={require("./images/student3.jpg")} />
            </Col>
            <Col xl={"4"} lg={"4"} md={"4"} sm={"5"}  xs={"4"} className="student_img2">
              <img src={require("./images/student6.jpg")}/>
            </Col>
          </Row>
          <Row>
            <Col xl={"3"} lg={"4"} md={"3"} sm={"4"}  xs={"4"} className="student_img3">
              <img src={require("./images/student5.jpg")} />
            </Col>
            <Col xl={"9"} lg={"8"} md={"7"} sm={"8"}  xs={"8"} className="student_img4">
            <img src={require("./images/student4.jpg")} />
            </Col>
          </Row>
        </Col>
        <Col xl={"2"} lg={"3"} md={"3"} sm={"12"} xs={"12"} className="student_img5">
          <img src={require("./images/student2.jpg")}  width={150}/>
        </Col>
      </Row>
      {/* -----------------------------------------------------------------------------------------------------------------
                                                        Footer
------------------------------------------------------------------------------------------------------------------ */}

      <Row className='footer'>
        <Col lg={"12"} md={"12"} sm={"12"} xs={"12"} className='Footer_text'>
          <h2>Subscribe to Newsletter</h2>
          <p>Enter your email address to register to our newsletter subscription delivered on regular basis!</p>
          <input type="text" placeholder='Email Address' />
          <Button>Subscribe</Button><br></br>
          <i className="fa-brands fa-facebook-square"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-youtube"></i><i className="fa-brands fa-google"></i>
        </Col>
      </Row>

      <Row className='footer1'>
        <Col lg={"6"} md={"6"} sm={"6"} xs={"12"} className='copyright'>
          <p>Copyright © 2022 Online Health Coach</p>
        </Col>
        <Col lg={"6"} md={"6"} sm={"6"} xs={"1"} className='copyright'>
          <p>Powered by Online Health Coach</p>
        </Col>
      </Row>

    </div>
  );
}

export default App;
