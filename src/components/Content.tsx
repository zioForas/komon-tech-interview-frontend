import React from 'react'
import Image from 'next/image'
import Blob from './Blob'
import Twitter from './Twitter'
import Instagram from './Instagram'
import joined from "../../public/joined.svg"
import member from "../../public/member.svg"
import Linkedin from './Linkedin'
import Facebook from './Facebook'
import Connections from './Connections'


function Content() {
    let today = new Date().toISOString().slice(0,10)
  return (
    <main className="content  py-5 min-h-screen ">
        <div className="flex justify-evenly max-h-[400px] ">   
            <div className='pt-20 flex flex-col pl-7 md:pl-0'>  {/* col1 */}
                <h1 className='font-extrabold text-4xl   md:text-6xl mb-14'>¡Hola, <br />
                @Usuario!</h1>
                 <h3 className='font-semibold md:text-lg text-sm'> <Image className='inline' src={joined} alt="" /> Joined {today}</h3>
                <h3 className='font-semibold md:text-lg text-xs '> <Image className='inline' src={member} alt="" /> Member of 0 communities</h3>
                </div>
            
            <div>        {/* col 2 */}
                <div>
                        <Blob/>
                    <img alt='' src="https://storage.googleapis.com/komon-client-production/0wugan9yf60gmg1cv9h8qet9v40m" className='h-72 w-72 md:h-96 md:w-96 bg-cover invisible'/>
                </div>
            </div>
        </div>
        <div className='lg:mx-32 md:mx-32 mx-6 '>
            <div className='pb-10'>
           <h1 className='md:text-3xl text:xl font-bold pb-4'> Your Linked Social Media Accounts</h1>
           </div>
                <div className=' flex-col justify-center items-center'>
           <div className='pb-6'>
        <Instagram/>
        </div>
        <div className='pb-6'>
        <Twitter />
        </div>
        <div className='pb-6'>
        <Linkedin/>
        </div>
        <Facebook/>
        </div>
                </div>
                <div className='lg:mx-32 md:mx-32 mx-6 pt-14 pb-10'>
                    <h1 className='md:text-3xl text:xl font-bold pb-4'>Your Connections:</h1>
                <Connections/>
                </div>
  </main>
  )
}

export default Content