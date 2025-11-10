import React from 'react';

const CreateTasks = () => {

    function HandleSubmit(e) {
        e.preventDefault();
        console.log("Clicked");
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

                <div>
                    <label
                        htmlFor="title"
                        className="block text-white font-medium mb-2"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter Your Title"
                        className="w-full border text-sky-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    />
                </div>

                <div>
                    <label
                        htmlFor="notes"
                        className="block text-white font-medium mb-2"
                    >
                        Notes
                    </label>
                    <textarea
                        id="notes"
                        placeholder="Write Your Notes Here..."
                        rows="4"
                        className="w-full border text-sky-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    ></textarea>
                </div>

                <div>
                    <label
                        htmlFor="tags"
                        className="block text-white font-medium mb-2"
                    >
                        Tags
                    </label>
                    <input
                        type="text"
                        id="tags"
                        placeholder="e.g. Work, Study, Personal"
                        className="w-full border text-sky-50 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                >
                    Create Task
                </button>
            </form>
        </div>
    );
};

export default CreateTasks;