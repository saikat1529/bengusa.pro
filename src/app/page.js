'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      
      <div className=" bg-[url('../../public/images/dummy1.jpg')] bg-cover bg-center w-full h-180">
      <p className='pt-8 ml-40 mt-8 text-white text-2xl  font-bold '>
             Premium Web Design Agency
        </p>
        <p className=' ml-40 text-white text-8xl font-bold  '>
          WE GROW BRANDS <br /> ONLINE
        </p>
        <p className='pt-5 ml-40  text-white text-2xl  font-bold '>
          Custom Websites, Brading & Digital Marketing{' '}
        </p>
        <button
          type='button'
          className=' ml-40 mt-5 text-5xl text-white font-semibold hover:text-amber-300 py-2 px-4 border border-white-500 rounded'
        >
          REQUEST A QUOTE
        </button>
        <div className='flex flex-grid'>
          <div className='pt-8 ml-40 mt-8 text-white text-4xl'>
            5 star design review <br /> 🎇 | ⭐⭐⭐⭐⭐
          </div>
          <p className='pt-8 ml-40 mt-8 text-white text-4xl'>
            Best Digital Agency of 2024 <br />
            Forbes
          </p>
        </div>
      </div>

      <div className='pt-8  background  bg-blue-950 text-white h-190'>
        <p className=' ml-40 mt-8 text-6xl'>
          {' '}
          Creative Web Agency delivering <br /> Custom Solutions
        </p>
        <p className=' ml-40 mt-8 text-3xl'>
          {' '}
          ✔Custom Web Design Solutions{' '}
          <span className='text-blue-300'> To Drive Conversions </span>{' '}
        </p>
        <p className=' ml-40 mt-8 text-3xl'>
          {' '}
          ✔Effective Marketing Campaigns{' '}
          <span className='text-blue-300'> To Generate Growth </span>{' '}
        </p>
        <p className=' ml-40 mt-8 text-3xl'>
          {' '}
          ✔Tailored Branding Strategies{' '}
          <span className='text-blue-300'> To Drive Engagement </span>{' '}
        </p>
        <p className=' ml-40 mt-8 text-2xl'>
          Digital Silk is a web design company & digital marketing agency
          focused on <br /> growing brands online. We create effective brand
          strategies, custom web design, development, <br /> and digital
          marketing solutions to generate greater brand engagement and
          conversions
          <br />. We work closely with our clients to ensure each project meets
          their brand guidelines and <br />
          business goals and provide technical and marketing expertise to ensure
          optimal results.
        </p>

        <p className='ml-60 mt-8 text-3xl bg-purple-500'>
          See Our Work In action <br />1 minute
        </p>
        <Image
          className='rounded-2xl absolute top-200 right-40 '
          src='/images/dummy2.jpg'
          alt='Picture of the author'
          width={500}
          height={300}
        />
      </div>

      <div className='bg-blue-900 h-150 text-white text-center'>
        <h1 className='pt-8 text-3xl'> Our Work</h1>
        <h1 className='pt- text-6xl'>Featured Website Design Projects</h1>
        <p className='pt-5 text-3xl'>
          {' '}
          Custom B2C, B2B and eCommerce solutions <br />
          optimized for traffic, engagement and conversion.
        </p>
      </div>

      <div className='pt-8 bg-blue-950 text-white h-190 text-center'>
        <h5 className='pt-8 text-3xl'> Clients Across Industries </h5>
        <h1 className='pt-8 text-6xl'>Full-Service Web Design Agency</h1>
        <p className='pt-8 text-3xl'>From startups to Fortune 500 companies,</p>
        <h3 className='pt-3 text-4xl'>
          we create custom solutions that grow brands online
        </h3>
        <div className='mx-auto mt-30 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
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
        </div>

        <button
          type='button'
          className= 'mt-20 ml-25 text-5xl text-white font-semibold hover:text-amber-300 py-2 px-4 border border-white-500 rounded-2xl'
        >
          Explore All Services
        </button>
        
  </div>

  <div className=' h-550 bg-blue-900 text-white  '>

  <div className=" bg-blue-950 mt-10 mr-65 absolute right-0 max-w-sm p-6 e border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight ">Custom Web Design</h5>
    </a>
    <p className="mb-3 font-normal ">Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brand’s visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience. </p>
</div>

  <div className="bg-blue-950 mt-100 mr-65 absolute right-0 max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white-900 dark:text-white">Responsive Web Design</h5>
    </a>
    <p className="mb-3 font-normal ">We deliver seamless user experiences across all devices. Our responsive designs adapt flawlessly to any screen size, ensuring that your website not only meets but exceeds user expectations. From planning to design and development, we ensure a consistent, engaging experience for every visitor, no matter how they access your site.</p> 
   </div>


