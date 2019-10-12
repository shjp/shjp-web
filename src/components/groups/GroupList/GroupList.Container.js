import React, { memo, useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';
import GroupList from './GroupList';

function GroupListContainer() {
  const getGroups = useActions(actions => actions.groups.getGroups);
  const groups = useStore(state => state.groups.groups);

  useEffect(() => {
    getGroups();
  }, []);

  return <GroupList groups={groups} />;
}

export default memo(GroupListContainer);
