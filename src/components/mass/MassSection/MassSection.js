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
      <div className="date">{format(new Date(date), 'MMMM do, y')}</div>
      <CardContent className="content">
        {files.map(file => (
          <MassFileCard file={file} />
        ))}
      </CardContent>
    </Card>
  );
}

export default memo(MassSection);
