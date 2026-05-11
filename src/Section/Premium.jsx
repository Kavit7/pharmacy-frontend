import React from "react";

const Premium = () => {
  return (
    <section className="md:p-25 p-10 flex flex-col justify-center items-center gap-10 bg-gray-300/10">
      <div className="flex flex-col gap-3">
        <h3 className="md:text-3xl text-2xl text-center font-bold">Premium healthcare services</h3>
        <p className="text-center text-gray-500">Everything you need in one secure platform</p>
      </div>

      <div className=" md:flex md:justify-center md:items-center md:space-x-20 grid grid-cols-1 gap-3">
        {/* card 1 */}
        <div className="flex gap-2 border w-fit p-4 rounded-[10px] border-gray-400">
          <span className="bg-black/40 text-3xl text-white p-3 rounded-[100px]">
            F
          </span>
          <div>
            <h3 className="font-bold"> Free consultations</h3>
            <p>Chat with licensed pharmacists anytime</p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex gap-2 border w-fit p-4 rounded-[10px] border-gray-400">
          <span className="bg-blue-200 text-3xl text-white p-3 rounded-[20px]">
            A
          </span>
          <div>
            <h3 className="font-bold"> Auto-refill reminders</h3>
            <p>Never miss a dose with smart notifications</p>
          </div>
        </div>
        {/* card 3 */}

        <div className="flex gap-2 border w-fit p-4 rounded-[10px] border-gray-400">
          <span className="bg-green-500 text-3xl text-white p-3 rounded-[20px]">
            U
          </span>
          <div>
            <h3 className="font-bold">Upload prescriptions</h3>
            <p>Take a photo, we'll handle the rest</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Premium;
