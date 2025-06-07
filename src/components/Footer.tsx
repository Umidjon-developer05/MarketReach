import {
	GraduationCap,
	Heart,
	Phone,
	MessageCircle,
	Instagram,
	Mail,
} from 'lucide-react'

const Footer = () => {
	return (
		<footer className='bg-primary/5 border-t'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Brand */}
					<div className='animate-fade-in'>
						<div className='flex items-center space-x-2 mb-4'>
							<GraduationCap className='h-8 w-8 text-primary animate-pulse-glow' />
							<span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
								MarketReach
							</span>
						</div>
						<p className='text-muted-foreground mb-4'>
							IT sohasidagi eng so'nggi bilimlar va amaliy ko'nikmalarni
							o'rgatuvchi zamonaviy ta'lim markazi.
						</p>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors'
							>
								<Instagram className='h-5 w-5' />
							</a>
							<a
								href='#'
								className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors'
							>
								<MessageCircle className='h-5 w-5' />
							</a>
							<a
								href='#'
								className='w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors'
							>
								<Mail className='h-5 w-5' />
							</a>
						</div>
					</div>

					{/* Courses */}
					<div className='animate-fade-in' style={{ animationDelay: '0.1s' }}>
						<h3 className='font-semibold text-lg mb-4'>Yo'nalishlar</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									📱 Mobil Grafik Dizayn
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									📢 SMM Marketing
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									👨‍💻 Dasturlash
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									🔍 SEO
								</a>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div className='animate-fade-in' style={{ animationDelay: '0.2s' }}>
						<h3 className='font-semibold text-lg mb-4'>Tezkor havolalar</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='#courses'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Kurslar
								</a>
							</li>
							<li>
								<a
									href='#teachers'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									O'qituvchilar
								</a>
							</li>
							<li>
								<a
									href='#about'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Haqimizda
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='text-muted-foreground hover:text-primary transition-colors'
								>
									Kontakt
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div className='animate-fade-in' style={{ animationDelay: '0.3s' }}>
						<h3 className='font-semibold text-lg mb-4'>Bog'lanish</h3>
						<div className='space-y-3'>
							<div className='flex items-center text-muted-foreground'>
								<Phone className='h-4 w-4 mr-2' />
								<span> +998 93 656 99 16</span>
							</div>
							<div className='flex items-center text-muted-foreground'>
								<MessageCircle className='h-4 w-4 mr-2' />
								<span>@NUR_carpareshn_com</span>
							</div>
							<div className='flex items-center text-muted-foreground'>
								<Mail className='h-4 w-4 mr-2' />
								<span>shamshodnurmurodov119@gmail.com</span>
							</div>
						</div>
					</div>
				</div>

				<div
					className='border-t mt-8 pt-8 text-center animate-fade-in'
					style={{ animationDelay: '0.4s' }}
				>
					<p className='text-muted-foreground flex items-center justify-center'>
						© 2024 Kursxona. Barcha huquqlar himoyalangan.
						<Heart className='h-4 w-4 mx-2 text-red-500' />
						bilan yaratilgan.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
