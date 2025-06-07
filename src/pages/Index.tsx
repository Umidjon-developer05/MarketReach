import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import Teachers from '@/components/Teachers'
import Registration from '@/components/Registration'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Index = () => {
	return (
		<div className='min-h-screen'>
			<Header />
			<Hero />
			<Courses />
			<Teachers />
			<About />
			<Registration />
			<Contact />
			<Footer />
		</div>
	)
}

export default Index
