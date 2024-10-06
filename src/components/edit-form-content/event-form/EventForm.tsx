import React, { useState, ChangeEvent } from 'react'
import SwtichButton from '../../switch-button/SwitchButton'
import Input from '../../input-group/input/Input'
import { EventFormProps } from './EventForm.interface';
import DatePickerInput from '../../input-group/date-picker/DatePickerInput';
import TimeRangeInput from '../../input-group/time-range-input/TimeRangeInput';
import Textarea from '../../input-group/textarea/Textarea';

const EventForm = () => {
  const [selected, setSelected] = useState('Contract');
  const [eventDetails, setEventDetails] = useState<{
    contract: EventFormProps;
    reception: EventFormProps;
  }>({
    contract: {
      name: '',
      date: '',
      startTime: '',
      endTime: '',
      zoneTime: '',
      locationAddress: '',
      locationLink: ''
    },
    reception: {
      name: '',
      date: '',
      startTime: '',
      endTime: '',
      zoneTime: '',
      locationAddress: '',
      locationLink: ''
    }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, field: keyof EventFormProps) => {
    setEventDetails((prev) => ({
      ...prev,
      [selected.toLowerCase()]: {
        ...prev[selected.toLowerCase() as 'contract' | 'reception'],
        [field]: e.target.value
      }
    }));
  };

  const currentEvent = eventDetails[selected.toLowerCase() as 'contract' | 'reception'];

  return (
    <div className='overflow-y-auto scrollbar-hidden'>
      <SwtichButton selected={selected} setSelected={setSelected} option1='Contract' option2='Reception' />
      <div className='mt-10 flex flex-col gap-5'>
        <Input
          label="Event name (Optional)"
          placeholder={selected === 'Contract' ? 'Marriage Contract' : 'Marriage Reception'}
          value={currentEvent.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
        <DatePickerInput label='Event date' placeholder='mm/dd/yyyy' value={currentEvent.date} onChange={(e) => handleInputChange(e, 'date')} />
        <TimeRangeInput label1='Event Start Time' label2='Event End Time' value1={currentEvent.startTime} value2={currentEvent.endTime} placeholder1='00:00 AM' placeholder2='00:00 AM' onChange1={(e) => handleInputChange(e, 'startTime')} onChange2={(e) => handleInputChange(e, 'endTime')} />
        <Input label='Zone Time' placeholder='WIB, WIT, WITA, ET' value={currentEvent.zoneTime} onChange={(e) => handleInputChange(e, 'zoneTime')} />
        <Textarea label='Event Location Address' placeholder='Street, Province, State' value={currentEvent.locationAddress} onChange={(e) => handleInputChange(e, 'locationAddress')} />
        <Textarea label='Location Adress Link' placeholder='httsps://maps.app.goo.gl/' value={currentEvent.locationLink} onChange={(e) => handleInputChange(e, 'locationLink')} />
      </div>
    </div>
  )
}

export default EventForm