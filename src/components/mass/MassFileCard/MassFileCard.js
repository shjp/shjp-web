import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './MassFileCard.scss';

function MassFileCard({ file = {} }) {
  const _getFileTypeStyle = fileType => {
    switch (fileType) {
      case 'ppt':
        return 'red';
      case 'image':
        return 'yellow';
      case 'txt':
        return 'blue';
      default:
        return 'black';
    }
  };

  return (
    <a className="mass-file-card col-sm-3" href={file.url}>
      <Card raised>
        <div className={`banner ${_getFileTypeStyle(file.type)}`} />
        <CardContent>
          <span>{file.name}</span>
        </CardContent>
      </Card>
    </a>
  );
}

export default memo(MassFileCard);
