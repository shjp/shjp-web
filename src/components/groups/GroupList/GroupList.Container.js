import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { gql } from 'api/graphql';
import { getGroups } from 'store/actions/groups';
import GroupList from './GroupList';

function GroupListContainer({ getGroups, groups }) {

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

export default connect(
  state => ({ groups: state.groups.groups }),
  { getGroups }
)(GroupListContainer);
