import React, { memo } from 'react';
import { format } from 'date-fns';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MassFileCard from 'components/mass/MassFileCard';
import './MassSection.scss';

function MassSection({ mass = {} }) {
  const { date, files = [] } = mass;
  return (
    <Card className="mass-section" variant="outlined">
      <div className="date">
        {// Hacky but works for now
        format(new Date(`${date} 00:00:00 GMT-0500`), 'MMMM do, y')}
      </div>
      <CardContent className="content">
        {files.map(file => (
          <MassFileCard key={file.url} file={file} />
        ))}
      </CardContent>
    </Card>
  );
}

export default memo(MassSection);