<div className="bg-blue-950 text-white mt-275 mr-65 absolute right-0 max-w-sm p-6  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight ">UX/UI Web Design</h5>
    </a>
    <p className="mb-3 font-normal ">Our award-winning designers use trusted methods and innovative approaches to create engaging visual experiences and seamless user journeys. Whether you’re looking to build a custom UX/UI or redesign your current one, we’ll enhance your visual identity and ensure your website is both aesthetically pleasing and highly functional.</p>
</div>


<div className="bg-blue-950 text-white mt-190 mr-65 absolute right-0 max-w-sm p-6  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight ">eCommerce Design & Development</h5>
    </a>
    <p className="mb-3 font-normal ">We specialize in design and development for leading content management systems (CMSs) like Shopify, Magento, and WooCommerce. Our experts can help you build and scale your eCommerce website across platforms, ensuring a seamless and robust online shopping experience for your customers. </p>
</div>


<div className="bg-blue-950 text-white mt-365 mr-65 absolute right-0 max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight ">Website Redesign</h5>
    </a>
    <p className="mb-3 font-normal ">Whether you need a design refresh or a complete website overhaul, we analyze your site’s pain points and opportunities to revitalize your digital presence. Our award-winning web designers will breathe new life into your website, enhancing its functionality, user experience, and aesthetic appeal. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation. </p>
</div>




<div className="bg-blue-950 text-white mt-462 mr-65 absolute right-0 max-w-sm p-6  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight ">Search Engine Optimization</h5>
    </a>
    <p className="mb-3 font-normal ">We offer a comprehensive range of services designed to boost your website’s ranking and attract organic, non-paid Google search traffic. Our team can conduct a thorough SEO audit of your website, providing actionable insights and strategies to enhance your organic reach and visibility on search engines.</p>
</div>


<div>
    <p className='pt-150 ml-40  text-3xl text-blue-300'>WHY DIGITAL SILK?</p>
    <h1 className=' pt-3 ml-40  text-6xl'>Discover Our <br/>Expertise as a Web <br/>Design Company</h1>
    <p className=' pt-8 ml-40  text-2xl'>As a full-service web design agency, we handle all your digital <br/>needs under one roof. Our custom web 
            design services include <br/>thorough research and planning, bespoke designs and digital <br/>strategies tailored to grow your reach, drive 
            traffic and <br/>encourage engagement.</p>
            <Image
          className=' ml-40 mt-8 rounded-xl'
          src='/images/dummy2.jpg'
          alt='Picture of the author'
          width={500}
          height={300}
        />
  </div>
  </div>

  <div className=" bg-[url('../../public/images/dummy3.jpg')] bg-cover bg-center w-full h-180">
    <p className='absolute right-0 mr-30 text-4xl text-white pt-25'>From Concept To Market: <br/>
    We Engineer Projects <span className='text-blue-400'> For Superior Performance </span></p>
    <p className='absolute right-0 mr-30 text-xl text-white pt-75'>HP needed to implement a global  <br/> rewards program
    We Engineer Projects For Superior Performance</p>
    <p className='absolute right-0 mr-100 text-xl text-white pt-95'> <span className='text-blue-400'>In 6 months,</span> we achieved:</p>
  
  <div>
    <p className='text-9xl text-blue-400 absolute right-0 mr-180 pt-100'>40k</p>
    <p className=' text-white absolute right-0 mr-180 pt-135'>active members <br/> inside the program</p>
  </div>
  <div>
    <p className='text-9xl text-blue-400 absolute right-0 mr-75 pt-100'>56%</p>
    <p className=' text-white absolute right-0 mr-75 pt-135'>of customers are <br/> repeat customers</p>
  </div>

  <div className="bg-cover bg-center relative text-white h-full w-72" >
  <div className="ml-20 h-full w-full px-6 py-10 space-y-10">
    <div className="flex justify-center mt-10">
      <Image src="/images/hp.png" alt="HP"  width={75} height={10}/>
    </div>
    <div className="border-t-4 border-cyan-400 w-full"></div>

    <div className="flex justify-center">
      <Image src="/images/xerox.png" alt="Xerox" width={75} height={10}/>
    </div>
    <div className="border-t border-white/50 w-full"></div>

    <div className="flex justify-center">
      <Image src="/images/3.png" alt="doForms" width={75} height={10}/>
    </div>
    <div className="border-t border-white/50 w-full"></div>

    <div className="flex justify-center">
      <Image src="/images/field.png" alt="FieldEdge" width={75} height={10}/>
    </div>
    <div className="border-t border-white/50 w-full"></div>

    <div className="flex justify-center">
      <Image src="/images/miami.gif" alt="Miami Country Day School" width={75} height={10}/>
    </div>
  </div>
