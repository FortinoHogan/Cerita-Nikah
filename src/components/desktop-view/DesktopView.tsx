import React from 'react'

const DesktopView = () => {
    return (
        <>
            <div className="relative mx-auto border-gray-800 dark:border-gray-800  border-[16px] rounded-t-xl h-[406px] w-[704px]">
                <div className="rounded-xl overflow-hidden h-[374px] bg-white">
                    <p>Ceritanya Content</p>
                </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[704px]"></div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[95px] max-w-[142px]"></div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[21px] max-w-[597px]">
            </div>
        </>
    )
}

export default DesktopView