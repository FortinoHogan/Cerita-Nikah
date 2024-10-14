import React from 'react'
import { IAccount } from '../account-card/IAccountCard'
import { useDispatch } from 'react-redux'
import { ADD_ACCOUNT, DELETE_ACCOUNT } from '../../services/redux/template-slice/TemplateSlice'

const AccountCardFilled = (props: IAccount) => {
    const { accountId, accountNumber, bankName } = props
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(ADD_ACCOUNT(props));
        dispatch(DELETE_ACCOUNT(accountId));
    }

    const handleDelete = () => {
        dispatch(DELETE_ACCOUNT(accountId));
    }
    return (
        <div className='border-b-2 border-custom-pink p-3 px-5 flex items-center justify-between'>
            <p className='font-semibold text-custom-gray'>{bankName} - {accountNumber}</p>
            <div className='flex gap-3'>
                <img src="assets/images/edit.png" alt="edit" className='w-6 h-6 cursor-pointer' onClick={handleEdit} />
                <img src="assets/images/delete.png" alt="delete" className='w-5 cursor-pointer' onClick={handleDelete} />
            </div>
        </div>
    )
}

export default AccountCardFilled