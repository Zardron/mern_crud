import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import {
  Accordion,
  Badge,
  Button,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { notess } from "../assets/data.js";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    // if (window.confirm("Are you sure you want to delete this note?")) {
    // }
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button type="button" onClick={decoratedOnClick}>
        {children}
      </button>
    );
  }

  const fetchNotes = async () => {
    const { data } = await axios.get("");

    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Dashboard title={"Welcome Back Zardron Angelo"}>
        <Link to="/create-note">
          <Button>Create New Note</Button>
        </Link>
        {notess.map((item, key) => (
          <>
            <Accordion defaultActiveKey={0}>
              <Card className="mt-2" key={key}>
                <Card.Header
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CustomToggle
                    as={Card.Text}
                    variant="link"
                    eventKey={item.key}
                  >
                    <span
                      style={{
                        display: "flex",
                        color: "black",
                        textDecoration: "none",
                        flex: "1",
                        cursor: "pointer",
                        justifyContent: "flex-start",
                        fontSize: 18,
                      }}
                    >
                      {item.title}
                    </span>
                  </CustomToggle>

                  <div className="ml-auto">
                    <Link to={`/my-notes/${item._id}`}>
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={deleteHandler(item._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>

                <Accordion.Collapse eventKey={item.key}>
                  <Card.Body>
                    <h4>
                      <Badge>Category - {item.category}</Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{item.content}</p>
                      <footer className="blockquote-footer">
                        Created on - date
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </>
        ))}
      </Dashboard>
    </>
  );
};

export default MyNotes;
