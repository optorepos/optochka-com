import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from './../components/Navbar';
import { useRouter } from 'next/router';

const pagesWithoutNavbar = ['/'];
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (pagesWithoutNavbar.includes(router.pathname)) {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    );
  }
}
