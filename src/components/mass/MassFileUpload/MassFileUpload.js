import React, { memo, useState } from 'react';
import { useActions } from 'easy-peasy';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import { decorate, withPermission } from 'decorators';
import { permission } from 'enums/permission';
import useFormValidation, { FORM_VALIDATION_TYPE } from 'components/hooks/useFormValidation';

import './MassFileUpload.scss';

function MassFileUpload({ history }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [file, setFile] = useState(null);

  const [errors, checkErrors] = useFormValidation([
    {
      key: 'name',
      label: 'Name',
      types: [FORM_VALIDATION_TYPE.NON_EMPTY],
    },
    {
      key: 'date',
      label: 'Date',
      types: [FORM_VALIDATION_TYPE.NON_EMPTY],
    },
    {
      key: 'file',
      label: 'File',
      types: [FORM_VALIDATION_TYPE.NON_EMPTY],
    },
  ]);

  const submitFileUpload = useActions(actions => actions.massFiles.upload);

  const _validate = () => {
    return checkErrors({
      name,
      date,
      file,
    });
  };

  const _onMassFileUploadSubmit = async () => {
    if (_validate()) {
      const err = await submitFileUpload({
        name,
        date,
        file,
      });
      if (!err) {
        history.push('/mass');
      }
    }
  };

  return (
    <div className="mass-file-upload">
      <h2>Upload a mass file</h2>
      <div className="field">
        <span className="label">File Name</span>
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
        <span className="label">Date</span>
        <MaskedInput
          guide
          mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
          className="input date form-control"
          placeholder="Enter the mass date"
          onChange={evt => setDate(evt.target.value)}
        />
      </div>
      <div className="field">
        <span className="label">File</span>
        <input className="input file" type="file" />
      </div>
    </div>
  );
}

export default decorate(memo /*withPermission(permission.WRITE_EVENTS)*/)(MassFileUpload);
