import React from 'react'

function Header() {
    return <header className="h-16 bg-white flex">
        <button className="block h-16 p-3 w-64 flex items-center justify-start" style={{backgroundColor: "#001944"}}>
            <img className="h-full w-1/5 rounded-full object-center" alt="Application logo" src="/static/robot.svg"/>
            <span className="leading-loose text-xl ml-2 text-white">
                    PM2R
            </span>
        </button>
        <div className="flex flex-grow items-center justify-between p-3 pl-6 pr-6 ">
            <div className="self-start h-full">
                <button className="border-gray-400 border-2 rounded h-full px-2 focus:bg-gray-100 hover:bg-gray-100">
                    Top Shoes Ltd
                </button>
                <ul className="hidden">
                    <li>New Company</li>
                    <li>Ito-Ya</li>
                </ul>
            </div>

            <div className="flex items-center justify-end h-full">
                <button
                    className="rounded h-full px-4 flex items-center bg-red-600 text-white focus:bg-red-700 hover:bg-red-700 ">
                    Test Mode
                </button>
                <button className="h-full rounded  pl-2 pr-2 flex items-center justify-end">
                    <img alt="User icon" className="h-full w-1/5 rounded-full" src="/static/boy.svg"/>
                    <span className="ml-2 text-xl">James Hardock</span>
                </button>
            </div>


        </div>
    </header>;
}


export default Header;
