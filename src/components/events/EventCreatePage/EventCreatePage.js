import React, { memo, useState } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { DateTimePicker } from '@material-ui/pickers';
import LocationPicker from 'components/common/LocationPicker';
import useFormValidation, { FORM_VALIDATION_TYPE } from 'components/hooks/useFormValidation';

import './EventCreatePage.scss';

function EventCreatePage({ onSubmit }) {

  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ startDate, setStartDate ] = useState(null);
  const [ endDate, setEndDate ] = useState(null);
  const [ allowMaybe, setAllowMaybe ] = useState(false);
  const [ location, setLocation ] = useState(null);
  const [ locationDescription, setLocationDescription ] = useState('');

  const [ errors, checkErrors ] = useFormValidation([
    {
      key: 'name',
      label: 'Name',
      types: [
        FORM_VALIDATION_TYPE.NON_EMPTY
      ],
    },
    {
      key: 'startDate',
      label: 'Start Date',
      types: [
        FORM_VALIDATION_TYPE.NON_EMPTY
      ],
    },
  ]);

  const _validate = () => {
    return checkErrors({
      name,
      startDate,
      endDate,
    });
  };

  const _handleSubmit = () => {
    if (_validate()) {
      onSubmit({
        name,
        description,
        startDate,
        endDate,
        allowMaybe,
        location,
        locationDescription,
      });
    }
  };

  return (
    <div className="event-create-page">
      <h2>Create a new event</h2>
      <div className="field">
        <span className="label">Event Name</span>
        <TextField
          className="input"
          label="Name"
          value={name}
          error={!!errors.name}
          helperText={errors.name}
          onChange={evt => setName(evt.target.value)}
        />
      </div>
      <div className="field">
        <span className="label">Event Description</span>
        <TextField
          className="input"
          label="Description"
          value={description}
          multiline
          rows={4}
          error={!!errors.description}
          helperText={errors.description}
          onChange={evt => setDescription(evt.target.value)}
        />
      </div>
      <div className="field">
        <span className="label">Event Start</span>
        <DateTimePicker
          className="input"
          label="Start date"
          autoOk
          ampm
          value={startDate}
          error={!!errors.startDate}
          helperText={errors.startDate}
          onChange={setStartDate}
        />
      </div>
      <div className="field">
        <span className="label">Event End </span>
        <DateTimePicker
          className="input"
          label="End date"
          autoOk
          ampm
          value={endDate}
          error={!!errors.endDate}
          helperText={errors.endDate}
          onChange={setEndDate}
        />
      </div>
      <div className="field">
        <span className="label">Allow 'Maybe' RSVP option?</span>
        <Checkbox
          className={'input checkbox'}
          checked={allowMaybe}
          onChange={evt => setAllowMaybe(evt.target.checked)}
          color="primary"
        />
      </div>
      <div className="field">
        <span className="label">Location</span>
        <LocationPicker
          selectedPosition={location}
          onSelect={({ lat, lng, poi }) => {
            setLocation({ lat, lng });
            if (poi) {
              setLocationDescription(`${poi.name} - ${poi.formatted_address}`)
            }
          }}
        />
      </div>
      <div className="field">
        <span className="label">Location Description</span>
        <TextField
          className="input"
          label="Location Description"
          value={locationDescription}
          onChange={evt => setLocationDescription(evt.target.value)}
        />
      </div>
      <div className="actions">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={_handleSubmit}
        >
          Create
        </Button>
      </div>
    </div>
  );
}

export default memo(EventCreatePage);