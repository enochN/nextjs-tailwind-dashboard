import React from 'react';


function LoginPage() {
    return (
        <div className="flex h-screen w-full">
            <div className="bg-orange-600 w-3/5 "
                 style={{background: "linear-gradient(90deg, rgba(237,89,34,1) 0%, rgba(243,112,34,1) 35%, rgba(247,145,30,1) 100%)"}}>
                <div className="w-full h-full"
                     style={{backgroundImage: "url(/static/bubbles.svg)", backgroundSize: "650px 650px"}}>

                </div>
            </div>
            <div className="w-2/5 px-48 py-64" style={{
                backgroundImage: "url(/static/bubbles.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "300px 300px",
                backgroundPosition: "right bottom"
            }}>
                <form className="p-4 w-full flex flex-col font-semibold">
                    <input name="username" aria-label="User Name" type="text"
                           className="mt-8 pt-4 pb-1 font-semibold  border-b-2 focus:border-indigo-500 outline-none"
                           placeholder="Username"/>
                    <input name="password" aria-label="Password" type="password"
                           className="mt-8 pt-4 pb-1 font-semibold  border-b-2 focus:border-indigo-500 outline-none"
                           placeholder="Password"/>
                    <button type="submit"
                            className="mt-12 p-4 bg-indigo-600 rounded-lg font-bold tracking-widest text-indigo-100 hover:text-white focus:text-white focus:bg-indigo-700 outline-none focus:outline-none "> Login
                    </button>
                    <p className="mt-10 text-center font-semibold">Don&apos;t have an account? <a href="#"
                                                                                             className="text-blue-700 cursor-pointer">Sign
                        Up</a></p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;