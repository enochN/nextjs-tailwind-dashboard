import React from "react";
import Header from "../components/Header";


const Home = () => {
    return (
        <div className="h-screen flex flex-col font-sans">
            <Header/>

            <div className="flex flex-1 h-screen overflow-x-hidden">
                <nav
                    className="text-white h-full w-64 flex-shrink-0 p-3"
                    style={{backgroundColor: "#001944"}}
                >
                    <ol>
                        <li>Home</li>
                        <li>Conversations</li>
                        <li>Channels</li>
                        <li>Knowledge Base</li>
                        <li>Reports</li>
                        <li>Settings</li>
                        <li>Support</li>
                    </ol>
                </nav>
                <main className="bg-gray-200 min-h-full min-w-full w-full h-full p-6">
                    <h2>
                        Content here
                    </h2>
                </main>
            </div>


        </div>
    );
};

export default Home;
