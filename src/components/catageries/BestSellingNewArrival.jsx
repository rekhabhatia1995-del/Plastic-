import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";


const bestCategories = [
  { id: 1, name: "Plastic Bucket", image: "https://picsum.photos/300?1", products: 18 },
  { id: 2, name: "Plastic Mug", image: "https://picsum.photos/300?2", products: 12 },
  { id: 3, name: "Plastic Tub", image: "https://picsum.photos/300?3", products: 15 },
  { id: 4, name: "Plastic Stool", image: "https://picsum.photos/300?4", products: 10 },
];


const arrivals = [
  { id: 1, name: "Premium Bucket", image: "https://picsum.photos/400?11" },
  { id: 2, name: "Round Tub", image: "https://picsum.photos/400?12" },
  { id: 3, name: "Water Mug", image: "https://picsum.photos/400?13" },
  { id: 4, name: "Storage Basket", image: "https://picsum.photos/400?14" },
  { id: 5, name: "Plastic Box", image: "https://picsum.photos/400?15" },
  { id: 6, name: "Laundry Basket", image: "https://picsum.photos/400?16" },
];


function BestSellingNewArrival() {


  const [slide, setSlide] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setSlide((prev)=> 
        prev === arrivals.length - 4 ? 0 : prev + 1
      );

    },3000);


    return () => clearInterval(timer);

  },[]);



  const nextSlide = () => {

    setSlide((prev)=>
      prev === arrivals.length - 4 ? 0 : prev + 1
    );

  };


  const prevSlide = () => {

    setSlide((prev)=>
      prev === 0 ? arrivals.length - 4 : prev - 1
    );

  };



  return (

<section className="max-w-[1440px] mx-auto px-4 py-10">


<div className="grid lg:grid-cols-2 gap-6">


{/* BEST SELLING */}

<div>



<div className="mb-4">

<h2 className="text-xl text-center font-bold text-slate-900 uppercase">
Best Selling Categories
</h2>

 

</div>



<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">


{
bestCategories.map((item)=>(

<div
key={item.id}
className="bg-white w-full h-56 sm:h-64 mt-4 rounded-xl shadow-lg overflow-hidden"
>


<img
src={item.image}
alt={item.name}
className="w-full rounded-full h-32 sm:h-40 object-cover"
/>


<div className="p-1 text-center">


<h2 className="text-sm sm:text-[18px] font-semibold">
{item.name}
</h2>


<p className="text-[10px] sm:text-[12px] text-gray-500">
{item.products} Products
</p>


<button className="mt-1 bg-blue-950 w-26 text-white text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 rounded-xl">
View
</button>


</div>


</div>


))
}


</div>


</div>





{/* NEW ARRIVAL SLIDER */}

<div>



<div className="relative mb-4">
<h2 className="text-xl font-bold text-center text-slate-900 uppercase">
New Arrival
</h2>

<div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
<button
onClick={prevSlide}
className="border rounded-full p-2 hover:bg-lime-500 hover:text-white"
>
<FaArrowLeft size={12}/>
</button>
<button
onClick={nextSlide}
className="border rounded-full p-2 hover:bg-lime-500 hover:text-white"
>
<FaArrowRight size={12}/>
</button>
</div>
</div>




<div className="overflow-hidden">


<div
className="flex gap-3 transition-transform duration-500"
style={{
transform:`translateX(-${slide * 25}%)`
}}
>


{
arrivals.map((item)=>(


<div
key={item.id}
className="min-w-[48%] sm:min-w-[24%] bg-white rounded-xl m-1 shadow-lg overflow-hidden h-56 sm:h-64"
>


<div className="relative">


<button className="absolute top-1 left-1 bg-lime-500 text-white text-[8px] font-bold px-2 py-1 rounded-full cursor-pointer">
NEW
</button>


<img
src={item.image}
alt={item.name}
className="w-full  rounded-full h-32 sm:h-40 object-cover group-hover:scale-110 transition"
/>


</div>



<div className="p-2 text-center">


<h2 className="text-sm sm:text-[18px] font-bold">
{item.name}
</h2>


<p className="text-[10px] sm:text-[12px] text-gray-500">
From 
<span className="text-lime-600 font-bold">
₹160
</span>
</p>




</div>


</div>


))
}


</div>


</div>


</div>


</div>


</section>

  );

}


export default BestSellingNewArrival;