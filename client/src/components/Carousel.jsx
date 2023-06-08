import Carousel from 'react-bootstrap/Carousel';

const AccPWD = require('../images/ACSPWD.jpg')
const CcPWD = require('../images/callcenterpwed.jpg')
const VisualPWD = require('../images/visualpwd.jpg')

function UncontrolledExample() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={AccPWD}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Accounting Specialist</h3>
          <p>As an Account Specialist you will work with a portfolio of advertiser accounts and be responsible in helping them meet their advertising goals via opportunity identification, account optimization or creating new sponsored ads campaigns. Additionally, an Account Specialist also gets the opportunity to test internal tools, gathering & sharing insights with the internal product and engineering teams.
</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CcPWD}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Call Center Agent</h3>
          <p>A Call Centre Representative, or Call Centre Agent, is responsible for handling customer service matters over the telephone.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={VisualPWD}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Visual Artist</h3>
          <p>
          The Visual Artist creates art works to be exhibited in galleries, museums or in public spaces. He/She expresses their ideas, messages or emotions through their work of art. Most of their artwork are put up for sale. The Visual Artist may specialise in one discipline such as drawing, painting, pottery or sculpture. He/She creates their signature style through their specialised medium. The Visual Artist may have the freedom to choose their clients and projects to work on. He/She typically works independently.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;