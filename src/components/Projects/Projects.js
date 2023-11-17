import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import gmail from "../Projects/gmail.png";
import file from "../Projects/file.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Leaf Diseases Detection Using Classification Algorithms"
              description="We have manually collected datasets of various leaves (like Soyabean, LadyFinger, Tomato etc) and annotated the images using VGG annotator and detected the diseases of leaves using Mask RCNN and other machine learning models"
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmail}
              isBlog={false}
              title="FrontEnd Clone Of Gmail Website"
              description="Created a clone of google's Gamil Website using HTML, CSS, JavaScript"
              ghLink="https://github.com/Ganga-0410/Gmail-Website-Frontend-Clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={file}
              isBlog={false}
              title="Decentralized File System"
              description="Created a Decentralized File System which is connected with Hardhat Network in MetaMask. And file s stored in this file system will saved in Pinata Cloud. By using this system, one can save there files in cloud securely, also we share the acces to our files in cloud to whoever we want to sing there account no. in MetaMask"
              ghLink="https://github.com/Ganga-0410/Decentralized-File-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
