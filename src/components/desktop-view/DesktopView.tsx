import React from 'react';

const DesktopView = () => {
    return (
        <>
            <div className="relative mt-16 mx-auto border-gray-800 border-[16px] max-2xl:border-[12px] max-xl:border-[10px] rounded-t-xl h-[406px] w-[704px] max-2xl:h-[345px] max-2xl:w-[597px] max-xl:h-[265px] max-xl:w-[480px] max-lg:h-[249px] max-lg:w-[432px]">
                <div className="rounded-xl overflow-hidden h-[374px] bg-white max-2xl:h-[320px] max-xl:h-[245px] max-lg:h-[229px]">
                    <p>Ceritanya Content</p>
                </div>
            </div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[24px] max-w-[704px] max-2xl:h-[20px] max-xl:h-[20px]"></div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[95px] max-w-[142px] max-2xl:w-[120px] max-xl:w-[87px] max-lg:w-[91px] max-2xl:h-[81px] max-xl:h-[41px] max-lg:h-[58px]"></div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl rounded-t-sm h-[21px] max-w-[597px] max-2xl:h-[18px] max-xl:h-[18px] max-lg:h-[13px]"></div>
        </>
    );
}

export default DesktopView;
