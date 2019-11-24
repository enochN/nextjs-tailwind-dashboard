import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="h-screen flex flex-col font-sans">
            <Header/>

            <div className="flex flex-1 h-screen overflow-x-hidden">
                <Sidebar/>
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
