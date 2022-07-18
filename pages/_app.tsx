import type { AppProps } from 'next/app'
import { Container, NextUIProvider } from '@nextui-org/react';
import NavBar from '../components/navBar';
import FooterText from '../components/footerText';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NavBar />
      <Container sm>
        <Component {...pageProps} />
        <FooterText />
      </Container>
    </NextUIProvider>
  );
}

export default MyApp
