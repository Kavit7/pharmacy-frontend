import React from 'react'
import {BookCheck, Lock, Package, Paperclip, FileSignatureIcon, BusIcon} from 'lucide-react'
const Trust = () => {
  return (
 <section className='p-25'>
    <div className='flex flex-col justify-center items-center'>
    {/* container 1 */}
         <div className='flex gap-3 flex-col'>
           <h2 className='text-4xl font-bold'>Why create a free account?</h2>
           <p className='text-gray-500 text-center card-text'>Secure, personalized healthcare at your fingertips</p>
         </div>
    {/* container 2 */}
         <div className='flex space-x-30 p-15'>
         {/* card 1 */}
            <div className=' card w-[270px] flex flex-col justify-center items-center'>
              <Lock className='text-yellow-500'/>
              <h3 className='font-bold'>Secure & Private</h3>
              <p className='text-gray-500 text-center card-text' > End-to-end encryption for all your health data</p>
            </div>

            {/* card 2 */}
            <div className='card w-[270px] flex flex-col justify-center items-center'>
              <FileSignatureIcon className='text-green-500'/>
              <h3 className='font-bold'>Save prescriptions</h3>
              <p className='text-gray-500 text-center card-text'> Store and manage all your prescriptions in one place</p>
            </div>
            {/* card 3 */}
              <div className='card w-[270px] flex flex-col justify-center items-center'>
              <Package className='text-blue-500'/>
              <h3 className='font-bold'>Order history</h3>
              <p className='text-gray-500 text-center card-text'>Track every order and easily reorder medications</p>
            </div>
            {/* card 4 */}
              <div className='card w-[270px] flex flex-col justify-center items-center'>
              <BusIcon className='text-red-500'/>
              <h3 className='font-bold'>Faster checkout</h3>
              <p className='text-gray-500 text-center card-text'>Saved addresses and payment for one-click ordering</p>
            </div>

         </div>
         </div>
 </section>

  )
}

export default Trust