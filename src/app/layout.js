import './globals.css'
import { Inter } from 'next/font/google'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CssBaseline/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
