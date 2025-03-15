import { Container, Row,Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.jpeg";
import meter2 from "../assets/img/meter2.jpeg";
import meter3 from "../assets/img/meter3.jpeg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        
        <section className='skill' id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>I'm always up for picking up new skills and adapt to the technological advancements from time to time</p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='Item'>
                            <img src={meter1} alt="Image" style={{width:"250px",height:"200px"}}/>
                            <h5>Web Development</h5>
                            </div>
                            <div className='Item'>
                            <img src={meter2} alt="Image" style={{width:"250px",height:"200px"}}/>
                            <h5>Coding</h5>
                            </div>
                            <div className='Item'>
                            <img src={meter3} alt="Image" style={{width:"250px",height:"200px"}}/>
                            <h5>Machine Learning</h5>

                        </div>
                    </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp}/>
        </section>
        
      )
}