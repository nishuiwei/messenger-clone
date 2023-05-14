import './globals.css'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Messenger Clone',
	description: 'Messenger Clone',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToasterContext />
				{children}
			</body>
		</html>
	)
}
