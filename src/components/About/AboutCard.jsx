import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am <span className="purple">Priya Kumari </span>
						from <span className="purple"> Jamshedpur - Jharkhand, India.</span>
						<br /> I worked as a Software Developer at{' '}
						<span className="purple">
							{' '}
							Sella India Software Services, Chennai.{' '}
						</span>
						<br />
						I love web development because it&lsquo;s the art of turning ideas
						into interactive, real-world solutions. It&lsquo;s a creative
						process that keeps me constantly learning and adapting to new
						technologies
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing Basketball
						</li>
						<li className="about-activity">
							<ImPointRight /> Reading Tech Blogs
						</li>
						<li className="about-activity">
							<ImPointRight /> And many more.....
						</li>
					</ul>

					<p style={{ color: 'rgb(155 126 172)' }}>
						&quot;If you are a learner then nothing is impossible for you
						!&quot;{' '}
					</p>
					<footer className="blockquote-footer">Priya Kumari</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
