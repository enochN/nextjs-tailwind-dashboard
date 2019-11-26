import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return (
        <div className="h-screen flex flex-col font-sans">
            <Header/>

            <div className="flex flex-1 h-screen overflow-x-hidden">
                <Sidebar/>
                <main className="bg-gray-200 min-h-full w-full h-full p-6">
                    {children}
                </main>
            </div>


        </div>
    );
}

export default Layout;
