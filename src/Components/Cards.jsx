import React, { useContext } from "react";
import PinIMG from "../assets/pin.png"
import DeleteIMG from "../assets/delete.png"
import EditIMG from "../assets/edit.png"
import ArchiveIMG from "../assets/inbox.png"
import { Store } from "./ContextAPI";



const Cards = () => {

    const { task, setTask, filter, setFilter } = useContext(Store)

    const HandleTypeChange = (id, e) => {
        try {
            const UpdateType = e.currentTarget.value
            console.log(UpdateType)
            const updatedTasks = task.map((ele) =>
                ele.id === id ? { ...ele, type: UpdateType } : ele
            );
            setTask(updatedTasks);
            setFilter(UpdateType)
            localStorage.setItem("task", JSON.stringify(updatedTasks));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <div className="flex flex-wrap gap-3 text-[#BBE1FA] justify-evenly items-center font-[Poppins,sans-serif]">
                <div className="flex flex-wrap gap-3 text-[#BBE1FA] justify-evenly items-center font-[Poppins,sans-serif]">
                    {task.length !== 0 && task.some((ele) => ele.type === filter) ? (
                        task.map((ele) => {
                            if (ele.type === filter) {
                                return (
                                    <div
                                        className="bg-[#0F4C75] border-2 border-[#3282B8] rounded-2xl p-6 w-80 text-start shadow-[0_0_25px_rgba(50,130,184,0.3)] transition-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(187,225,250,0.5)]"
                                        key={ele.id}
                                    >
                                        <h2 className="text-[#BBE1FA] mb-2 text-xl font-semibold">
                                            {ele.title}
                                        </h2>

                                        <p className="text-[#BBE1FA] opacity-85 mb-5 leading-relaxed">
                                            {ele.notes}
                                        </p>

                                        <p className="text-[#BBE1FA] opacity-85 mb-5 leading-relaxed">
                                            {ele.type}
                                        </p>

                                        <div className="flex gap-2">
                                            {ele.tags.map((tag, index) => (
                                                <p
                                                    key={index}
                                                    className="text-[#BBE1FA] opacity-85 mb-1 leading-relaxed border-2 border-sky-500 px-2 rounded-lg bg-sky-400"
                                                >
                                                    #{tag}
                                                </p>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap items-center justify-between gap-1 ">

                                            <div className="flex items-center justify-center space-x-1 cursor-pointer hover:scale-125 transition duration-400">
                                                <img src={EditIMG} alt="Pin" className="inline" />
                                                <p className="inline text-green-500">Edit</p>
                                            </div>

                                            <div className="flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                                <button
                                                    value={ele.type === "pin" ? "all" : "pin"}
                                                    onClick={(e) => HandleTypeChange(ele.id, e)}
                                                    className={`flex items-center gap-1 px-3 py-1 text-sm font-semibold rounded-md text-yellow-300 hover:bg-yellow-800 hover:text-black transition-colors duration-300 cursor-pointer`}
                                                >
                                                    <img src={PinIMG} alt="Pin" className="w-4 h-4" />
                                                    {ele.type === "pin" ? "Unpin" : "Pin"}
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-center space-x-1 cursor-pointer hover:scale-125 transition duration-400">
                                                <img src={ArchiveIMG} alt="Pin" className="inline" />
                                                <p onClick={() => HandleTypeChange(ele.id, "archive")} className="inline text-sky-500">Archive</p>
                                            </div>
                                            <div className="flex items-center justify-center space-x-1 cursor-pointer hover:scale-125 transition duration-400">
                                                <img src={DeleteIMG} alt="Pin" className="inline" />
                                                <p onClick={() => HandleTypeChange(ele.id, "trash")} className="inline text-red-600">
                                                    Delete
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    ) : (
                        <div className="text-gray-400 text-xl font-semibold mt-10">No Data Found</div>
                    )}
                </div>

            </div>
        </>
    );
};

export default Cards;