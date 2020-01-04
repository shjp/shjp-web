import React, { memo, useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';
import MassSection from 'components/mass/MassSection';
import './MassPage.scss';

const fake = [
  {
    date: '2020-01-20',
    files: [
      {
        type: 'ppt',
        name: 'Foo bar',
        url: 'http://www.google.com',
      },
      {
        type: 'image',
        name: 'Foo baz',
        url: 'http://www.google.com',
      },
      {
        type: 'txt',
        name: 'Foo bax',
        url: 'http://www.google.com',
      },
    ],
  },
  {
    date: '2020-01-27',
    files: [
      {
        type: 'ppt',
        name: 'Foo bar1',
        url: 'http://www.google.com',
      },
      {
        type: 'image',
        name: 'Foo baz1',
        url: 'http://www.google.com',
      },
      {
        type: 'txt',
        name: 'Foo bax1',
        url: 'http://www.google.com',
      },
    ],
  },
];

function MassPage() {
  const getMassFiles = useActions(actions => actions.massFiles.getMassFiles);
  const massFiles = useStore(state => state.massFiles.massFiles);

  useEffect(() => {
    getMassFiles();
  }, []);

  const masses = Object.entries(
    massFiles.reduce((acc, curr) => {
      acc[curr.date] = acc[curr.date] || [];
      acc[curr.date].push({ type: curr.type, name: curr.name, url: curr.url });
      return acc;
    }, {})
  )
    .map(([date, files]) => ({ date, files }))
    .sort((a, b) => a > b);

  return (
    <div className="mass-page">
      {masses.map(mass => (
        <MassSection mass={mass} />
      ))}
    </div>
  );
}

export default memo(MassPage);
