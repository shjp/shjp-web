import React, { memo, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ImageUploader from 'react-images-upload';

import useFormValidation, { FORM_VALIDATION_TYPE } from 'components/hooks/useFormValidation';

import './GroupCreatePage.scss';

function GroupCreatePage({ onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [errors, checkErrors] = useFormValidation([
    {
      key: 'name',
      label: 'Name',
      types: [FORM_VALIDATION_TYPE.NON_EMPTY],
    },
  ]);

  const _validate = () => {
    return checkErrors({
      name,
    });
  };

  const _onImageSelected = files => {
    // Set the most recently selected file
    const file = files[files.length - 1];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const _handleSubmit = () => {
    if (_validate()) {
      onSubmit({
        name,
        description,
        image,
      });
    }
  };

  return (
    <div className="group-create-page">
      <h2>Create a new group</h2>
      <div className="field">
        <span className="label">Group Name</span>
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
        <span className="label">Group Description</span>
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
        <span className="label">Group Profile Image</span>
        <div>
          <ImageUploader
            singleImage
            buttonText="Choose image"
            onChange={_onImageSelected}
            imgExtension={['.jpg', 'jpeg', '.png']}
            maxFileSize={5242880}
          />
          {imageUrl && (
            <div>
              <img src={imageUrl} />
            </div>
          )}
        </div>
      </div>
      <div className="actions">
        <Button variant="contained" color="secondary" size="large" onClick={_handleSubmit}>
          Create
        </Button>
      </div>
    </div>
  );
}

export default memo(GroupCreatePage);
