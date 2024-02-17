import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatarPriya.jpg';
import Tilt from 'react-parallax-tilt';
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: '2.6em' }}>
							Know more about <span className="purple"> PRIYA </span>
						</h1>
						<p className="home-about-body">
							I&lsquo;ve developed a strong passion for programming and gained
							significant knowledge in the field, affirming my substantial
							progress
							<br />
							<br />I possess proficiency in foundational technologies,
							including
							<i>
								<b className="purple"> HTML5, CSS3, JavaScript, MERN Stack. </b>
							</i>
							<br />
							<br />I love creating cutting-edge &nbsp;
							<i>
								<b className="purple">Web Technologies and Products </b>
								and I&lsquo;m also fascinated by{' '}
								<b className="purple">web design.</b>
							</i>
							<br />
							<br />I have a strong interest in using{' '}
							<b className="purple">Node.js and MongoDB</b>
							<i>
								<b className="purple"> </b>
							</i>
							&nbsp; and contemporary JavaScript libraries and frameworks such
							as
							<i>
								<b className="purple"> React.js and Express.js</b>
							</i>
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/priyaku07"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://twitter.com/scarlett_wich20"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiOutlineTwitter />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/priya-kumari-linldin2024"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/scarlett_witch20/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
