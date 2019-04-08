import React, { memo } from 'react';

import './GroupCard.scss';

function GroupCard({ name, description, imageUrl }) {
  return (
    <div className="group-card-container">
      <div className="name">
        { name }
      </div>
      <div className="description">
        { description }
      </div>
    </div>
  );
}

export default memo(GroupCard);
