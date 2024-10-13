import React, { ChangeEvent, useState } from 'react'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../services/redux/Store'
import { ADD_ACCOUNT, REMOVE_ACCOUNT, SAVE_ACCOUNT, SET_ACCOUNT } from '../../services/redux/template-slice/TemplateSlice'
import Input from '../input-group/input/Input'
import DropdownList from '../input-group/drop-down-list/DropdownList'
import { AccountBankData } from './AccountBank.data'
import { IAccount } from './IAccountCard'

const AccountCard = (props: IAccount) => {
    const { accountId, accountNumber, bankName } = props
    const dispatch = useDispatch();
    const data = AccountBankData

    const handleSubmit = () => {
        dispatch(REMOVE_ACCOUNT(accountId));
        dispatch(SAVE_ACCOUNT(props));
    }

    const handleDelete = () => {
        dispatch(REMOVE_ACCOUNT(accountId));
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SET_ACCOUNT({ ...props, accountNumber: e.target.value }));
    }

    const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(SET_ACCOUNT({ ...props, bankName: e.target.value }));
    }

    return (
        <div className="flex flex-col gap-3 w-full outline-none rounded-xl p-3 font-semibold text-custom-gray border-custom-pink border-[3px] overflow-y-auto scrollbar-hidden">
            <div className='flex items-center justify-between gap-5'>
                <div className='w-[50%]'>
                    <Input label="Account Number" value={accountNumber} placeholder="0123456789" onChange={handleInputChange} />
                </div>
                <div className='w-[50%]'>
                    <DropdownList options={data} value={bankName} onChange={handleDropdownChange} label='Bank' />
                </div>
            </div>
            <div className="flex gap-5 mt-5">
                <div className="flex items-center justify-center p-3 rounded-xl w-14 border-[3px] border-custom-pink cursor-pointer" onClick={handleDelete}>
                    <img src="assets/images/delete.png" alt="delete" className="w-6" />
                </div>
                <Button children="Submit Account" onClick={handleSubmit} className="w-full text-white" />
            </div>
        </div>
    )
}

export default AccountCard