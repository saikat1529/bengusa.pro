'use client';
import Image from 'next/image';
import ClientLogos from "./components/ClientLogos";
import Featured from './components/Featured';
import { useState } from "react";
import Modal from "./components/Modal"

// import Check from './components/Check';

export default function Home() {
   const [isModalOpen, setModalOpen] = useState(false);

  return (
  <>
<div className="bg-[url('/')] bg-cover bg-center">
      <div className='bg-gradient-to-r from-purple-900 to-slate-900 lg:h-160 h-150 '>
        <p className='pt-40 ml-15 lg:pt-20 lg:ml-100 lg:mt-15 lg:text-3xl text-white text-lg font-medium '>
          Premium Web Design Agency
        </p>
        <p className='pt-5 ml-15 lg:ml-100 text-white lg:text-8xl text-4xl font-bold gap-3'>
          WE GROW <br /> BRANDS  ONLINE
        </p>
        <p className='ml-15 mb-10 pt-4 lg:pt-5 lg:ml-100  text-white text-lg  font-medium '>
          Custom Websites, Brading & Digital Marketing{' '}
        </p>
        <button
         onClick={() => setModalOpen(true)}
          type='button'
          className='cursor-pointer ml-15 lg:ml-100 text-3xl text-black bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 lg:font-medium rounded-sm lg:text-xl px-5 py-2.5 lg:text-center lg:me-2 lg:mb-2'
        >
          Explore All Services
        </button>

         <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          
        <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-sky-400">This Section is not complete yet</h2>
        <p className='text-blue-600 dark:text-sky-400'>Stay connected with us to get the best service</p>
        </Modal>
        <div className='mt-10 flex flex-grid'>
          <div className='ml-15 lg:ml-100 text-white lg:text-xl'>
            5 star design review <br />
            🎇 | ⭐⭐⭐⭐⭐
          </div>
          <p className='ml-4 lg:ml-15 text-white lg:text-xl'>
            Best Digital Agency of 2024 <br />
            Forbes
          </p>
        </div>
        <br/>
      </div>
</div>

<ClientLogos />
      <div className='lg:pt-15 pt-20 bg-gradient-to-r from-slate-900 to-slate-900 text-white lg:h-220 h-375'>
        
        <p className='ml-8 lg:ml-80 lg:mt-8 lg:text-5xl text-4xl font-bold text-center sm:text-left'>
          {' '}
          Creative Web Agency <br /> delivering  Custom Solutions
        </p>
        <p className='pt-8 ml-8 lg:ml-80 lg:mt-8 text-xl font-medium'>
          {' '}
          ✔ Custom Web Design Solutions{' '}
          <span className='text-blue-300'>
            {' '}
            To <br /> Drive Conversions{' '}
          </span>{' '}
        </p>
        <p className='ml-8 lg:ml-80 lg:mt-8 mt-5 text-xl font-medium'>
          {' '}
          ✔ Effective Marketing Campaigns{' '}
          <span className='text-blue-300'>
            {' '}
            To <br /> Generate Growth{' '}
          </span>{' '}
        </p>
        <p className=' ml-8 lg:ml-80 mt-5 text-xl font-medium'>
          {' '}
          ✔ Tailored Branding Strategies{' '}
          <span className='text-blue-300'> <br/> To Drive Engagement </span>{' '}
        </p>
        <p className=' ml-8 lg:ml-80 lg:text-2xl mt-5 text-lg'>
          Digital Silk is a web design company & digital marketing agency
          focused on <br /> growing brands online. We create effective brand
          strategies, custom web design, development, <br /> and digital
          marketing solutions to generate greater brand engagement and
          conversions.
          <br /> We work closely with our clients to ensure each project meets
          their brand guidelines and <br />
          business goals and provide technical and marketing expertise to ensure
          optimal results.
        </p>

        <div  className='ml-10 lg:ml-80 mt-8 text-2xl lg:bg-gradient-to-r from-purple-600 to-slate-900 border-top-left-5'> 
         <div className="flex rounded-lg">
    <video width="320" height="240" controls preload="none">
      <source src="/vid1.mp4" type="video/mp4" />
      <track
        src="/public/vid1.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      <p > See Our Work In action <br />1 minute </p>
    </video>  
      </div>
        </div>

        <Image
          className='mt-10 ml-4 lg:ml-175 rounded-2xl lg:absolute lg:top-220 lg:right-70 '
          src='/images/dummy2.jpg'
          alt='Picture of the author'
          width={350}
          height={300}
        />
      </div>

      <div className='bg-gradient-to-r from-blue-950 to-slate-800 lg:h-70 text-white text-center'>
        <h1 className='pt-8 text-2xl'> OUR WORK</h1>
        <h1 className='pt-2 text-4xl lg:pt-5 lg:text-5xl '>
          Featured Website <span className=''> Design Projects </span>
        </h1>
        <p className='pt-5 lg:pt-5 text-2xl'>
          {' '}
          Custom B2C, B2B and eCommerce solutions <br />
          optimized for traffic, engagement and conversion.
        </p>
      </div>
       <Featured />

      <div className='lg:pt-8 bg-gradient-to-r from-slate-900 to-slate-900 text-white lg:h-190 h-165 text-center'>
        <h5 className='pt-8 text-2xl text-cyan-600'> Clients Across Industries </h5>
        <h1 className='pt-8 text-5xl'>Full-Service Web Design Agency</h1>
        <p className='pt-8 text-2xl'>From startups to Fortune 500 companies,</p>
        <h3 className='pt-3 text-3xl'>
          we create custom solutions that grow brands online
        </h3>
        {/* <div className='mx-auto mt-30 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-20 lg:max-w-none lg:grid-cols-5'>
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg'
            alt='Transistor'
            width='158'
            height='65'
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg'
            alt='Reform'
            width='158'
            height='65'
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg'
            alt='Tuple'
            width='158'
            height='65'
          />
          <Image
            className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg'
            alt='SavvyCal'
            width='158'
            height='65'
          />
          <Image
            className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
            src='https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg'
            alt='Statamic'
            width='158'
            height='65'
          />
        </div> */}
<ClientLogos />
<ClientLogos />
        <button
         onClick={() => setModalOpen(true)}
          type='button'
          className='cursor-pointer mt-6 lg:mt-20 lg:ml-25 lg:text-4xl text-white bg-gradient-to-r from-slate-600 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '
        >
          Explore All Services
        </button>
         <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">This Section is not complete yet</h2>
        <p>Stay connected with us to get the best service</p>
      </Modal>
      </div>
      <div className='h-755 pt-5 lg:h-610 bg-gradient-to-r from-blue-950 to-slate-800 text-white '>
        <div className='scroll-auto ml-10 w-70 lg:w-100 bg-blue-950  lg:mt-8 lg:mr-65 lg:absolute lg:right-0 max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:white-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-120'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='lg:mb-2 lg:text-2xl lg:font-semibold tracking-tight '>
              Custom Web Design
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            Each website we create is meticulously crafted to deliver a 100%
            unique online experience tailored to your brand. Our expert
            designers transform your vision into a dynamic, custom design that
            enhances your brand’s visibility, boosts engagement, and drives
            conversions. With us, your website will not only stand out but also
            connect deeply with your audience.{' '}
          </p>
        </div>
 <br/>
        <div className=' ml-10 w-70 lg:w-100 lg:mt-105 lg:mr-65 lg:absolute lg:right-0 max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-130'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='lg:mb-2 lg:text-2xl lg:font-semibold tracking-tight text-white-900 dark:text-white'>
              Responsive Web Design
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            We deliver seamless user experiences across all devices. Our
            responsive designs adapt flawlessly to any screen size, ensuring
            that your website not only meets but exceeds user expectations. From
            planning to design and development, we ensure a consistent, engaging
            experience for every visitor, no matter how they access your site.
          </p>
        </div>

        <br/>

        <div className='ml-10 w-70 lg:w-100 bg-blue-950 lg:mt-200 lg:mr-65 lg:absolute lg:right-0 max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-130'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='lg:mb-2 lg:text-2xl lg:font-semibold tracking-tight '>
              UX/UI Web Design
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            Our award-winning designers use trusted methods and innovative
            approaches to create engaging visual experiences and seamless user
            journeys. Whether you’re looking to build a custom UX/UI or redesign
            your current one, we’ll enhance your visual identity and ensure your
            website is both aesthetically pleasing and highly functional.
          </p>
        </div>
     <br/>
        <div className='ml-10 w-70 lg:w-100 bg-blue-950 lg:mt-290 lg:mr-65 lg:absolute lg:right-0 max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-130'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='lg:mb-2 lg:text-2xl lg:font-semibold tracking-tight '>
              eCommerce Design & Development
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            We specialize in design and development for leading content
            management systems (CMSs) like Shopify, Magento, and WooCommerce.
            Our experts can help you build and scale your eCommerce website
            across platforms, ensuring a seamless and robust online shopping
            experience for your customers.{' '}
          </p>
        </div>
         <br/>
        <div className='ml-10 w-70 lg:w-100 bg-blue-950 lg:mt-380 lg:mr-65 lg:absolute lg:right-0 max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-130'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='lg:mb-2 lg:text-2xl lg:font-semibold tracking-tight '>
              Website Redesign
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            Whether you need a design refresh or a complete website overhaul, we
            analyze your site’s pain points and opportunities to revitalize your
            digital presence. Our award-winning web designers will breathe new
            life into your website, enhancing its functionality, user
            experience, and aesthetic appeal. The result? A modern, dynamic site
            that drives increased traffic and bolsters your industry reputation.{' '}
          </p>
        </div>
   <br/>
        <div className='ml-10 w-70 lg:w-100 lg:pt-8 bg-blue-950 lg:mt-475 lg:mr-65 lg:absolute lg:right-0 max-w-sm lg:p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-900 transition duration-500 hover:scale-130'>
          <svg
            className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
          </svg>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-semibold tracking-tight '>
              Search Engine Optimization
            </h5>
          </a>
          <p className='mb-3 font-normal '>
            We offer a comprehensive range of services designed to boost your
            website’s ranking and attract organic, non-paid Google search
            traffic. Our team can conduct a thorough SEO audit of your website,
            providing actionable insights and strategies to enhance your organic
            reach and visibility on search engines.
          </p>
        </div>

        <div >
          <div className= "">
          <p className='ml-15 pt-10 lg:pt-6 lg:ml-30 text-3xl text-cyan-600'>
            WHY DIGITAL SILK?
          </p>
          <h1 className=' font-bold mb-6 ml-15 lg:pt-3 lg:ml-30  text-4xl lg:text-6xl'>
            Discover Our <br />
            Expertise as a Web <br />
            Design Company
          </h1>
          <p className='ml-10 pt-5 lg:pt-8 lg:ml-30 text-bold text-md lg:text-2xl'>
            As a full-service web design agency, we handle all <br /> your
            digital needs under one roof. Our custom web <br />
            design services include thorough research and planning, <br />{' '}
            bespoke designs and digital strategies tailored to grow <br /> your
            reach, drive traffic and encourage engagement.
          </p>
          <Image
            className='ml-15 lg:ml-40 mt-8 rounded-xl '
            src='/images/dummy2.jpg'
            alt='Picture of the author'
            width={300}
            height={200}
          />
          </div>

        </div>
        </div>

      <div className=" bg-[url('../../public/images/dummy3.jpg')] bg-cover bg-center w-full lg:h-210 lg:h-185 ">
        <p className='text-center text-2xl pt-8 lg:absolute lg:right-0 lg:mr-30 lg:text-4xl text-white lg:pt-25'>
          From Concept To Market: <br />
          We Engineer Projects{' '}
          <span className='text-blue-400'> For Superior Performance </span>
        </p>
        <p className='text-center text-2xl pt-4 lg:absolute lg:right-0 lg:mr-30 lg:text-xl text-white lg:pt-55'>
          HP needed to implement a global <br /> rewards program We Engineer
          Projects For Superior Performance
        </p>
        <p className='text-center text-3xl pt-5 lg:absolute lg:right-0 lg:mr-100 lg:text-xl text-white lg:pt-75'>
          {' '}
          <span className=' text-blue-400'>In 6 months,</span> we achieved:
        </p>

        <div>
          <p className='text-center text-7xl pt-5 lg:text-9xl text-blue-400 lg:absolute lg:right-0 lg:mr-180 lg:pt-85'>
            40k
          </p>
          <p className=' text-center text-2xl pt-2 text-white lg:absolute lg:right-0 lg:mr-180 lg:pt-120'>
            Active members <br /> inside the program
          </p>
        </div>
        <button
          type='button'
           onClick={() => setModalOpen(true)}
          className='cursor-pointer ml-18 text-xl lg:ml-250 lg:absolute lg:mt-150 text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 lg:font-medium rounded-lg lg:text-xl px-5 py-2.5 lg:text-center lg:me-2 lg:mb-2'
        >
          READ HP CASE STUDY ▶
        </button>
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">This Section is not complete yet</h2>
        <p>Stay connected with us to get the best service</p>
      </Modal>

        <div>
          <p className='text-center text-7xl pt-5 lg:text-9xl text-blue-400 lg:absolute lg:right-0 lg:mr-75 lg:pt-85'>
            56%
          </p>
          <p className='text-center text-2xl pt-2 text-white lg:absolute lg:right-0 lg:mr-75 lg:pt-120 lg:text-xl'>
            of customers are <br /> repeat customers
          </p>
        </div>
        <button
          type='button'
           onClick={() => setModalOpen(true)}
          className='cursor-pointer ml-18 text-xl lg:ml-150 lg:absolute lg:mt-150 text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 lg:font-medium rounded-lg lg:text-xl px-5 py-2.5 lg:text-center lg:me-2 lg:mb-2'
        >
          READ HP CASE STUDY ▶
        </button>
         <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">This Section is not complete yet</h2>
        <p>Stay connected with us to get the best service</p>
      </Modal>

        <div className='bg-cover bg-center relative text-white h-full w-72'>
          <div className='ml-20 h-full w-full px-6 py-10 space-y-10'>
            <div className='flex justify-center mt-10'>
              <Image src='/images/hp.png' alt='HP' width={75} height={10} />
            </div>
            <div className='border-t-4 border-cyan-400 w-full'></div>

            <div className='flex justify-center'>
              <Image
                src='/images/xerox.png'
                alt='Xerox'
                width={75}
                height={10}
              />
            </div>
            <div className='border-t border-white/50 w-full'></div>

            <div className='flex justify-center'>
              <Image src='/images/3.png' alt='doForms' width={75} height={10} />
            </div>
            <div className='border-t border-white/50 w-full'></div>

            <div className='flex justify-center'>
              <Image
                src='/images/field.png'
                alt='FieldEdge'
                width={75}
                height={10}
              />
            </div>
            <div className='border-t border-white/50 w-full'></div>

            <div className='flex justify-center'>
              <Image
                src='/images/miami.gif'
                alt='Miami Country Day School'
                width={75}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='relative bg-gray-900 text-white'>
        <div className='absolute inset-0'>
          <Image
            className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
            src='/public/images/bengusa.png'
            alt='Statamic'
            width='158'
            height='65'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-purple-800 via-transparent to-gray-900 opacity-80'></div>
        </div>

        <div className='relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center'>
          <div className='md:w-1/3 mb-10 md:mb-0'>
            <div className='flex items-center space-x-2'>
              <svg
                className='w-8 h-8 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              ></svg>
              <span className='text-2xl font-semibold'>
                WHAT OUT CLIENT LOVE ABOUT OUR WORK
              </span>
            </div>
          </div>

          <div className='md:w-2/3'>
            <blockquote className='text-lg font-medium leading-relaxed'>
              digital silk is not just a company - they are a team of experts
              who turn visions into digital realities with unparalleled
              expertise, enthusiasm, and creativeness.{' '}
            </blockquote>
            <div className='mt-6'>
              <p className='font-semibold'>Judith Black</p>
              <p className='text-gray-300'>CEO of Workcation</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[url('../../public/images/dummy3.jpg')] bg-cover bg-center w-full h-255 lg:h-200">
        <div className='text-white justify-center text-center text-bold'>
          <p className='text-4xl pt-5'>
            Custom Web Design Pricing For{' '}
            <span className='text-cyan-600'>Each Client’s Objectives </span>
          </p>
          <p className='pt-5 text-2xl'>
            Every website design project comes with unique challenges and
            specific requirements <br /> that influence its final cost. A simple
            project typically ranges from <br /> $25,000 to $30,000, while more
            complex endeavors can reach $50,000 to $60,000 or more. <br />{' '}
            <br />
            The technical setup of your website, which directly impacts its
            performance, is a key <br /> factor in determining cost. More
            complex setups that demand significant time and effort <br /> will
            naturally increase the overall price.
          </p>
        </div>
        <br/>
        <button
          type='button'
           onClick={() => setModalOpen(true)}
          className='cursor-pointer ml-30 lg:ml-160 lg:text-4xl text-white font-bold hover:text-cyan-600 py-2 px-4 border border-white-500 rounded-2xl'
        >
          CALCULATE YOUR WEBSITE
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">This Section is not complete yet</h2>
        <p>Stay connected with us to get the best service</p>
      </Modal>
        <div className='ml-5 mt-16 text-white lg:ml-15 rounded-xl'>
          <div className=' flex gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-20 lg:max-w-none lg:grid-cols-4'>
            <p className='text-white text-sm lg:text-xl '>
              <span className='text-md lg:text-2xl text-blue-400 lg:text-center '>
                Your choice of platform {' '} <br/> 
              </span>
              also plays a role in the cost. 
              Templated solutions are more
               affordable while developing a  fully custom site will
              increase the  project’s total expense.
            </p>

            <p className='text-white text-sm lg:text-xl  lg:ml-40'>
              <span className='text-md lg:text-2xl text-blue-400'>
                Your choice of platform {' '} <br/> 
                Custom graphic  elements {' '} 
              </span>
              are essential for enhancing your 
              web presence. However, the more
               complex the design requirements,
               fully custom site will increase the 
              the higher the overall cost.
            </p>
            <p className='text-white text-sm lg:text-xl  lg:ml-40'>
              <span className='text-md lg:text-2xl text-blue-400'>
                After launching 
                Your choice of platform {' '} 
                your new website {' '} <br/>
              </span>
              to outperform competitors in
               affordable while developing a  search engine rankings
              and  secure top positions in your  industry.
            </p>
            <p className='text-white text-sm lg:text-xl lg:ml-40'>
              <span className='text-md lg:text-2xl text-blue-400'>
                Your choice of  platform {' '}
              </span>
              also plays a role in the cost. 
              Templated solutions are more
               affordable while developing a  fully custom site will
              increase the  project’s total expense.
            </p>
            <p className=''>
              <span className=''></span>
            </p>
          </div>
        </div>
      </div>

      <main className="bg-[#f2f6fe] py-16 px-4 sm:px-10 text-[#1a1a1a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h3 className="text-sm font-semibold text-blue-700 uppercase mb-2 tracking-wider">
            Finding & Working With The
          </h3>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Best Web Design Agency
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-6">
          <p className="text-lg font-semibold text-blue-600 leading-relaxed">
            Whether starting a brand from the ground up or overhauling your
            current website, working with a website design agency gives you
            access to the top experts in web design.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            In turn, these experts have access to leading tools, modern
            trends, best practices and more to help ensure that your website
            is not only unique but built to perform — if you find the right
            agency, that is. Not all agencies are created equal.
            <br />
            <br />
            We’ll breakdown exactly what to look for in a partner to help you
            choose the best website design agency for your project.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white mt-12 shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-blue-600">
            <li>▸ How To Find The Best Web Design Company</li>
            <li>▸ Step 1: Define Your Needs</li>
            <li>▸ Step 2: Start Your Search</li>
            <li>▸ Step 3: Research & Shortlist Agencies</li>
            <li>▸ Step 4: Meet With The Agency(s)</li>
            <li>▸ Step 5: Make Your Decision</li>
            <li>▸ Why Digital Silk Is The Best Web Design Agency For Your Project</li>
          </ul>
        </div>

        {/* Section below Table of Contents */}
        <div className="mt-12 text-gray-800">
          <p className="text-base mb-4">
            Whether you’re starting a brand from the ground up or your current
            website needs a complete overhaul due to lack of performance, working
            with a website design agency gives you{" "}
            <span className="font-semibold">
              access to the top experts in web design.
            </span>
          </p>
          <p className="text-base mb-4">
            In turn, these experts have access to{" "}
            <span className="font-semibold">
              leading tools, modern trends, best practices
            </span>{" "}
            and more to help ensure that your website is not only unique but
            built to perform — if you find the right agency, that is. Not all
            agencies are created equal.
          </p>
          <p className="text-base mb-6">
            We’ll breakdown exactly what to look for in a partner to help you
            choose the best website design agency for your project.
          </p>
          <h2 className="text-2xl font-bold text-blue-800 mb-2">
            How To Find The Best Web Design Company
          </h2>
          <p className="text-base">
            Follow the step-by-step guide below to kickstart your search and
            learn how to evaluate potential web design companies to partner with
            your brand.
          </p>
        </div>
      </div>
    </main>

<section className="bg-white text-gray-800 py-12 px-4 sm:px-10 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
        How To Find The Best Web Design Company
      </h2>
      <p className="mb-6 text-base">
        Follow the step-by-step guide below to kickstart your search and learn
        how to evaluate potential web design companies to partner with your brand.
      </p>

      {/* Step 1 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Step 1: Define Your Needs</h3>
        <p className="mb-4">
          Before you start the hunt, the first step is to fully define your needs. Here are key areas to consider:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Design needs:</strong> Are you looking to build a new website from the ground up? Or do you have a current digital presence that needs either a light refresh or a complete overhaul?
          </li>
          <li>
            <strong>Design approach:</strong> Are you satisfied to settle for an agency that works with templates or do you need an agency that designs custom websites?
          </li>
          <li>
            <strong>Website goals:</strong> What are your specific goals for the website? For example: higher search engine ranking, more traffic, greater engagement, increased conversions.
          </li>
          <li>
            <strong>Website requirements:</strong> What are your specific requirements for the website? Do you have a platform in mind?
          </li>
        </ul>
        <p className="mb-2">
          Creating a <span className="font-semibold">website request for proposal (RFP)</span> document can help you organize and outline your project for potential agencies.
        </p>
      </div>

      {/* Step 2 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Step 2: Start Your Search</h3>
        <p>
          The best way to find an agency for your digital project is, of course, online! Use a search engine or check out a B2B marketplace like <span className="text-blue-600 font-medium">DesignRush</span> — you can actually post your RFP here and wait for a bid, or search agencies and reach out to a few on your own.
        </p>
      </div>

      {/* Step 3 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Step 3: Research & Shortlist Agencies</h3>
        <p className="mb-4">
          Whether you use a marketplace or Google to find potential partners, the next step is thorough research. For each agency you’re interested in, explore the agency’s:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Website:</strong> For an agency that you’re considering partnering with, a professional website design is a must.
          </li>
          <li>
            <strong>Services:</strong> Some agencies focus on niche areas like web design or branding, while full-service agencies offer an entire scope of digital services.
          </li>
          <li>
            <strong>Portfolio:</strong> Any reputable agency will have a <span className="font-medium">digital portfolio</span> easily accessible and available for potential clients to view.
          </li>
          <li>
            <strong>Client testimonials:</strong> Get a feel for what it’s like to work with the agency through testimonials.
          </li>
        </ul>
        <p>
          Shortlist agencies based on these factors and create a list of 3–5 agencies to set up a meeting with — which brings us to the next step!
        </p>
      </div>

      {/* Step 4 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Step 4: Meet With The Agency(s)</h3>
        <p className="mb-4">
          Meeting with your potential partner, whether in person or digitally, allows you to get to know the team members who will be working on your project and ask questions about what the agency’s processes look like behind the scenes.
        </p>
        <p className="mb-2">Some questions to ask when hiring a professional web design agency include:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>What sets you apart from other agencies?</li>
          <li>What digital services do you offer in addition to web design?</li>
          <li>Do you have experience working with clients in my industry?</li>
          <li>What does your website design process look like?</li>
          <li>What does your website development process look like?</li>
          <li>Who are the team members that will be working on my project?</li>
          <li>Will you provide recommendations and ideas for my site?</li>
          <li>What will our partnership look like in terms of communication and project updates?</li>
          <li>How much will my project cost and how long will it take to complete?</li>
          <li>How do you measure results?</li>
        </ul>
        <p className='lg:mt-10 lg:text-2xl'>These questions will help give you an inside look into the experience of the agency’s team members, the <br/>value that the agency offers and what your relationship with the agency will look like throughout the life of <br/> your  partnership — all important factors to consider when choosing the best web design agency for your project.</p>
      </div>
    </section>

<section className="bg-white text-gray-800 py-12 px-4 sm:px-10 max-w-5xl mx-auto">
      {/* Step 5 */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Step 5: Make Your Decision</h3>
        <p className="mb-4">
          Finally, it’s time to choose the best company for the job. Base your decision on your interview(s), the team members you met and the information you gathered.
        </p>
        <p>
          From their portfolio of past projects to the way they handle partnerships and measure success, the right company will be one that offers a team of experts, project ownership and complete transparency throughout your project.
        </p>
      </div>

      {/* Why Digital Silk */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">
          Why Digital Silk Is The Best Web Design Agency For Your Project
        </h3>
        <p className="mb-4">
          Whether you need a brand-new website or a redesign, Digital Silk is a leading full-service web design agency comprised of trusted website design experts.
        </p>

        <p className="mb-4 font-medium">What does Digital Silk offer that other agencies don’t?</p>

        <ul className="list-disc list-inside space-y-3 mb-6">
          <li>
            <span className="font-bold">Project ownership:</span> We value every client relationship and the opportunity to help clients establish or grow their online presence. That’s why we treat every project as our own, with meticulous project management, time tracking and calendars to make sure we’re delivering on time and on budget.
          </li>
          <li>
            <span className="font-bold">Expert guidance:</span> Our team is made up of award-winning designers as well as top developers, branding experts, marketing professionals, leading strategists and more. Throughout your project, our team will be hands-on and offer guidance and recommendations at every turn.
          </li>
          <li>
            <span className="font-bold">Transparency:</span> We offer complete transparency throughout every client relationship, from our first meeting through project completion. You’ll receive regular reports and updates on exactly where your project is at, from your timeline to your budget.
          </li>
          <li>
            <span className="font-bold">Results:</span> Every recommendation we make is strategic, based on thorough research, extensive experience and industry best practices. We deliver projects that drive measurable results, including increases in search engine ranking, traffic, engagement and conversion.
          </li>
        </ul>

        <p className="mb-3">
          If you’re looking for a reliable web design team that will deliver a{" "}
          <span className="font-semibold">custom website</span> that’s unique to your brand identity,
          your offering and your target market, you’ve found your match in Digital Silk.
        </p>

        <p className="mb-3">
          Our trusted web design experts work with brands across industries to deliver fully custom website projects,
          from web design and development to website strategy, content creation and more.
        </p>

        <p>
          Schedule a consultation to meet our team and get a custom quote for your project.
        </p>
      </div>
    </section>

      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='mx-auto max-w-screen-md sm:text-center'>
            <h2 className='mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white'>
              Sign up to get websites
            </h2>
            <p className='mx-auto mb-8 max-w-2xl font-light text-gray-600 md:mb-12 sm:text-xl dark:text-gray-600 text-2xl'>
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action='#'>
              <div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
                <div className='relative w-full'>
                  <label
                    htmlFor='email'
                    className='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Email address
                  </label>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <svg
                      className='w-5 h-5 text-gray-500 dark:text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                    </svg>
                  </div>
                  <a
                    className='block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    placeholder='Enter your email'
                    type='email'
                    id='email'
                    required=''
                  ></a>
                </div>
                <div>
                  <button
                    type='submit'
                    className='py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className='mx-auto max-w-screen-sm text-lg text-left text-gray-500 newsletter-form-footer dark:text-gray-300'>
                We care about the protection of your data.{' '}
                <a
                  href='#'
                  className='font-medium text-primary-600 dark:text-primary-500 hover:underline'
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <h2 className='mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Frequently asked questions
          </h2>
          <div className='grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2'>
            <div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  What do you mean by "Figma assets"?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  You will have access to download the full Figma project
                  including all of the pages, the components, responsive pages,
                  and also the icons, illustrations, and images included in the
                  screens.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  What does "lifetime access" exactly mean?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Once you have purchased either the design, code, or both
                  packages, you will have access to all of the future updates
                  based on the roadmap, free of charge.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  How does support work?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  We're aware of the importance of well qualified support, that
                  is why we decided that support will only be provided by the
                  authors that actually worked on this project.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Feel free to{' '}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                    target='_blank'
                    rel='noreferrer'
                  >
                    contact us
                  </a>{' '}
                  and we'll help you out as soon as we can.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  I want to build more than one project. Is that allowed?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  You can use Windster for an unlimited amount of projects,
                  whether it's a personal website, a SaaS app, or a website for
                  a client. As long as you don't build a product that will
                  directly compete with Windster either as a UI kit, theme, or
                  template, it's fine.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Find out more information by{' '}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
            <div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  What does "free updates" include?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  The free updates that will be provided is based on the{' '}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                  >
                    roadmap
                  </a>{' '}
                  that we have laid out for this project. It is also possible
                  that we will provide extra updates outside of the roadmap as
                  well.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  What does the free version include?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  The{' '}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                  >
                    free version
                  </a>{' '}
                  of Windster includes a minimal style guidelines, component
                  variants, and a dashboard page with the mobile version
                  alongside it.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  You can use this version for any purposes, because it is
                  open-source under the MIT license.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  What is the difference between Windster and Tailwind UI?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Although both Windster and Tailwind UI are built for
                  integration with Tailwind CSS, the main difference is in the
                  design, the pages, the extra components and UI elements that
                  Windster includes.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Additionally, Windster is a project that is still in
                  development, and later it will include both the application,
                  marketing, and e-commerce UI interfaces.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                  <svg
                    className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Can I use Windster in open-source projects?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Generally, it is accepted to use Windster in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to Windster itself.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Find out more information by{' '}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
<section className="bg-gradient-to-br from-[#043b75] via-[#131540] to-[#0e0f2c] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Headline */}
        <h2 className="text-2xl font-bold text-center md:text-left">
          Sign Up To Get The <br /> Latest Digital Trends
        </h2>

        {/* Email Input Box */}
        <div className="relative w-full max-w-md">
          <div className="flex items-center border border-white/30">
            <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-600 rotate-45 ml-2 mr-2"></div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 bg-transparent text-white placeholder-white/70 py-3 px-2 focus:outline-none"
            />
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2">
              SIGN UP
            </button>
          </div>
        </div>

      </div>
    </section>

       <section className="bg-gradient-to-br from-[#0c0c39] via-[#1b0f49] to-[#00325e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <section/>
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Start A Conversation With Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name*" className="w-full px-4 py-3 bg-transparent border-b border-gray-500 focus:outline-none" />
            <input type="text" placeholder="Company Name*" className="w-full px-4 py-3 bg-transparent border-b border-gray-500 focus:outline-none" />
            <input type="email" placeholder="Email*" className="w-full px-4 py-3 bg-transparent border-b border-gray-500 focus:outline-none" />
            <input type="tel" placeholder="Phone*" className="w-full px-4 py-3 bg-transparent border-b border-gray-500 focus:outline-none" />
            <textarea placeholder="Your Message*" rows={4} className="w-full px-4 py-3 bg-transparent border-b border-gray-500 focus:outline-none resize-none" />
            <button
              type="submit"
              onClick={() => setModalOpen(true)}
              className="ml-30 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded text-white hover:opacity-90 transition"
            >
              SUBMIT →
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">This Section is not complete yet</h2>
        <p>Stay connected with us to get the best service</p>
      </Modal>
          </form>
        </div>
      </div>

      {/* Bottom Tagline and Social Icons */}
      <div className=" to-purple-600 mt-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left ">
        <div>
          <p className="text-sm uppercase text-gray-300">Take the silk road to</p>
          <h3 className="text-2xl font-bold text-cyan-400">Digitizing Your Business Growth</h3>
        </div>
        <div className="flex items-center gap-4 text-white">
          <span className="text-sm font-medium">Follow Us</span>
          <a href="#" className="text-xl"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-xl"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>
    </>
  );
}
