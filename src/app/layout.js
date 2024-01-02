import './globals.css'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'TasksBoard | Desktop app for Google Tasks',
  description: 'A failed attempt by Kucci.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={'bg-[#1f2024] bg-no-repeat select-none ' + roboto.className}>{children}</body>
    </html>
  )
}