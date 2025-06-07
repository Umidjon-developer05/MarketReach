import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Award, Users } from 'lucide-react'

const teachers = [
	{
		id: 1,
		name: 'Umidjon G`afforov',
		specialization: ' Full stack Developer',
		experience: '3.5 yil tajriba',
		courses: ['Dasturlash', 'Mobil Dizayn', 'Web dizayn', 'Backend'],
		rating: 4.9,
		students: 150,
		description: 'Full Stack Web Developer & Mobile Developer Freelance Work',
		image:
			'https://f424t2l897.ufs.sh/f/PL1EUpsER0pmV179dmxhcFYHnATrBpxbdsk231eCwXR9VfNM',
	},
	{
		id: 2,
		name: 'Gulomova Shohina',
		specialization: 'SMM Expert & Brand Strategist',
		experience: '5 yil tajriba',
		courses: ['SMM'],
		rating: 4.8,
		students: 120,
		description:
			'Yirik brendlar bilan ishlagan. Instagram va Facebook sertifikatlangan mutaxassis.',
		image:
			'https://f424t2l897.ufs.sh/f/PL1EUpsER0pmhrH4pha6J1VLTKauixysSERdfGbkPj7CeNpF',
	},
	{
		id: 3,
		name: 'Umidjon G`afforov',
		specialization: 'SEO & Digital Marketing',
		experience: '3 yil tajriba',
		courses: ['SEO'],
		rating: 4.9,
		students: 95,
		description:
			'30+ saytni Google TOP-10ga chiqargan. Google Analytics va Search Console sertifikatlangan.',
		image:
			'https://f424t2l897.ufs.sh/f/PL1EUpsER0pmV179dmxhcFYHnATrBpxbdsk231eCwXR9VfNM',
	},
	{
		id: 4,
		name: 'Nurmurodov shamshod',
		specialization: 'Adminstrator',
		experience: '3 yil tajriba',
		courses: ['Admin'],
		rating: 5.0,
		students: 180,
		description: 'Adminstrator ',
		image:
			'https://f424t2l897.ufs.sh/f/PL1EUpsER0pmpCv5S6W03fCIgVqZOuWo2EFhL9bBNKpDd8G1',
	},
]

const Teachers = () => {
	return (
		<section id='teachers' className='py-20'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
							Ekspert o'qituvchilar
						</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Tajribali mutaxassislardan o'rganing. Har bir o'qituvchi o'z
						sohasida professional va amaliy tajribaga ega.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{teachers.map((teacher, index) => (
						<Card
							key={teacher.id}
							className='course-card text-center animate-fade-in group'
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<CardContent className='p-6'>
								<div className='relative mb-6'>
									<img
										src={teacher.image}
										alt={teacher.name}
										className='w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors'
									/>
									<div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2'>
										<Badge className='bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
											{teacher.experience}
										</Badge>
									</div>
								</div>

								<h3 className='font-bold text-lg mb-2'>{teacher.name}</h3>
								<p className='text-primary font-medium mb-3'>
									{teacher.specialization}
								</p>
								<p className='text-sm text-muted-foreground mb-4 leading-relaxed'>
									{teacher.description}
								</p>

								<div className='space-y-3 mb-4'>
									<div className='flex items-center justify-center space-x-4 text-sm'>
										<div className='flex items-center'>
											<Star className='h-4 w-4 text-yellow-500 mr-1' />
											<span className='font-medium'>{teacher.rating}</span>
										</div>
										<div className='flex items-center'>
											<Users className='h-4 w-4 text-muted-foreground mr-1' />
											<span>{teacher.students}+</span>
										</div>
									</div>

									<div className='flex flex-wrap gap-2 justify-center'>
										{teacher.courses.map(course => (
											<Badge
												key={course}
												variant='secondary'
												className='text-xs'
											>
												{course}
											</Badge>
										))}
									</div>
								</div>

								<div className='flex items-center justify-center text-muted-foreground'>
									<Award className='h-4 w-4 mr-1' />
									<span className='text-xs'>Sertifikatlangan mutaxassis</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default Teachers
