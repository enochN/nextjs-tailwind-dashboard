import React from 'react';

function LinkAction({svg, label = "Label", href = "#"}) {

    return (
        <a href={href} className="mt-4 flex items-center hover:bg-blue-900 px-1 py-2 rounded-lg focus:bg-blue-900">
            {svg}
            <span> {label} </span>
        </a>
    )
}


function Sidebar() {
    return <nav
        className="flex flex-col text-white h-full w-64 flex-shrink-0 p-4"
        style={{backgroundColor: "#001944"}}
    >

        <LinkAction href="/"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                        <path className="heroicon-ui"
                              d="M13 20v-5h-2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-7.59l-.3.3a1 1 0 11-1.4-1.42l9-9a1 1 0 011.4 0l9 9a1 1 0 01-1.4 1.42l-.3-.3V20a2 2 0 01-2 2h-3a2 2 0 01-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 012 2v5h3z"/>
                    </svg>} label="Home"/>

        <LinkAction href="/conversations"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                        <path className="heroicon-ui"
                              d="M6 14H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h12a2 2 0 012 2v2h2a2 2 0 012 2v13a1 1 0 01-1.7.7L16.58 18H8a2 2 0 01-2-2v-2zm0-2V8c0-1.1.9-2 2-2h8V4H4v8h2zm14-4H8v8h9a1 1 0 01.7.3l2.3 2.29V8z"/>
                    </svg>} label="Conversations"/>

        <LinkAction href="/channels"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                        <path className="heroicon-ui"
                              d="M11.03 8h3.94l1.06-4.24a1 1 0 111.94.48L17.03 8H20a1 1 0 010 2h-3.47l-1 4H18a1 1 0 110 2h-2.97l-1.06 4.25a1 1 0 11-1.94-.49l.94-3.76H9.03l-1.06 4.25a1 1 0 11-1.94-.49L6.97 16H4a1 1 0 010-2h3.47l1-4H6a1 1 0 010-2h2.97l1.06-4.24a1 1 0 111.94.48L11.03 8zm-.5 2l-1 4h3.94l1-4h-3.94z"/>
                    </svg>} label="Channels"/>

        <LinkAction href="/knowledge-base"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                        <path className="heroicon-ui"
                              d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z"/>
                    </svg>} label="Knowledge Base"/>

        <LinkAction href="/reports"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                        <path className="heroicon-ui"
                              d="M20 22H4a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 012 2v16a2 2 0 01-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"/>
                    </svg>} label="Reports"/>

        <LinkAction href="/settings"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                        <path className="heroicon-ui"
                              d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 012 2v.58a8 8 0 011.92 1.11l.5-.29a2 2 0 012.74.73l1 1.74a2 2 0 01-.73 2.73l-.5.29a8.06 8.06 0 010 2.22l.5.3a2 2 0 01.73 2.72l-1 1.74a2 2 0 01-2.73.73l-.5-.3A8 8 0 0115 19.43V20a2 2 0 01-2 2h-2a2 2 0 01-2-2v-.58a8 8 0 01-1.92-1.11l-.5.29a2 2 0 01-2.74-.73l-1-1.74a2 2 0 01.73-2.73l.5-.29a8.06 8.06 0 010-2.22l-.5-.3a2 2 0 01-.73-2.72l1-1.74a2 2 0 012.73-.73l.5.3A8 8 0 019 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 000 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 002.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 002.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 000-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 00-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 00-2.41 1.4zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>} label="Settings"/>

        <LinkAction href="/support"
                    svg={<svg className="fill-current text-blue-200 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                        <path className="heroicon-ui"
                              d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zM10.59 8.59a1 1 0 11-1.42-1.42 4 4 0 115.66 5.66l-2.12 2.12a1 1 0 11-1.42-1.42l2.12-2.12A2 2 0 0010.6 8.6zM12 18a1 1 0 110-2 1 1 0 010 2z"/>
                    </svg>} label="Support"/>

    </nav>;
}

export default Sidebar;