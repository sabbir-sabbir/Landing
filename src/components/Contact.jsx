import React from 'react'
import { MagnifyingGlassIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';


export default function Location() {
  return (
    <>
      <div className="w-full h-[70px] bg-[#E4E4E7] mt-[72px] border-t-2 border-gray-300 flex mx-auto justify-around items-center ">
        <div className="">
          <p className="text-[#71717A] text-[12px] font-semibold">Incidents - DR-4699 March 2023 Severe Storms </p>
          <h1 className="font-bold text-[#09090B] text-[26px] ">DR-4699 March 2023 Severe Storms</h1>
        </div>
            
        <div className="w-[88px] mr-2">
        <input type="search" className="border-[#E4E4E7] bg-[#FAFAFA] text-start rounded-md p-2 outline-0 hover:border-2 border-slate-400" placeholder="Search incident"/>
        </div>

        <div className="  bg-[#FAFAFA] border-[#E4E4E7] p-2 rounded-md ml-4 ">
        <span className="text-[12px] text-[#71717A] font-semibold">Sort By:</span> <select name="" id="" className="bg-[#FAFAFA] text-[14px] hover:border-2 border-slate-400">
          <option value="">Date modified</option>
          <option value="">Year modified</option>
          <option value="">Month modified</option>
        </select>
        </div>
        <button className="bg-[#F26922] text-[16px] text-[#FAFAFA] font-normal px-2 py-2 text-center rounded-md hover:border-2 border-slate-400"><span className="font-bold text-[16px]">+</span>New Location</button>
      </div>
      <section>
      <div class="grid grid-cols-1 md:grid-cols-2  gap-4">
        <div class="bg-blue-200 p-4">
          <div>
          <p className="flex gap-2 text-[#6B7280] text-[14px]"><span><MapPinIcon className="w-7 h-7 text-[#71717A] p-1 rounded-full bg-[#F4F4F5]" /></span>           Location</p>
          <h1 className="font-extrabold text-[20px] text-[#09090B] ml-7">Tulare County,  Los Angles, CA 23415</h1>
          </div>

          <div className="mt-10 mb-8">
          <p className="flex gap-2 text-[#6B7280] text-[14px]"><span><CurrencyDollarIcon className="w-7 h-7 text-[#71717A] p-1 rounded-full bg-[#F4F4F5]" /></span>           Approx. Cost:</p>
          <h1 className="font-extrabold text-[20px] text-[#09090B] ml-7">$60,607,456.00</h1>
          </div>
          <hr/>
          <div className="mb-8">
            <h3 className="font-bold text-[#09090B] mt-10">Description</h3>
            <p className="text-[#71717A] text-[16px]">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
          </div>
          <hr />
        </div>
        


       <div class="bg-blue-200 p-4">Item 2</div>
   
      </div>

      </section>
    </>
  )
};
