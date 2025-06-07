import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	MessageCircle,
	Instagram,
} from 'lucide-react'

const contactInfo = [
	{
		icon: Phone,
		title: 'Telefon',
		details: ['+998 93 656 99 16'],
		action: "Qo'ng'iroq qiling",
	},
	{
		icon: MessageCircle,
		title: 'Telegram',
		details: ['@NUR_carpareshn_com'],
		action: 'Xabar yuboring',
	},
	{
		icon: Instagram,
		title: 'Instagram',
		details: ['@NUR_carpareshn_com', '500+ followers'],
		action: 'Follow qiling',
	},
	{
		icon: Mail,
		title: 'Email',
		details: ['shamshodnurmurodov119@gmail.com'],
		action: 'Email yuboring',
	},
]

const workingHours = [
	{ day: 'Dushanba - Juma', time: '09:00 - 18:00' },
	{ day: 'Shanba', time: '10:00 - 15:00' },
	{ day: 'Yakshanba', time: 'Dam olish kuni' },
]

const Contact = () => {
	return (
		<section id='contact' className='py-20 bg-muted/50'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
							Biz bilan bog'laning
						</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Savollaringiz bormi? Biz doimo yordam berishga tayyormiz. Qulayingiz
						bo'lgan usulda bog'laning.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
					{/* Contact Methods */}
					<div className='lg:col-span-2'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{contactInfo.map((contact, index) => (
								<Card
									key={index}
									className='course-card animate-fade-in group'
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<CardHeader className='pb-4'>
										<div className='flex items-center space-x-3'>
											<div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform'>
												<contact.icon className='h-5 w-5 text-white' />
											</div>
											<CardTitle className='text-lg'>{contact.title}</CardTitle>
										</div>
									</CardHeader>
									<CardContent className='pt-0'>
										<div className='space-y-2 mb-4'>
											{contact.details.map((detail, idx) => (
												<p key={idx} className='text-muted-foreground'>
													{detail}
												</p>
											))}
										</div>
										<Button
											variant='outline'
											className='w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors'
										>
											{contact.action}
										</Button>
									</CardContent>
								</Card>
							))}
						</div>
					</div>

					{/* Working Hours & Location */}
					<div className='space-y-6'>
						<Card
							className='course-card animate-fade-in'
							style={{ animationDelay: '0.4s' }}
						>
							<CardHeader>
								<CardTitle className='flex items-center'>
									<Clock className='h-5 w-5 mr-2 text-primary' />
									Ish vaqti
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									{workingHours.map((schedule, index) => (
										<div
											key={index}
											className='flex justify-between items-center'
										>
											<span className='text-muted-foreground'>
												{schedule.day}
											</span>
											<span className='font-medium'>{schedule.time}</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						<Card
							className='course-card animate-fade-in'
							style={{ animationDelay: '0.5s' }}
						>
							<CardHeader>
								<CardTitle className='flex items-center'>
									<MapPin className='h-5 w-5 mr-2 text-primary' />
									Manzil
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground mb-3'>
									Buxoro shahri, Kiriti bozor,
								</p>
								<Button variant='outline' className='w-full'>
									Xaritada ko'rish
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Quick Contact */}
				<Card
					className='course-card animate-fade-in bg-gradient-to-r from-blue-50 to-purple-50 border-0'
					style={{ animationDelay: '0.6s' }}
				>
					<CardContent className='p-8 text-center'>
						<h3 className='text-2xl font-bold mb-4'>Tezkor bog'lanish</h3>
						<p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
							Bepul konsultatsiya olish uchun telefon qiling yoki Telegram
							orqali yozing. Mutaxassislarimiz sizga eng mos kursni tanlashda
							yordam berishadi.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
							<Button
								size='lg'
								className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
							>
								<Phone className='mr-2 h-5 w-5' />
								+998 93 656 99 16
							</Button>
							<Button size='lg' variant='outline'>
								<MessageCircle className='mr-2 h-5 w-5' />
								@NUR_carpareshn_com
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

export default Contact
