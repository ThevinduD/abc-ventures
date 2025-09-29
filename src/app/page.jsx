import Body from "../components/Body";
import Contact from "../components/Contact";
import { Playfair_Display } from 'next/font/google';
import { Poppins } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'], // required
  weight: ['400', '700'], // optional: specify the font weights you need
  style: ['normal'], // optional
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose what you need
  style: ['normal'],
});

export default function Home() {
  return (
    <>
      <Body playfair={playfair} poppins={poppins}/>
      <Contact/>
    </>
  );
}
