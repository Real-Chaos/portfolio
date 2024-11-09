import RadarChart from '../helpers/Timeline'
import Profile from '../helpers/Profile'
import About from '../helpers/About'
import '../styles/Hero.css'

const Hero = () => {
	return (
		<>
			<div className='hero'>
				<About />
				<Profile />
				<RadarChart />
			</div>
		</>
	)
}

export default Hero
