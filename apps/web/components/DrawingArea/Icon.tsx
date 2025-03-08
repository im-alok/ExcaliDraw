import React, { ReactNode } from 'react'

const IconButton = ({ onclick, icon,selectedTool,tool }: {
    onclick: () => void,
    icon: ReactNode,
    selectedTool:string,
    tool:string
}) => {
    return (
        <div className={`p-2  rounded-md cursor-pointer ${selectedTool === tool ? 'bg-[#403e6a]':""}`}
        onClick={onclick}
        >
            {icon}
        </div>
    )
}

export default IconButton
