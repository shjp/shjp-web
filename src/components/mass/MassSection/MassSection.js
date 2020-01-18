import React, { memo } from 'react';
import { format } from 'date-fns';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MassFileCard from 'components/mass/MassFileCard';
import './MassSection.scss';

function formatTime(dateStr) {
  // Hacky but works for now
  return format(new Date(`${dateStr}T00:00:00-05:00`), 'MMMM do, y');
}

function MassSection({ mass = {} }) {
  const { date, files = [] } = mass;
  return (
    <Card className="mass-section" variant="outlined">
      <div className="date">{formatTime(date)}</div>
      <CardContent className="content">
        {files.map(file => (
          <MassFileCard key={file.url} file={file} />
        ))}
      </CardContent>
    </Card>
  );
}

export default memo(MassSection);
