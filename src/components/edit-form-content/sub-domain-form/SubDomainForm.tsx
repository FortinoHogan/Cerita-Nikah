import React, { useState } from 'react'
import Input from '../../input-group/input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../services/redux/Store'
import { ADD_DOMAIN } from '../../../services/redux/template-slice/TemplateSlice'
import { isSubDomainAlreadyTaken } from '../../../services/template-personalized/TemplateService'

const SubDomainForm = () => {
    const [isAlreadyTaken, setIsAlreadyTaken] = useState(false);
    const { domain } = useSelector((state: RootState) => state.template)
    const dispatch = useDispatch();

    const handleInputChange = (value: string) => {
        dispatch(ADD_DOMAIN(value));
        isSubDomainAlreadyTaken(value + '.ceritanikah.online').then(result => {
            setIsAlreadyTaken(result);
        });
    }
    return (
        <div className='flex flex-col gap-3'>
            <div>
                <h1 className='font-semibold text-lg text-custom-gray'>Custom your sub domain according to your wishes</h1>
                <p className='font-semibold text-sm text-[#a8a8a8]'>Only Subscribers can custom their sub domain<span className='text-custom-pink'>*</span></p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='relative flex flex-col gap-1 w-full'>
                    <input
                        type="text"
                        value={domain}
                        onChange={(e) => handleInputChange(e.target.value)}
                        className={`pr-44 w-full outline-none rounded-lg p-3 font-semibold text-custom-gray border-custom-pink border-[1px]`}
                    />
                    <p className='absolute top-3 right-3 text-custom-gray font-semibold'>.ceritanikah.online</p>
                </div>
                {isAlreadyTaken ? (
                    <img src="assets/images/sub-domain-unavailable.png" alt="" className='w-5' />
                ) : (
                    <img src="assets/images/sub-domain-available.png" alt="" className='w-5' />
                )}
            </div>
        </div>
    )
}

export default SubDomainForm