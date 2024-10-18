import React from 'react'
import Input from '../../input-group/input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../services/redux/Store'
import { ADD_DOMAIN } from '../../../services/redux/template-slice/TemplateSlice'

const SubDomainForm = () => {
    const { domain } = useSelector((state: RootState) => state.template)
    const dispatch = useDispatch();

    const handleInputChange = (value: string) => {
        dispatch(ADD_DOMAIN(value));
    }
    return (
        <div className='flex flex-col gap-3'>
            <div>
                <h1 className='font-semibold text-lg text-custom-gray'>Custom your sub domain according to your wishes</h1>
                <p className='font-semibold text-sm text-[#a8a8a8]'>Only Subscribers can custom their sub domain<span className='text-custom-pink'>*</span></p>
            </div>
            <Input placeholder='custom (custom.ceritanikah)' onChange={(e) => handleInputChange(e.target.value)} value={domain}/>
        </div>
    )
}

export default SubDomainForm