</div>
  </div>

  <div className="relative bg-gray-900 text-white">
  
  <div className="absolute inset-0">
  <Image className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' src='/public/images/bengusa.png' alt='Statamic' width='158' height='65'/>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-transparent to-gray-900 opacity-80"></div>
  </div>

 
  <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
    
    <div className="md:w-1/3 mb-10 md:mb-0">
      <div className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"></svg>
        <span className="text-2xl font-semibold">WHAT OUT CLIENT LOVE ABOUT OUR WORK</span>
      </div>
    </div>

   
    <div className="md:w-2/3">
      <blockquote className="text-lg font-medium leading-relaxed">
        digital silk is not just a company - they are a team of experts who turn visions into digital realities with unparalleled expertise, enthusiasm, and creativeness.     </blockquote>
      <div className="mt-6">
        <p className="font-semibold">Judith Black</p>
        <p className="text-gray-300">CEO of Workcation</p>
      </div>
    </div>
  </div>
</div>

<div className=" bg-[url('../../public/images/dummy1.jpg')] bg-cover bg-center w-full h-200">
<div className='text-white justify-center text-center text-bold'>
   <p className='text-6xl pt-5'>Custom Web Design Pricing For <span className='text-amber-300'>Each Client’s <br/> Objectives </span></p>
   <p className='pt-5 text-3xl'>Every website design project comes with unique challenges and specific requirements <br/> that influence its final cost. 
    A simple project typically ranges from  <br/> $25,000 to $30,000, while more complex endeavors can reach $50,000 to $60,000 or more.  <br/> <br/>
The technical setup of your website, which directly impacts its performance, is a key  <br/> factor in determining cost. More complex setups
 that demand significant time and effort <br/> will naturally increase the overall price.</p>
 </div>
 <button
          type='button'
          className= ' ml-150 mt-10 text-5xl text-white font-semibold hover:text-amber-300 py-2 px-4 border border-white-500 rounded-2xl'>
           CALCULATE YOUR WEBSITE
        </button>
<div className=' text-white ml-35 rounded-xl'>
  <div className=' flex'>
    <p className='text-white text-xl '><span className='text-3xl'>Your choice of  <br/> platform <br/> </span>also plays a role in the cost. <br/>Templated solutions are more<br/> affordable while developing a <br/> fully custom site will increase the <br/> project’s total expense.</p>
    <p className='text-white text-xl ml-40'><span className='text-3xl'>Custom graphic  <br/> elements <br/> </span>are essential for enhancing your <br/>web presence. However, the more<br/> complex the design requirements,<br/> fully custom site will increase the <br/>the higher the overall cost.</p>
    <p className='text-white text-xl ml-40'><span className='text-3xl'>After launching <br/> </span>your new website, the next step is <br/>to outperform competitors in<br/> affordable while developing a <br/> search engine rankings and <br/> secure top positions in your <br/> industry.</p>
    <p className='text-white text-xl ml-40'><span className='text-3xl'>Your choice of  <br/> platform <br/> </span>also plays a role in the cost. <br/>Templated solutions are more<br/> affordable while developing a <br/> fully custom site will increase the <br/> project’s total expense.</p>
    <p className=''><span className=''></span></p>
  </div>
</div>
</div>

