import React, { Component } from "react";
import { Card } from "react-bootstrap";
import http from "./services/httpService";
import config from "../config.json";
import "react-toastify/dist/ReactToastify.css";
import { Button, Container } from "react-bootstrap";
import MemberForm from "./memberform";

class Members extends Component {
  state = {
    members: [],
    modalShow: false,
  };

  async componentDidMount() {
    const { data: members } = await http.get(config.apiEndPoint + "members");
    this.setState({ members });
  }
  setModalShow = (val) => {
    const modalShow = val;
    this.setState({ modalShow });
  };

  handleAdd() {}
  render() {
    const { modalShow } = this.state;
    return (
      <Container className="justify-content-center">
        <Button
          variant="primary"
          className="newMemberBtn"
          onClick={() => this.setModalShow(true)}
        >
          + Add New Member
        </Button>
        <div className="mycontainer">
          {this.state.members.map((m) => (
            <Card className="cards" key={m.MemberName}>
              <Card.Body>
                <Card.Title>{m.MemberName}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          ))}
        </div>

        <MemberForm show={modalShow} onHide={() => this.setModalShow(false)} />
      </Container>
    );
  }
}

export default Members;
