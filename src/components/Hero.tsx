import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
	return (
		<section className='min-h-screen flex items-center justify-center relative overflow-hidden pt-16'>
			{/* Background gradient */}
			<div className='absolute inset-0 gradient-bg opacity-10'></div>

			{/* Floating elements */}
			<div className='absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float'></div>
			<div
				className='absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float'
				style={{ animationDelay: '1s' }}
			></div>
			<div
				className='absolute top-1/2 right-20 w-16 h-16 bg-indigo-500/10 rounded-full animate-float'
				style={{ animationDelay: '2s' }}
			></div>

			<div className='container mx-auto px-4 text-center relative z-10'>
				<div className='max-w-4xl mx-auto animate-fade-in'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
						<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
							Kelajagingizni
						</span>
						<br />
						<span className='text-foreground'>IT sohasida quring!</span>
					</h1>

					<p className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
						Professional IT mutaxassislaridan o'rganing. 4 ta yo'nalish, amaliy
						loyihalar va kafolatlangan natija.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
						<a href='#courses'>
							<Button
								size='lg'
								className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 group'
							>
								Kurslarni ko'rish
								<ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
							</Button>
						</a>
					</div>

					{/* Stats */}
					<div className='grid grid-cols-2 md:grid-cols-3 gap-8 mt-16'>
						<div
							className='text-center animate-fade-in'
							style={{ animationDelay: '0.4s' }}
						>
							<div className='text-3xl font-bold text-primary mb-2'>4</div>
							<div className='text-muted-foreground'>Yo'nalishlar</div>
						</div>
						<div
							className='text-center animate-fade-in'
							style={{ animationDelay: '0.6s' }}
						>
							<div className='text-3xl font-bold text-primary mb-2'>95%</div>
							<div className='text-muted-foreground'>Ishga joylashish</div>
						</div>
						<div
							className='text-center animate-fade-in'
							style={{ animationDelay: '0.8s' }}
						>
							<div className='text-3xl font-bold text-primary mb-2'>3</div>
							<div className='text-muted-foreground'>Oy davomiyligi</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
