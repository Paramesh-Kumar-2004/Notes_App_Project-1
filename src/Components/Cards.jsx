import React from "react";

const Cards = () => {
    return (
        // <div className="bg-[#1B262C] text-[#BBE1FA] flex justify-center items-center min-h-screen font-[Poppins,sans-serif]">
        <div className="bg-[#0F4C75] border-2 border-[#3282B8] rounded-2xl p-6 w-80 text-center shadow-[0_0_25px_rgba(50,130,184,0.3)] transition-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(187,225,250,0.5)]">

            <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
                alt="Night Sky"
                className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h2 className="text-[#BBE1FA] mb-2 text-xl font-semibold">
                Night Sky Theme
            </h2>
            <p className="text-[#BBE1FA] opacity-85 mb-5 leading-relaxed">
                Designed with shades of blue inspired by calm nights and peaceful oceans.
                Elegant, clean, and minimal.
            </p>

            <button className="bg-[#3282B8] text-[#BBE1FA] border-none py-2 px-4 rounded-lg font-semibold cursor-pointer transition-colors duration-300 hover:bg-[#BBE1FA] hover:text-[#1B262C]">
                View More
            </button>
            {/* </div> */}
        </div>
    );
};

export default Cards;
