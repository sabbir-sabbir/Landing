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
    <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-[60px]">
      {data.map((item) => (
        <div key={item.id} className="bg-white rounded-md shadow-lg overflow-hidden">
          <img src={item.img} alt={item.title} className="w-full h-60 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-600">{item.des}</p>
            <p className="text-lg font-semibold text-blue-600 mt-2">{item.price}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
