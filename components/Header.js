import React from 'react'

function Header() {
    return <header className="h-16 bg-white flex">
        <button className="block h-16 p-3 w-64 flex items-center justify-start" style={{backgroundColor: "#001944"}}>
            <img className="h-full w-1/5 rounded-full object-center" alt="Application logo" src="/static/robot.svg"/>
            <span className="leading-loose text-xl ml-2 text-white">
                    PM2R
            </span>
        </button>
        <div className="flex flex-grow items-center justify-end p-3 pl-6 pr-6 ">
            <div className="self-start mr-auto h-full">
                <button className="border-gray-400 border-2 rounded h-full pl-2 pr-2 ">
                    Top Shoes Ltd
                </button>
                <ul className="hidden">
                    <li>New Company</li>
                    <li>Ito-Ya</li>
                </ul>
            </div>


            <button className="rounded h-full pl-2 pr-2 flex bg-red-600 text-white  ">
                Red button
            </button>
            <button className="h-full rounded  pl-2 pr-2 flex items-center justify-end">
                <img alt="User icon" className="h-full w-1/5 rounded-full" src="/static/boy.svg"/>
                <span className="ml-2 text-xl">James Hardock</span>
            </button>


        </div>
    </header>;
}


export default Header;
