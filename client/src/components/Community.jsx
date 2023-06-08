import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const iscard = require('../images/celia.jpeg')
const cmotes = require('../images/cmotes.jpg')
const war = require('../images/war.jpg')

function GroupExample() {
    return (
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={iscard} />
          <Card.Body>
            <Card.Title>Virginia S. Rabino - DATA ANALYST</Card.Title>
            <Card.Text>
            "Believe you can and you're halfway there." - Theodore Roosevelt
            </Card.Text>
            <Button variant="primary" >Go somewhere</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={cmotes} />
          <Card.Body>
            <Card.Title>Eric Muaña - VISUAL ARTIST</Card.Title>
            <Card.Text>
            "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles." - Christopher Reeve{' '}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={war} />
          <Card.Body>
            <Card.Title>Warwick Davis - ACTOR</Card.Title>
            <Card.Text>
              "The world worries about disability more than disabled people do." - Warwick Davis
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  }
  
  export default GroupExample;