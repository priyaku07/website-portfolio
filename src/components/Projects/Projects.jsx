import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import webDev from '../../Assets/Projects/webDev.png';
import reactCourse from '../../Assets/Projects/reactCourse.png';
import docker from '../../Assets/Projects/docker.png';
import weatherapp from '../../Assets/Projects/weatherapp.png';
import snakegame from '../../Assets/Projects/snakegame.png';
import spacetourism from '../../Assets/Projects/spacetourism.png';
import react from '../../Assets/Projects/reactPortfolio.png';

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: 'white', textAlign:'center' }}>
					Here are a few projects and courses I&lsquo;ve worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={react}
							isBlog={false}
							title="Portfolio Website (React.js)"
							description="Creating my portfolio with React.js was a fulfilling journey. It tested my design and development skills, encouraging me to explore new tools and enhance my knowledge. Structuring components, ensuring responsiveness, and deploying the site taught me valuable lessons in web development. Crafting content allowed me to articulate my skills and experiences effectively"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={webDev}
							isBlog={false}
							title="The Complete 2023 Web Development BootCamp"
							description="I successfully completed the 2023 Web Development Bootcamp on Udemy, gaining a comprehensive understanding of the latest web development technologies and techniques. This immersive program equipped me with the skills needed to create dynamic and user-friendly websites, setting a strong foundation for my journey as a web developer."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={reactCourse}
							isBlog={false}
							title="React-The Complete Guide 2023 (incl. React Router & Redux)"
							description="Finished the comprehensive 'React - The Complete Guide 2023' course on Udemy, gaining in-depth knowledge of React, React Router, and Redux. This training has equipped me to develop dynamic, high-performance web applications effectively. "
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={docker}
							isBlog={false}
							title="Docker and Kubernetes: The Practical Guide [2023 Edition]"
							description="Completed the 'Docker and Kubernetes: The Practical Guide [2023 Edition]' course, enhancing my skills in containerization and orchestration. This hands-on training empowers me to deploy and manage applications more efficiently, ensuring scalability and reliability."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={weatherapp}
							isBlog={false}
							title="WeatherApp using JavaScript"
							description="Developed a weather app using JavaScript, showcasing my proficiency in front-end web development. This project allowed me to integrate external APIs, handle data dynamically, and provide users with real-time weather information. It highlights my ability to create interactive and functional web applications."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={snakegame}
							isBlog={false}
							title="Snake Game using JavaScript"
							description="Created a classic Snake game using JavaScript, demonstrating my skills in game development and logic programming. This project involved managing the game's state, user interactions, and score tracking. It reflects my ability to craft engaging and interactive experiences through coding."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={spacetourism}
							isBlog={false}
							title="Space Tourism website using ReactJs"
							description="I created a Space Tourism website using ReactJS for a Front End Mentor challenge. This project demonstrated my skills in building interactive, responsive, and multipage websites with React, emphasizing component-based development, routing, and state management. It was a valuable opportunity to enhance my web development abilities using React."
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
