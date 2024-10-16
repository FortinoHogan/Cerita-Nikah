import React from 'react';

const DesktopView = () => {
    return (
        <div>
            <div className="relative mt-16 mx-auto border-gray-800 border-[12px] max-2xl:border-[12px] max-xl:border-[10px] rounded-t-xl h-[306px] w-[604px] max-2xl:h-[245px] max-2xl:w-[497px] max-xl:h-[165px] max-xl:w-[380px] max-lg:h-[149px] max-lg:w-[332px]">
                <div className="rounded-xl overflow-hidden h-[294px] bg-white max-2xl:h-[220px] max-xl:h-[145px] max-lg:h-[129px]">
                    <p>Ceritanya Content</p>
                </div>
            </div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[12px] max-w-[604px] max-2xl:h-[10px] max-xl:h-[10px]"></div>
            <div className="relative mx-auto bg-gray-800 h-[55px] max-w-[51px] max-2xl:w-[60px] max-xl:w-[44px] max-lg:w-[46px] max-2xl:h-[31px] max-xl:h-[11px] max-lg:h-[9px]"></div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl rounded-t-sm h-[21px] max-w-[397px] max-2xl:h-[18px] max-xl:h-[18px] max-lg:h-[13px]"></div>
        </div>
    );
}

export default DesktopView;
