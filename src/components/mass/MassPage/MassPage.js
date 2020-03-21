import React, { memo, useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';
import Button from '@material-ui/core/Button';
import MassSection from 'components/mass/MassSection';
import './MassPage.scss';

const getToday = () => {
  const rawToday = new Date();
  let month = rawToday.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let date = rawToday.getUTCDate();
  if (date < 10) {
    date = `0${date}`;
  }
  return `${rawToday.getFullYear()}-${month}-${date}`;
};

function MassPage({ history, match }) {
  const getMassFiles = useActions(actions => actions.massFiles.getMassFiles);
  const massFiles = useStore(state => state.massFiles.massFiles);

  const _scrollToMassSection = (id, duration) => {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    const targetY = window.pageYOffset + el.getBoundingClientRect().top;
    const startingY = window.pageYOffset;
    let start;
    window.requestAnimationFrame(function iter(timestamp) {
      if (!start) {
        start = timestamp;
      }
      let step = timestamp - start;
      let percent = Math.min(step / duration, 1);

      window.scrollTo(0, startingY + (targetY - startingY) * percent);

      if (step < duration) {
        window.requestAnimationFrame(iter);
      }
    });
  };

  const _getNextMassDate = ms => {
    const today = getToday();
    const futureMasses = ms.filter(mass => mass.date >= today);
    if (futureMasses.length === 0) {
      return ms[0];
    }
    return futureMasses.sort((a, b) => (a.date < b.date ? -1 : 1))[0].date;
  };

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
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  useEffect(() => {
    if (masses.length) {
      _scrollToMassSection(_getNextMassDate(masses), 1000);
    }
  }, [masses]);

  return (
    <div className="mass-page">
      {/* TODO: put this back once mass file upload is complete */}
      {/* <div className="mass-page-create-button">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={() => history.push(`${match.url}/upload`)}
        >
          Upload Mass File
        </Button>
      </div> */}
      {masses.map(mass => (
        <div key={mass.date} id={mass.date}>
          <MassSection mass={mass} />
        </div>
      ))}
    </div>
  );
}

export default memo(MassPage);
