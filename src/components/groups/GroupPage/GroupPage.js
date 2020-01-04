import React, { memo } from 'react';
import GroupList from 'components/groups/GroupList';
import GroupPageActions from 'components/groups/GroupPageActions';

import './GroupPage.scss';

function GroupPage({ history, match }) {
  return (
    <div className="group-page">
      <GroupPageActions onCreateButtonClicked={() => history.push(`${match.url}/create`)} />
      <GroupList />
    </div>
  );
}

export default memo(GroupPage);
