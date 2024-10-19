import React from 'react'
import AOS from 'aos';
import Dashboard from './Dashboard'

export default function Incidents() {
  return (
    <>
   <Dashboard/>
   <section>
    <div className="w-full h-32 ">
      <h1 className="text-[#09090B] text-[32px] font-bold text-center">Let’s get started</h1>
      <div className="w-[468px] h-[37px] flex items-center  mx-auto text-center mt-2">
      <p className="text-center  text-[16px] text-slate-400">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
      </div>
      <div className="flex  mx-auto  w-[609px] h-[29px] mt-3">
        <img src="line2.png" alt="" className="text-[#e4e4e722]"/>
      </div>
      

    </div>
   </section>
 
    </>
  )
}
