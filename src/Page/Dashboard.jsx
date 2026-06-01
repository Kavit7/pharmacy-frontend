import { Activity, BarChart, GitGraph, LineChart, PanelTopBottomDashed, ShoppingBag, TreeDeciduous, TrendingUp, User, UserCog } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div>
        {/* top cards */}

        <div className="grid md:grid-cols-5 gap-5 grid-cols-1 flex justify-center items-center">
          {/* card 1 */}
          <div className="card">
            <div className="card-body">
              <div className="card-header">
                <h1 className="text-gray-800">Pharmacies</h1>
                <div className="card-text">
                  <span>0</span>
                  <TrendingUp
                    size={30}
                    className="bg-green-300 p-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="card">
            <div className="card-body">
              <div className="card-header">
                <h1 className="text-gray-800">Patients</h1>
                <div className="card-text">
                  <span>0</span>
                  <User size={30} className="bg-blue-300 p-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* card 3 */}

          <div className="card">
            <div className="card-body">
              <div className="card-header">
                <h1 className="text-gray-800">Administrator</h1>
                <div className="card-text">
                  <span>0</span>
                  <UserCog
                    size={30}
                    className="bg-yellow-300 p-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="card">
            <div className="card-body">
              <div className="card-header">
                <h1 className="text-gray-800">Medicine</h1>
                <div className="card-text">
                  <span>0</span>
                  <ShoppingBag
                    size={30}
                    className="bg-indigo-400 p-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="card">
            <div className="card-body">
              <div className="card-header">
                <h1 className="text-gray-800">Active Pharmacy</h1>
                <div className="card-text">
                  <span>0</span>
                  <Activity
                    size={30}
                    className="bg-pink-400 p-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* small activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[300px] mt-5 gap-5">
          <div className=" dash-summary">
            <h1 className='text-center font-bold'>TOP PERFORMING PHARMACY</h1>
          </div>
          <div className=" dash-summary ">
            <h1 className='text-center font-bold'>MOST ORDERED MEDICINE</h1>
          </div>
        </div>
        <div>NOTIFICATION PANEL</div>
      </div>
    </>
  );
}

export default Dashboard