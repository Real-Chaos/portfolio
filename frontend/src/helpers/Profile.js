import img from '../images/profile.jpg'

const Profile = () => {
	return (
		<div className='profile'>
			<img src={img} alt='' />
			<p>
				Hello! I'm Rizwan Nafees, an aspiring full-stack developer with a
				passion for building efficient, scalable web applications. Currently
				pursuing a Bachelor of Science in Computer Science at Georgia State
				University !
			</p>
		</div>
	)
}

export default Profile
