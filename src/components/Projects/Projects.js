import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import gmail from "../Projects/gmail.png";
import file from "../Projects/file.png";
import hotstar from "../Projects/hotstar.png";
import elearn from "../Projects/elearn.png";
import summary from "../Projects/summary.png";

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
              description="This is an ongoing project. We have manually collected datasets of various leaves (like Soyabean, LadyFinger, Tomato etc) and annotated the images using VGG annotator and detected the diseases of leaves using Mask RCNN and other machine learning models"
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={summary}
              isBlog={false}
              title="Text Summarizer"
              description="This project introduces a Multilingual Text Summarizer with advanced features
              designed to enhance user experience and accessibility.The system not only generates concise summaries but also offers title suggestions, ensuring the summary aligns seamlessly with the user's preferences. Additionally, it integrates an innovative audio playback functionality that allows users to listen to the summary in their preferred language, thus catering to diverse linguistic preferences and increasing accessibility for a wider audience."
              ghLink="https://github.com/Ganga-0410/Text_Summarizer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={file}
              isBlog={false}
              title="Decentralized File System"
              description="Created a Decentralized File System which is connected with Hardhat Network in MetaMask. And files stored in this file system will saved in Pinata Cloud. By using this system, one can save there files in cloud securely, also we share the access to our files in cloud to whoever we want to sent there account no. in MetaMask"
              ghLink="https://github.com/Ganga-0410/Decentralized-File-System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotstar}
              isBlog={false}
              title="Hotstar Clone"
              description="Created a clone of Disney Hotstar Website using HTML, CSS, JavaScript"
              ghLink="https://github.com/Ganga-0410/myprojects"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elearn}
              isBlog={false}
              title="E-Learning Website FrontEnd View"
              description="Created a FrontEnd View Of E-Learning Website using HTML, CSS, JavaScript"
              ghLink="https://github.com/Ganga-0410/FrontView-of-E-Learning-Website"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmail}
              isBlog={false}
              title="FrontEnd Clone Of Gmail Website"
              description="Created a clone of google's Gmail Website using HTML, CSS, JavaScript"
              ghLink="https://github.com/Ganga-0410/Gmail-Website-Frontend-Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
