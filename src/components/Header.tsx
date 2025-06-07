import { useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<div className='flex items-center space-x-2 animate-slide-in-left'>
						<GraduationCap className='h-8 w-8 text-primary animate-pulse-glow' />
						<span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
							MarketReach
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center space-x-8'>
						<a
							href='#courses'
							className='text-foreground hover:text-primary transition-colors'
						>
							Kurslar
						</a>
						<a
							href='#teachers'
							className='text-foreground hover:text-primary transition-colors'
						>
							O'qituvchilar
						</a>
						<a
							href='#about'
							className='text-foreground hover:text-primary transition-colors'
						>
							Haqimizda
						</a>
						<a
							href='#contact'
							className='text-foreground hover:text-primary transition-colors'
						>
							Kontakt
						</a>
						<a href='#panel'>
							<Button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'>
								Ro'yxatdan o'tish
							</Button>
						</a>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className='md:hidden p-2 rounded-lg hover:bg-accent'
					>
						{isMenuOpen ? (
							<X className='h-6 w-6' />
						) : (
							<Menu className='h-6 w-6' />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden py-4 animate-fade-in'>
						<nav className='flex flex-col space-y-4'>
							<a
								href='#courses'
								className='py-2 hover:text-primary transition-colors'
							>
								Kurslar
							</a>
							<a
								href='#teachers'
								className='py-2 hover:text-primary transition-colors'
							>
								O'qituvchilar
							</a>
							<a
								href='#about'
								className='py-2 hover:text-primary transition-colors'
							>
								Haqimizda
							</a>
							<a
								href='#contact'
								className='py-2 hover:text-primary transition-colors'
							>
								Kontakt
							</a>
							<a href='#panel'>
								<Button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full'>
									Ro'yxatdan o'tish
								</Button>
							</a>
						</nav>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
