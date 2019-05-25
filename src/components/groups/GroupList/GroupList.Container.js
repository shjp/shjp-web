import React, { memo, useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';
import gql from 'api/gql';
import GroupList from './GroupList';

function GroupListContainer() {

  const getGroups = useActions(actions => actions.groups.getGroups);
  const groups = useStore(state => state.groups.groups);

  useEffect(() => {
    getGroups(gql`
      groups {
        id
        name
        description
        image_url
      }
    `);
  }, []);

  return (
    <GroupList groups={groups}/>
  );
}

export default memo(GroupListContainer);
