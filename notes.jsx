import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Components/ContextAPI';

const CreateTasks = () => {

    const { task, setTask } = useContext(Store);

    const [data, setData] = useState({
        id: Date.now(),
        title: "",
        notes: "",
        tags: [],
        type: "all"
    });

    const navigate = useNavigate();

    function HandleChange(e) {
        const { name, value } = e.target;

        // 🧠 Special handling for tags
        if (name === "tags") {
            // Split by commas, trim spaces, remove empty entries
            const tagArray = value.split(",").map(tag => tag.trim()).filter(tag => tag !== "");
            setData({
                ...data,
                tags: tagArray
            });
        } else {
            setData({
                ...data,
                [name]: value
            });
        }
    }

    function HandleSubmit(e) {
        e.preventDefault();
        try {
            const updatedTasks = [...task, data];
            setTask(updatedTasks);
            localStorage.setItem("task", JSON.stringify(updatedTasks));
            navigate("/");
        } catch (error) {
            console.error(error);
        } finally {
            setData({
                id: Date.now(),
                title: "",
                notes: "",
                tags: [],
                type: "all"
            });
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#1B262C]">
            <form
                onSubmit={HandleSubmit}
                className="bg-[#0F4C75] shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-semibold text-center text-white mb-4">
                    Create New Task
                </h2>

                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-white font-medium mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={HandleChange}
                        value={data.title}
                        placeholder="Enter Your Title"
                        required
                        className="w-full border text-sky-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    />
                </div>

                {/* Notes */}
                <div>
                    <label htmlFor="notes" className="block text-white font-medium mb-2">
                        Notes
                    </label>
                    <textarea
                        id="notes"
                        name="notes"
                        onChange={HandleChange}
                        value={data.notes}
                        placeholder="Write Your Notes Here..."
                        required
                        rows="4"
                        className="w-full border text-sky-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    ></textarea>
                </div>

                {/* Tags */}
                <div>
                    <label htmlFor="tags" className="block text-white font-medium mb-2">
                        Tags
                    </label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        onChange={HandleChange}
                        // Show tags joined by commas for user readability
                        value={data.tags.join(", ")}
                        required
                        placeholder="e.g. Work, Study, Personal"
                        className="w-full border text-sky-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-6">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                    >
                        Create Task
                    </button>

                    <button
                        type="button"
                        className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition-all duration-300 cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTasks;
