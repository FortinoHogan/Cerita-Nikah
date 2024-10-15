import React, { ChangeEvent } from 'react'
import ImageInput from '../../image-input/ImageInput'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../services/redux/Store';
import ImagePreview from '../../image-preview/ImagePreview';
import { ADD_ACCOUNT, DELETE_QRIS, SET_QRIS } from '../../../services/redux/template-slice/TemplateSlice';
import { v4 as uuidv4 } from 'uuid';
import AccountCard from '../../account-card/AccountCard';
import { IAccount } from '../../account-card/IAccountCard';
import AccountCardFilled from '../../account-card-filled/AccountCardFilled';

const AngpaoForm = () => {
  const { qris, accounts, accountsSaved } = useSelector((state: RootState) => state.template);
  const dispatch = useDispatch();

  const newCard = (): IAccount => ({
    accountId: uuidv4(),
    accountNumber: '',
    bankName: 'BCA',
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const coverUrl = URL.createObjectURL(file);
      dispatch(SET_QRIS(coverUrl));
    }
  };

  const handleAddNewCard = () => {
    dispatch(ADD_ACCOUNT(newCard()));
  };

  const handleDeleteImage = () => {
    dispatch(DELETE_QRIS());
  };

  return (
    <div className='flex flex-col gap-2 overflow-y-auto scrollbar-hidden'>
      <h1 className='font-semibold text-custom-gray'>Upload your QRIS image to receive angpao transfers easily</h1>
      <p className='font-semibold text-sm text-[#a8a8a8]'>Only Subscribers can activated RSVP feature<span className='text-custom-pink'>*</span></p>
      {qris ? <ImagePreview image={qris} handleDeleteImage={handleDeleteImage} /> : <ImageInput handleImageChange={handleImageChange} />}
      <div className='flex flex-col gap-3 mt-8'>
        {<div className='flex items-center justify-center gap-2 cursor-pointer' onClick={handleAddNewCard}>
          <hr className="h-[2px] w-full bg-custom-pink border-0 rounded-sm" />
          <img src="assets/images/select-pink.png" alt="add" className="w-4" />
          <p className='text-custom-pink font-semibold min-w-28'>Add account</p>
          <hr className="h-[2px] w-full bg-custom-pink border-0  rounded-sm" />
        </div>}
        {accounts && accounts.map((account) => <AccountCard key={account.accountId} {...account}/>)}
        {accountsSaved && accountsSaved.map((account) => <AccountCardFilled key={account.accountId} {...account}/>)}
      </div>
    </div>
  )
}

export default AngpaoForm