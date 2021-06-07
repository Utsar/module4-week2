import { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

class Home extends Component {
  state = {
    movieTitle: "Some Movie",
  };

  changeMovie = (e) => {
    this.setState({
      movieTitle: e.target.value,
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movies</Form.Label>
              <Form.Control
                as="select"
                onChange={this.changeMovie}
                value={this.state.movieTitle}
              />
              <Form.Select
                as="select"
                onChange={this.changeMovie}
                value={this.state.movieTitle}
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
