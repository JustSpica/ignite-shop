import type { AppProps } from 'next/app'
import Image from 'next/image';

import logoImage from '@/assets/logo.svg';

import { MainContainer, Header } from '@/styles/pages/app';
import { globalStyles } from '@/styles/global'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Header>
        <Image src={logoImage} alt="" />
      </Header>
      <Component {...pageProps} />
    </MainContainer>
  )
}
