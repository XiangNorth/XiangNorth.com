import type { AppProps } from 'next/app'
import { Container, NextUIProvider } from '@nextui-org/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Container>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </NextUIProvider>
  );
}

export default MyApp
