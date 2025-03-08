import { useEffect } from 'react';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    document.title = "FarmaSETE - Manipulação e Saúde";
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Head>
        <title>FarmaSETE - Manipulação e Saúde</title>
        <meta name="description" content="Farmácia de manipulação especializada em saúde e bem-estar. Conheça nossos produtos e serviços." />
      </Head>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="5516982002524" />
    </div>
  );
};

export default Index;
