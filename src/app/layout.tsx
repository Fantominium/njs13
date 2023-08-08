import Navigation from '@/components/Navigation/page'
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { ApolloWrapper } from '@/lib/apollo-provider';
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/page'

const inter = Inter({ subsets: ['latin'] })
export const revalidate = 5;
const query = gql`query Now {
    now(id: "1")
}`;

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = getClient();
  const { data } = await client.query({ query });
  console.log(data.now, " gql call")

  return (
    <html lang="en" data-theme="myTheme">
      <body className={inter.className}>
      <Navigation/>
      <ApolloWrapper>
        {children}
        </ApolloWrapper>
        <Footer/>
        </body>
    </html>
  )
}
