import React from 'react';

function ChatInterface() {

    return (
        <div className="h-full w-full bg-white flex flex-col shadow rounded-sm">
            <div className="h-16 border-b-2 ">

            </div>
            <div className="flex flex-grow items-center justify-center">
                <img className="w-1/2 object-center opacity-25" src="/static/group_chat.svg"
                     alt="Chat activity background"/>
            </div>
            <form className="h-20 bg-gray-100 flex items-center px-6 py-4 font-sans font-semibold">
                <input
                    className="flex-grow mr-2 h-full border rounded placeholder-gray-500 font-semibold p-4 bg-gray-300 focus:bg-white focus:outline-none"
                    placeholder="Type your message.." name="message" type="text"/>
                <button className="block w-32 h-full bg-blue-700 text-white py-2 px-4 font-semibold rounded"
                        type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatInterface;