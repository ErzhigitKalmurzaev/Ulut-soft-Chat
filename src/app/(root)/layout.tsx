import Header from '@/components/main/Header'
import Navbar from '@/components/main/Navbar'
import { ReactNode } from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className='w-full flex min-h-dvh flex-row'>
			<div className='w-1/5 min-h-dvh'>
                <Navbar/>
            </div>
            <div className='w-full flex flex-col'>
                <Header />
                <main className='flex h-full flex-col'>
                    {children}
                </main>
            </div>
		</div>
	)
}