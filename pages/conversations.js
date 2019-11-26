import React from "react";
import Layout from "../components/Layout";
import ChatInterface from "../components/ChatInterface";

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col h-full">
                <h2 className="text-2xl text-orange-500 font-semibold leading-loose tracking-wider mb-5 align-text-top">
                    Conversations
                </h2>

                <div className="flex flex-grow items-center w-full h-full">
                    <div className="w-1/4 h-full">
                        <div className="h-full w-full bg-white flex flex-col shadow rounded-sm">
                            <div className="h-16 border-b-2">

                            </div>
                            <div className="flex-grow">

                            </div>
                        </div>
                    </div>
                    <div className="flex-grow h-full bg-gray-600 ml-6">
                        <ChatInterface/>
                    </div>
                </div>

            </div>
        </Layout>

    );
};

export default Home;
