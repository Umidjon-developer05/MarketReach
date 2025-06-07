import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Users, BookOpen, TrendingUp, Clock, Target } from 'lucide-react'

const stats = [
	{ icon: Award, value: '95%', label: "Ishga joylashish ko'rsatkichi" },
	{ icon: BookOpen, value: '4', label: "Professional yo'nalishlar" },
	{ icon: TrendingUp, value: '3 yil', label: 'Bozordagi tajriba' },
]

const features = [
	{
		icon: Clock,
		title: 'Moslashuvchan jadval',
		description:
			"Ish va o'qish vaqtini muvozanatlashtirishingiz uchun qulay jadval",
	},
	{
		icon: Target,
		title: 'Amaliy loyihalar',
		description:
			'Har bir kursda real loyihalar ustida ishlab portfolio yarating',
	},
	{
		icon: Users,
		title: 'Mentor yordami',
		description: "Shaxsiy mentor va guruh yordami bilan o'rganish jarayoni",
	},
	{
		icon: Award,
		title: 'Kafolatlangan natija',
		description: 'Kurs tugagach ishga joylashish yordam berish ',
	},
]

const About = () => {
	return (
		<section id='about' className='py-20'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
							Kursxona haqida
						</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Biz IT sohasidagi eng so'nggi bilimlar va amaliy ko'nikmalarni
						o'rgatuvchi zamonaviy ta'lim markazimiz. Maqsadimiz - har bir
						o'quvchini professional mutaxassisga aylantirish.
					</p>
				</div>

				{/* Stats */}
				<div className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-16'>
					{stats.map((stat, index) => (
						<div
							key={index}
							className='text-center animate-fade-in'
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4'>
								<stat.icon className='h-8 w-8 text-white' />
							</div>
							<div className='text-3xl font-bold text-primary mb-2'>
								{stat.value}
							</div>
							<div className='text-muted-foreground'>{stat.label}</div>
						</div>
					))}
				</div>

				{/* Features */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
					{features.map((feature, index) => (
						<Card
							key={index}
							className='course-card animate-fade-in'
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<CardContent className='p-6'>
								<div className='flex items-start space-x-4'>
									<div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
										<feature.icon className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold text-lg mb-2'>
											{feature.title}
										</h3>
										<p className='text-muted-foreground'>
											{feature.description}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Mission */}
				<Card
					className='course-card animate-fade-in bg-gradient-to-r from-blue-50 to-purple-50 border-0'
					style={{ animationDelay: '0.6s' }}
				>
					<CardContent className='p-8 text-center'>
						<h3 className='text-2xl font-bold mb-4'>Bizning missiyamiz</h3>
						<p className='text-lg text-muted-foreground mb-6 max-w-3xl mx-auto'>
							O'zbekistonda IT ta'limini yangi bosqichga olib chiqish va har bir
							inson uchun sifatli texnologik ta'limni ochiq qilish. Biz nafaqat
							bilim beramiz, balki kelajakni quruvchi mutaxassislar
							tayyorlaymiz.
						</p>
						<div className='flex flex-wrap justify-center gap-3'>
							<Badge variant='secondary' className='px-4 py-2'>
								Innovatsion yondashuv
							</Badge>
							<Badge variant='secondary' className='px-4 py-2'>
								Amaliy ta'lim
							</Badge>
							<Badge variant='secondary' className='px-4 py-2'>
								Kafolatli natija
							</Badge>
							<Badge variant='secondary' className='px-4 py-2'>
								Professional mentorlik
							</Badge>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

export default About
