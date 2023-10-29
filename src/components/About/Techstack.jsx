import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import { AiFillHtml5 } from 'react-icons/ai';
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiGit,
	DiJava,
	DiCss3,
	DiAws,
	DiBootstrap,
	DiDocker,
} from 'react-icons/di';

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className="tech-icons">
				<CgCPlusPlus />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<AiFillHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiCss3 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiBootstrap />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiAws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiDocker />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava />
			</Col>
		</Row>
	);
}

export default Techstack;