<div className='bg-blue-200 h-150'>
   <p className='pt-10 text-center text-blue-500 text-2xl'>Finding & Working With The</p>
   <p className='text-center text-blue-500 text-5xl'>Best Web Design Agency</p>
   <div className='flex'>
   <p className='ml-50 mt-25 text-4xl'>Whether starting a brand from the ground up <br/> or overhauling your current website, working <br/>with a website design agency gives you <br/> access to the top experts in web design. </p>
   <p className='ml-50 mt-25 text-2xl text-black'>In turn, these experts have access to leading tools, modern trends, <br/> best practices and more to help ensure that your website is not only <br/>unique but built to perform — if you find the right agency, that is. Not all <br/>agencies are created equal.</p> 
   <p className='mt-64 text-2xl text-black absolute ml-246'>We’ll breakdown exactly what to look for in a partner to help you choose <br/> the best website design agency for your project. </p> 
   
   </div>

  </div>

  <div className="bg-white-200 h-850">
  <div className=''>
     <p className='text-4xl ml-60 mt-25'>How To Find The Best Web Design Company</p>
     <p className='text-2xl ml-60 mt-8'>Follow the step-by-step guide below to kickstart your search and learn how to evaluate potential web design <br/> companies to partner with your brand.</p>
  </div>
  <div className=''>
     <p className='text-4xl ml-60 mt-8'>Step 1: Define Your Needs</p>
     <p className='text-2xl ml-60 mt-5'> <span className='text-black'>▶Design needs: </span> Are you satisfied to settle for an agency that works with templates or do you need an agency that <br/> designs custom websites? </p>
  </div>
  <div className=''>
     <p className='text-2xl ml-60 mt-5'> <span className='text-black'>▶Design approach: </span> Are you looking to build a new website from the ground up? Or do you have a current digital presence <br/> that needs either a light refresh or a complete overhaul? </p>
  </div>
  <div className=''>
     <p className='text-2xl ml-60 mt-5'> <span className='text-black'>▶Website goals </span> What are your specific goals for the website? For example: Higher search engine ranking, more <br/> traffic, greater engagement, increased conversion. </p>
  </div>
  <div className=''>
     <p className='text-2xl ml-60 mt-5'> <span className='text-black'>▶Website requirements: </span> AWhat are your specific requirements for the website? Do you have a platform in mind? <br/> Create a list of must-have features and functionalities, along with a list of nice-to-haves if your budget allows. </p>
  </div>
  <p className='text-2xl ml-60 mt-5'>Creating a website request for proposal (RFP) document can help you organize and outline your project for potential <br/> agencies. Agencies that are interested in taking on your project can then use this document to respond by submitting a <br/> proposal or a bid.</p>
  
  <div className=''>
  <p className='text-4xl ml-60 mt-8'>Step 2: Start Your Search</p>
  <p className='text-2xl ml-60 mt-5'>The best way to find an agency for your digital project is, of course, online! Use a search engine or check out a B2B <br/> marketplace like DesignRush — you can actually post your RFP here and wait for a bid, or search agencies and reach <br/> out to a few on your own.</p>
  </div>

   <div className=''>
   <p className='text-4xl ml-60 mt-8'>Step 3: Research & Shortlist Agencies</p>
   <p className='text-2xl ml-60 mt-8'>Whether you use a marketplace or Google to find potential partners, the next step is thorough research. For each<br/> agency you’re interested in, explore the agency’s:</p>
   </div>
   
  <div className=''>
     <p className='text-2xl ml-60 mt-5'> <span className='text-black'>▶Website: </span> For an agency that you’re considering partnering with, a professional website design is a must.</p>
  </div>
  <div className=''>
     <p className='text-2xl ml-60 mt-5'> <span className='text-black'>▶Services:  </span> Some agencies focus on specific areas like web design or branding, while full-service agencies offer an<br/> entire scope of digital services. </p>
  </div>
  <div className=''>
     <p className='text-2xl ml-60 mt-5'> <span className='text-black'>▶Portfolio: </span>  Any reputable agency will have a digital portfolio easily accessible and available for potential clients to<br/> view. Look through the projects to get an idea of the agency’s capabilities in terms of design, development, branding <br/> and other applicable areas, in different industries. </p>
  </div>
  <div className=''>
     <p className='text-2xl ml-60 mt-5'> <span className='text-black'>▶Client testimonials: </span> Get a feel for what it’s like to work with the agency through client testimonials that provide <br/>feedback about processes, team members and deliverables. </p>
  </div>
  <p className='text-2xl ml-60 mt-5'>Shortlist agencies based on these factors and create a list of 3-5 agencies to set up a meeting with — which brings us <br/> to the next step!</p>
   
  <div className=''>
   <p className='text-4xl ml-60 mt-8'>Step 4: Meet With The Agency(s)</p>
   <p className='text-2xl ml-60 mt-8'>Meeting with your potential partner, whether in person or digitally, allows you to get to know the team members who<br/> will be working on your project and ask questions about what the agency’s processes look like behind the scenes. <br/> Some questions to ask when hiring a professional web design agency include: </p>
   </div>

   <ol className='text-2xl ml-60 mt-8'>
    <li> 1. What sets you apart from other agencies?</li>
    <li> 2. What digital services do you offer in addition to web design?</li>
    <li> 3. Do you have experience working with clients in my industry?</li>
    <li> 4. What does your website design process look like?</li>
    <li> 5. What does your website development process look like?</li>
    <li> 6. Who are the team members that will be working on my project?</li>
    <li> 7. Will you provide recommendations and ideas for my project?</li>
    <li> 8. What will our partnership look like in terms of communication and project updates?</li>
    <li> 9. How much will my project cost and how long will it take to complete?</li>
    <li> 10. How do you measure results?</li>
   </ol>
   <p className='text-2xl ml-60 mt-8'>These questions will help give you an inside look into the experience of the agency’s team members, the value that the <br/> agency offers and what your relationship with the agency will look like throughout the life of your partnership — all <br/> important factors to consider when choosing the best web design agency for your project.</p>

   <div className=''>
  <p className='text-4xl ml-60 mt-8'>Step 5: Make Your Decision</p>
  <p className='text-2xl ml-60 mt-5'>Finally, it’s time to choose the best company for the job. Base your decision on your interview's, the team members<br/> you met and the information you gathered. <br/> <br/> From their portfolio of past projects to the way they handle partnerships and measure success, the right company will <br/> be one that offers a team of experts, project ownership and complete transparency throughout your project.</p>
  </div>

  <div>
  <h1 className='text-4xl ml-60 mt-10 text-black'>Why Digital Silk Is The Best Web Design Agency For Your <br/> Project</h1>
  <p className='text-2xl ml-60 mt-8'>Whether you need a brand-new website or a redesign, Digital Silk is a leading full-service web design agency comprisrised <br/> of trusted website design experts.</p>
  <p className='text-2xl ml-60 mt-8'> What does Digital Silk offer that other agencies don’t?</p>

  <div className=''>
     <p className='text-xl ml-60 mt-5'> <span className='text-black'>▶Project ownership:: </span> We value every client relationship and the opportunity to help clients establish or grow their <br/> online presence. That’s why we treat every project as our own, with meticulous project management, time tracking <br/> and calendars to make sure we’re delivering on time and on budget.</p>
  </div>
  <div className=''>
     <p className='text-xl ml-60 mt-5'> <span className='text-black'>▶Expert guidance: :  </span> Our team is made up of award-winning designers as well as top developers, branding experts,<br/> marketing professionals, leading strategists and more. Throughout your project, our team will be hands-on and offer <br/>to your budget. </p>
  </div>
  <div className=''>
     <p className='text-xl ml-60 mt-5'> <span className='text-black'>▶Transparency: </span>  We offer complete transparency throughout every client relationship, from our first meeting through<br/> project completion. You’ll receive regular reports and updates on exactly where your project is at, from your timeline <br/> and other applicable areas, in different industries. </p>
  </div>
  <div className=''>
     <p className='text-xl ml-60 mt-5'> <span className='text-black'>▶Results: </span>  Every recommendation we make is strategic, based on thorough research, extensive experience and <br/>industry best practices. We deliver projects that drive measurable results, including increases in search engine <br/> ranking, traffic, engagement and conversion. </p>
  </div>
  </div>
  <p className='text-xl ml-60 mt-8'>If you’re looking for a reliable web design team that will deliver a custom website that’s unique to your brand identity, <br/> your offering and your target market, you’ve found your match in Digital Silk. </p>
  <p className='text-xl ml-60 mt-8'>Our trusted web design experts work with brands across industries to deliver fully custom website projects, from web <br/> design and development to website strategy, content creation and more. </p>
  <p className='text-xl ml-60 mt-8'>Schedule a consultation to meet our team and get a custom quote for your project. </p>
