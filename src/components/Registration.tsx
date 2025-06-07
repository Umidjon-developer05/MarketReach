import { useState } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Send, CheckCircle } from 'lucide-react'

const Registration = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		course: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const { toast } = useToast()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		const res = await fetch(
			`https://api.telegram.org/bot${
				import.meta.env.VITE_APP_TELEGRAM_API_TOKEN
			}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: 544112161,
					text: `Ism: ${formData.name}
                 Telefon: ${formData.phone}
                 Kurs: ${formData.course}
                 Murojaat: ${formData.message}`,
				}),
			}
		)
		if (res?.ok) {
			setIsSubmitting(false)
			toast({
				title: 'Muvaffaqiyatli yuborildi!',
				description:
					"Tez orada siz bilan bog'lanamiz. Telegram yoki telefon orqali aloqada bo'lamiz.",
			})
			setFormData({ name: '', phone: '', course: '', message: '' })
		}
	}

	const handleInputChange = (field: string, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }))
	}

	return (
		<section className='py-20 bg-muted/50' id='panel'>
			<div className='container mx-auto px-4'>
				<div className='max-w-2xl mx-auto'>
					<div className='text-center mb-12 animate-fade-in'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
								Ro'yxatdan o'ting
							</span>
						</h2>
						<p className='text-xl text-muted-foreground'>
							Kursga ro'yxatdan o'tish uchun quyidagi ma'lumotlarni to'ldiring
						</p>
					</div>

					<Card
						className='course-card animate-fade-in'
						style={{ animationDelay: '0.2s' }}
					>
						<CardHeader>
							<CardTitle className='flex items-center'>
								<CheckCircle className='h-5 w-5 text-primary mr-2' />
								Kursga ro'yxatdan o'tish
							</CardTitle>
							<CardDescription>
								Kursga ro'yxatdan o'tish uchun quyidagi ma'lumotlarni to'ldiring
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='space-y-2'>
									<Label htmlFor='name'>Ism va familiya *</Label>
									<Input
										id='name'
										value={formData.name}
										onChange={e => handleInputChange('name', e.target.value)}
										placeholder='Ismingizni kiriting'
										required
									/>
								</div>

								<div className='space-y-2'>
									<Label htmlFor='phone'>Telefon raqam *</Label>
									<Input
										id='phone'
										type='tel'
										value={formData.phone}
										onChange={e => handleInputChange('phone', e.target.value)}
										placeholder='+998 90 123 45 67'
										required
									/>
								</div>

								<div className='space-y-2'>
									<Label htmlFor='course'>Qiziqtirgan yo'nalish</Label>
									<Select
										value={formData.course}
										onValueChange={value => handleInputChange('course', value)}
									>
										<SelectTrigger>
											<SelectValue placeholder="Yo'nalishni tanlang" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='mobile-design'>
												📱 Mobile Graf Dizayn Kursi
											</SelectItem>
											<SelectItem value='smm'>
												📢 SMM (Ijtimoiy tarmoq marketingi)
											</SelectItem>
											<SelectItem value='programming'>👨‍💻 Dasturlash</SelectItem>
											<SelectItem value='backend-programming'>
												👨‍💻 Backend Dasturlash
											</SelectItem>
											<SelectItem value='seo'>
												🔍 SEO (Qidiruv tizimi optimizatsiyasi)
											</SelectItem>
											<SelectItem value='consultation'>
												💬 Konsultatsiya kerak
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className='space-y-2'>
									<Label htmlFor='message'>Qo'shimcha savol yoki izoh</Label>
									<Textarea
										id='message'
										value={formData.message}
										onChange={e => handleInputChange('message', e.target.value)}
										placeholder='Savollaringizni yoki maqsadlaringizni yozing...'
										rows={4}
									/>
								</div>

								<Button
									type='submit'
									className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3'
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<div className='flex items-center'>
											<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2'></div>
											Yuborilmoqda...
										</div>
									) : (
										<div className='flex items-center'>
											<Send className='mr-2 h-5 w-5' />
											Ma'lumot yuborish
										</div>
									)}
								</Button>

								<p className='text-sm text-muted-foreground text-center'>
									* Majburiy maydonlar. Ma'lumotlaringiz xavfsiz saqlanadi.
								</p>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}

export default Registration
