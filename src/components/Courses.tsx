import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	Smartphone,
	TrendingUp,
	Code,
	Search,
	Clock,
	Users,
	Award,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const courses = [
	{
		id: 1,
		title: ' Mobile Graf Dizayn',
		description:
			"Mobil qurilmalar uchun professional dizayn tayyorlashni o'rganing",
		icon: Smartphone,
		color: 'from-pink-500 to-rose-500',
		duration: '3 oy',
		students: '',
		steps: [
			{
				title: '1-bosqich: Asoslar',
				items: [
					'Mobile graf nima?',
					'Kontent dizayni tushunchasi',
					'Canva va Pixellab dasturlari bilan ishlash',
					'Minimalizm va kompozitsiya',
				],
			},
			{
				title: '2-bosqich: Amaliy dizayn',
				items: [
					'Instagram post va story dizayni',
					'Telegram kanal va reklama bannerlari',
					'Brending (logo, palitra, shrift tanlash)',
					'Animatsiyali dizaynlar',
				],
			},
			{
				title: '3-bosqich: Professional daraja',
				items: [
					'Portfolio yig‘ish',
					'Real loyihalar ustida ishlash',
					"Ishga joylashish bo'yicha yo'l-yo'riq",
					'SMMchilar bilan tandemdagi ish',
				],
			},
		],
	},
	{
		id: 2,
		title: 'SMM (Ijtimoiy tarmoq marketingi)',
		description:
			"Brendlar uchun onlayn obro' va mijozlar jalb qilish strategiyalari",
		icon: TrendingUp,
		color: 'from-blue-500 to-cyan-500',
		duration: '3 oy',
		students: '',
		steps: [
			{
				title: '1-bosqich: Asoslar',
				items: [
					'SMM nima?',
					'Ijtimoiy tarmoqlarning roli',
					'Kontent reja tuzish',
				],
			},
			{
				title: '2-bosqich: Amaliyot',
				items: [
					'Instagram/Facebook algoritmlari',
					'Reklama yaratish (Meta Ads)',
					'Target qilish va analitika',
				],
			},
			{
				title: '3-bosqich: Pro daraja',
				items: [
					'Brend strategiyasi yaratish',
					'Influencer marketing',
					'Real loyihalar ustida ish',
				],
			},
		],
	},
	{
		id: 3,
		title: 'Dasturlash ',
		description: "Zamonaviy texnologiyalar asosida kod yozishni o'rganing",
		icon: Code,
		color: 'from-green-500 to-emerald-500',
		duration: '3 oy',
		students: '',
		steps: [
			{
				title: '1-bosqich: Asosiy bilimlar',
				items: [
					'HTML, CSS, JavaScript',
					'VS Code bilan tanishish',
					'Frontend nima, backend nima?',
				],
			},
			{
				title: '2-bosqich: Amaliy dasturlash',
				items: [
					'React yoki Vue asoslari',
					'GitHub bilan ishlash',
					'API nima va qanday ishlaydi?',
				],
			},
			{
				title: '3-bosqich: Loyihaviy ishlar',
				items: [
					'Web ilova yasash',
					'Portfolio va CV tayyorlash',
					"Ishga joylashish bo'yicha yo'l-yo'riq",
				],
			},
		],
	},
	{
		id: 4,
		title: 'SEO (Qidiruv tizimi optimizatsiyasi)',
		description: "Saytlarni Google'da yuqoriga chiqarish sirlarini o'rganing",
		icon: Search,
		color: 'from-purple-500 to-indigo-500',
		duration: '3 oy',
		students: '',
		steps: [
			{
				title: '1-bosqich: Asoslar',
				items: [
					'SEO nima va nima uchun kerak?',
					"Kalit so'zlar va meta teglar",
					'Sayt strukturasini tushunish',
				],
			},
			{
				title: '2-bosqich: Ichki va tashqi SEO',
				items: [
					'On-page va off-page SEO',
					'Backlinklar yaratish',
					'Sayt tezligini optimallashtirish',
				],
			},
			{
				title: '3-bosqich: Professional SEO',
				items: [
					'Google Search Console',
					'SEO analitika va audit',
					'Real saytlar ustida ishlash',
				],
			},
		],
	},
	{
		id: 5,
		title: 'Backend Dasturlash',
		description: "Server, API va ma'lumotlar bazasi bilan ishlashni o'rganing",
		icon: Code,
		color: 'from-indigo-500 to-blue-600',
		duration: '3 oy',
		students: '',
		steps: [
			{
				title: '1-bosqich: Asosiy bilimlar',
				items: [
					'Node.js asoslari va VS Code bilan ishlash',
					'Server, API va ma’lumotlar bazasi tushunchalari',
					'HTTP metodlari (GET, POST, PUT, DELETE)',
					'JSON formati va ma’lumot almashinuvi',
				],
			},
			{
				title: '2-bosqich: Amaliy backend',
				items: [
					'Express.js va MongoDB bilan ishlash',
					'CRUD operatsiyalarni amalga oshirish',
					'Autentifikatsiya (login/signup) tizimi',
				],
			},
			{
				title: '3-bosqich: Loyihalar va ishga tayyorgarlik',
				items: [
					'REST API yaratish va real loyiha qilish',
					'Portfolio va CV tayyorlash',
					'Ish topish bo‘yicha maslahatlar',
				],
			},
		],
	},
]

const Courses = () => {
	return (
		<section id='courses' className='py-20 bg-muted/50'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
							Kursxona yo'nalishlari
						</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Har bir yo'nalish 3 bosqichli dastur bilan tuzilgan va amaliy
						loyihalar ustida ishlashni o'z ichiga oladi
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{courses.map((course, index) => (
						<Card
							key={course.id}
							className='course-card animate-fade-in hover:shadow-xl'
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<CardHeader>
								<div className='flex items-center space-x-4 mb-4'>
									<div
										className={`p-3 rounded-lg bg-gradient-to-r ${course.color}`}
									>
										<course.icon className='h-6 w-6 text-white' />
									</div>
									<div>
										<CardTitle className='text-xl mb-2'>
											{course.title}
										</CardTitle>
										<div className='flex items-center space-x-4 text-sm text-muted-foreground'>
											<div className='flex items-center'>
												<Clock className='h-4 w-4 mr-1' />
												{course.duration}
											</div>
											<div className='flex items-center'>
												<Users className='h-4 w-4 mr-1' />
												{course.students}
											</div>
										</div>
									</div>
								</div>
								<CardDescription className='text-base'>
									{course.description}
								</CardDescription>
							</CardHeader>

							<CardContent>
								<div className='space-y-6 mb-6'>
									{course.steps.map((step, stepIndex) => (
										<div key={stepIndex} className='step-item'>
											<h4 className='font-semibold text-primary mb-2'>
												{step.title}
											</h4>
											<ul className='space-y-1 text-sm text-muted-foreground'>
												{step.items.map((item, itemIndex) => (
													<li key={itemIndex} className='flex items-start'>
														<span className='text-primary mr-2'>•</span>
														{item}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>

								<div className='flex items-center justify-between pt-4 border-t'>
									<div className='flex items-center text-sm text-muted-foreground'>
										<Award className='h-4 w-4 mr-1' />
										Sertifikat + Portfolio
									</div>
									<a href={'#panel'}>
										<Button
											className={`bg-gradient-to-r ${course.color} hover:opacity-90`}
										>
											Ro'yhatdan o'tish
										</Button>
									</a>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default Courses