</div>

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up to get websites</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <a className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required=""></a>
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
      </div>
  </div>
</section>

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      What do you mean by "Figma assets"?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.</p>
              </div>
              <div className="mb-10">                        
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      What does "lifetime access" exactly mean?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      How does support work?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.</p>
                  <p className="text-gray-500 dark:text-gray-400">Feel free to <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">contact us</a> and we'll help you out as soon as we can.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      I want to build more than one project. Is that allowed?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine.</p>
                  <p className="text-gray-500 dark:text-gray-400">Find out more information by <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.</p>
              </div>
          </div>
          <div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      What does "free updates" include?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">The free updates that will be provided is based on the <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      What does the free version include?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">The <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">free version</a> of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.</p>
                  <p className="text-gray-500 dark:text-gray-400">You can use this version for any purposes, because it is open-source under the MIT license.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      What is the difference between Windster and Tailwind UI?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes.</p>
                  <p className="text-gray-500 dark:text-gray-400">Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.</p>
              </div>
              <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                      Can I use Windster in open-source projects?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself.</p>
                  <p className="text-gray-500 dark:text-gray-400">With that being said, feel free to use this design kit for your open-source projects.</p>
                  <p className="text-gray-500 dark:text-gray-400">Find out more information by <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.</p>
              </div>
          </div>
      </div>
  </div>
</section>
  </>
  )
}

  