import React, { useState } from 'react'
import { templatesData } from './Templates.data';
import Button from '../../button/Button';

const SwtichButton = ({ selected, setSelected }: { selected: string, setSelected: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div className='relative w-full flex items-center justify-center border-2 rounded-lg border-custom-pink cursor-pointer py-[4px] font-semibold mb-3'>
            <div
                className={`absolute left-0 top-0 rounded-[0.25rem] h-full w-[50%] bg-custom-pink transition-all duration-300 ${selected === 'doItYourself' ? 'translate-x-full rounded-tl-none rounded-bl-none' : 'translate-x-0 rounded-tr-none rounded-br-none'}`}
            ></div>
            <div
                className={`w-[50%] text-center z-10 transition-colors duration-300 ${selected === 'freeSpirit' ? 'text-white' : 'text-custom-pink'
                    }`}
                onClick={() => setSelected('freeSpirit')}
            >
                Free Spirit
            </div>
            <div
                className={`w-[50%] text-center z-10 transition-colors duration-300 ${selected === 'doItYourself' ? 'text-white' : 'text-custom-pink'
                    }`}
                onClick={() => setSelected('doItYourself')}
            >
                Do It Yourself
            </div>
        </div>
    )
}

const ConfirmationTemplate = ({ title, image, onClick }: { title: string, image?: string, onClick: () => void }) => {
    return (
        <div>
            <p className='font-semibold text-custom-gray pr-16 mb-2'><span className='text-custom-pink'>"{title}"</span> is selected as your wedding invitation</p>
            {/* GANTI IMAGE KALO UDAH ADA*/}
            <div className='flex flex-col gap-8'>
                <div className='bg-[#d9d9d9] rounded-xl h-72'></div>
                <Button onClick={onClick} text='Change Template' className='w-full text-custom-white font-semibold' />
            </div>
        </div>
    )
}

const TemplatesForm = () => {
    const [selected, setSelected] = useState('freeSpirit');
    const [templateSelected, setTemplateSelected] = useState('');
    const data = templatesData

    const changeTempalte = () => {
        setTemplateSelected('')
    }

    return (
        <div className='overflow-y-auto scrollbar-hidden flex flex-col gap-7'>
            {templateSelected ? <ConfirmationTemplate title={templateSelected} image={data.find((item) => item.title === templateSelected)?.image} onClick={changeTempalte}/>
                :
                <>
                    <SwtichButton selected={selected} setSelected={setSelected} />
                    {data.map((item, index) => (
                        <div key={index} className='flex flex-col gap-3 cursor-pointer' onClick={() => setTemplateSelected(item.title)}>
                            <h1 className='font-semibold text-custom-gray'>{item.title}</h1>
                            {/* GANTI IMAGE KALO UDAH ADA*/}
                            <div className='bg-[#d9d9d9] rounded-xl h-72'></div>
                        </div>
                    ))}
                </>
            }
        </div>
    )
}

export default TemplatesForm