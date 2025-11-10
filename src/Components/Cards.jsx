import React, { useContext } from "react";
import PinIMG from "../assets/pin.png"
import DeleteIMG from "../assets/delete.png"
import EditIMG from "../assets/edit.png"
import ArchiveIMG from "../assets/inbox.png"
import { Store } from "./ContextAPI";



const Cards = () => {

    const { task, search } = useContext(Store)

    return (
        <>

            <div className="flex flex-wrap gap-3 text-[#BBE1FA] justify-evenly items-center font-[Poppins,sans-serif]">
                {task.length != 0 && task.map((ele) => {
                    if (ele.type === search) {
                        return (
                            // <div className="bg-[#1B262C] text-[#BBE1FA] flex justify-center items-center min-h-screen font-[Poppins,sans-serif]">

                            <div className="bg-[#0F4C75] border-2 border-[#3282B8] rounded-2xl p-6 w-80 text-start shadow-[0_0_25px_rgba(50,130,184,0.3)] transition-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(187,225,250,0.5)]" key={ele.id}>

                                <h2 className="text-[#BBE1FA] mb-2 text-xl font-semibold">
                                    {ele.title}
                                </h2>
                                <p className="text-[#BBE1FA] opacity-85 mb-5 leading-relaxed">
                                    {ele.notes}
                                </p>
                                <p className="text-[#BBE1FA] opacity-85 mb-5 leading-relaxed">
                                    {ele.tags}
                                </p>
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div className="flex items-center justify-center space-x-1 cursor-pointer hover:scale-125 transition duration-400">
                                        <img src={EditIMG} alt="Pin" className="inline" />
                                        <p className="inline text-green-500" >Edit</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-1 cursor-pointer hover:scale-125 transition duration-400">
                                        <img src={PinIMG} alt="Pin" className="inline" />
                                        <p className="inline text-yellow-300">Pin</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-1 cursor-pointer hover:scale-125 transition duration-400">
                                        <img src={ArchiveIMG} alt="Pin" className="inline" />
                                        <p className="inline text-sky-500">Archive</p>
                                    </div>
                                    <div className="flex items-center justify-center space-x-1 cursor-pointer hover:scale-125 transition duration-400">
                                        <img src={DeleteIMG} alt="Pin" className="inline" />
                                        <p className="inline text-red-600">Delete</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
                }
            </div>
        </>
    );
};

export default Cards;
