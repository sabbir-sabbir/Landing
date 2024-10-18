import React from 'react';

const data = [
  {
    id: 1,
    img: 'hero1.png',
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    id: 2,
    img: 'hero2.png',
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    id: 3,
    img: 'hero3.png',
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    id: 4,
    img: 'hero4.png',
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    id: 5,
    img: 'hero5.png',
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
  {
    id: 6,
    img: 'hero6.png',
    title: 'Whitechapel Rd.',
    des: 'Tulare County,  Los Angles, CA 23415',
    price: '$1,456,654.00',
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-2 gap-1 mt-20 bg-[#E4E4E7] items-center p-4 px-5">
        <div>
         <p className="text-[12px] font-semibold text-[#71717A] ">Welcome back</p>
         <h2 className="font-bold text-[#09090B] text-[26px]">Dashboard</h2>
        </div>
          
          {/* second part */}
        <div className="flex items-center">

          {/* search box */}
        <div className="w-[25px] mr-2">
        <input type="search" className="bg-[#FAFAFA] text-start rounded-md p-2 outline-0 hover:border-2 border-slate-400" placeholder="Search incident"/>
        </div>
        {/* select box */}
          <div className="w-auto   bg-[#FAFAFA] border-[#E4E4E7] ml-44 flex  p-3 rounded-md">
          <span className="text-[12px] text-[#71717A] font-semibold w-[50px] text-center">Sort By:</span>      <select name="" id="" className="bg-[#FAFAFA] text-[14px] outline-none  hover:border-2 border-[#e85b0488] rounded-md">
          <option value="">Date modified</option>
          <option value="">Year modified</option>
          <option value="">Month modified</option>
        </select>
          </div>

          <a href="#" className="w-auto h-2 bg-[#F26922] text-[white] px-[35px] py-[23px] ml-3 rounded-md no-underline flex items-center justify-center hover:bg-[#dc2f02]">Cypher AI</a>

        
        </div>

      </div>
      <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-[60px]">
      {data.map((item) => (
        <div key={item.id} className=" rounded-md  overflow-hidden ">
          <img src={item.img} alt={item.title} className="w-full h-60 object-cover" />
          <div className="p-2">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-[#71717A] text-[14px]">{item.des}</p>
            <p className="text-lg font-semibold text-[#09090B] mt-[1]">{item.price}</p>
          </div>
        </div>
       
      ))}
     
    </section>

    </>
  
  );
}
