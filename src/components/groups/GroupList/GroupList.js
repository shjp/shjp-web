import React, { memo } from 'react';

import GroupCard from 'components/groups/GroupCard';

import './GroupList.scss';

function GroupList({ groups }) {
  return (
    <div>
      Groups
      {
        groups.map((group, index) =>
          <GroupCard
            key={index}
            id={group.id}
            name={group.name}
            description={group.description}
            imageUrl={group.image_url}/>
        )
      }
    </div>
  );
}

export default memo(GroupList);