import React, { useState } from 'react'
import { templatesData } from './Templates.data';
import Button from '../../button/Button';
import SwtichButton from '../../switch-button/SwitchButton';

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
    const [selected, setSelected] = useState('Free Spirit');
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
                    <SwtichButton selected={selected} setSelected={setSelected} option1='Free Spirit' option2='Do It Yourself'/>
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