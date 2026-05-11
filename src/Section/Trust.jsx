import React from 'react'
import {BookCheck, Lock, Package, Paperclip, FileSignatureIcon, BusIcon} from 'lucide-react'
const Trust = () => {
  return (
    <section className="md:p-25 p-8">
      <div className="md:flex md:flex-col md:justify-center md:items-center grid grid-cols-1 ">
        {/* container 1 */}
        <div className="md:flex md:gap-3 md:flex-col ">
          <h2 className="md:text-4xl text-center text-2xl font-bold">
            Why create a free account?
          </h2>
          <p className="text-gray-500 text-center card-text">
            Secure, personalized healthcare at your fingertips
          </p>
        </div>
        {/* container 2 */}
        <div className="md:flex md:space-x-30 md:p-15 p-10 grid grid-cols-1 gap-10" >
          {/* card 1 */}
          <div className=" card w-[270px] flex flex-col justify-center items-center">
            <Lock className="text-yellow-500" />
            <h3 className="font-bold">Secure & Private</h3>
            <p className="text-gray-500 text-center card-text">
              {" "}
              End-to-end encryption for all your health data
            </p>
          </div>

          {/* card 2 */}
          <div className="card w-[270px] flex flex-col justify-center items-center">
            <FileSignatureIcon className="text-green-500" />
            <h3 className="font-bold">Save prescriptions</h3>
            <p className="text-gray-500 text-center card-text">
              {" "}
              Store and manage all your prescriptions in one place
            </p>
          </div>
          {/* card 3 */}
          <div className="card w-[270px] flex flex-col justify-center items-center">
            <Package className="text-blue-500" />
            <h3 className="font-bold">Order history</h3>
            <p className="text-gray-500 text-center card-text">
              Track every order and easily reorder medications
            </p>
          </div>
          {/* card 4 */}
          <div className="card w-[270px] flex flex-col justify-center items-center">
            <BusIcon className="text-red-500" />
            <h3 className="font-bold">Faster checkout</h3>
            <p className="text-gray-500 text-center card-text">
              Saved addresses and payment for one-click ordering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trust