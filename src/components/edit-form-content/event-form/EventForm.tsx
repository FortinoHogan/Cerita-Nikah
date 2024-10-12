import React, { useState, ChangeEvent } from 'react';
import SwitchButton from '../../switch-button/SwitchButton';
import Input from '../../input-group/input/Input';
import DatePickerInput from '../../input-group/date-picker/DatePickerInput';
import TimeRangeInput from '../../input-group/time-range-input/TimeRangeInput';
import Textarea from '../../input-group/textarea/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import { SET_EVENT_CONTRACT, SET_EVENT_RECEPTION } from '../../../services/redux/template-slice/TemplateSlice';
import { RootState } from '../../../services/redux/Store';

const EventForm = () => {
  const [selected, setSelected] = useState('Contract');
  const { eventContract, eventReception } = useSelector((state: RootState) => state.template);
  const dispatch = useDispatch();

  const handleInputChange = (key: string, value: string) => {
    if(selected === 'Contract') {
      dispatch(SET_EVENT_CONTRACT({ eventContract: { ...eventContract, [key]: value } }));
    } else {
      dispatch(SET_EVENT_RECEPTION({ eventReception: { ...eventReception, [key]: value } }));
    }
  };

  return (
    <div className='overflow-y-auto scrollbar-hidden'>
      <SwitchButton selected={selected} setSelected={setSelected} option1='Contract' option2='Reception' />
      <div className='mt-10 flex flex-col gap-5'>
        <Input
          label="Event name (Optional)"
          placeholder={selected === 'Contract' ? 'Marriage Contract' : 'Marriage Reception'}
          value={selected === 'Contract' ? eventContract.eventName : eventReception.eventName}
          onChange={(e) => handleInputChange('eventName', e.target.value)}
        />
        <DatePickerInput
          label='Event date'
          placeholder='mm/dd/yyyy'
          value={selected === 'Contract' ? eventContract.eventDate : eventReception.eventDate}
          onChange={(e) => handleInputChange('eventDate', e.target.value)}
        />
        <TimeRangeInput
          label1='Event Start Time'
          label2='Event End Time'
          value1={selected === 'Contract' ? eventContract.eventStartTime : eventReception.eventStartTime}
          value2={selected === 'Contract' ? eventContract.eventEndTime : eventReception.eventEndTime}
          placeholder1='00:00 AM'
          placeholder2='00:00 AM'
          onChange1={(e) => handleInputChange('eventStartTime', e.target.value)}
          onChange2={(e) => handleInputChange('eventEndTime', e.target.value)}
        />
        <Input
          label='Zone Time'
          placeholder='WIB, WIT, WITA, ET'
          value={selected === 'Contract' ? eventContract.zoneTime : eventReception.zoneTime}
          onChange={(e) => handleInputChange('zoneTime', e.target.value)}
        />
        <Textarea
          label='Event Location Address'
          placeholder='Street, Province, State'
          value={selected === 'Contract' ? eventContract.locationAddress : eventReception.locationAddress}
          onChange={(e) => handleInputChange('locationAddress', e.target.value)}
        />
        <Textarea
          label='Location Address Link'
          placeholder='https://maps.app.goo.gl/'
          value={selected === 'Contract' ? eventContract.locationLink : eventReception.locationLink}
          onChange={(e) => handleInputChange('locationLink', e.target.value)}
        />
      </div>
    </div>
  );
};

export default EventForm;
