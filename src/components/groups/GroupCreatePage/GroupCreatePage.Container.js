import React, { memo } from 'react';
import { useActions } from 'easy-peasy';
import { decorate, withPermission } from 'decorators';
import { permission } from 'enums/permission';
import GroupCreatePage from './GroupCreatePage';

function GroupCreatePageContainer({ history }) {
  const createGroup = useActions(actions => actions.groups.createGroup);

  const _onGroupCreateSubmit = async group => {
    const err = await createGroup(group);
    if (!err) {
      history.push('/groups');
    }
  };

  return <GroupCreatePage onSubmit={_onGroupCreateSubmit} />;
}

//export default decorate(memo, withPermission(permission.EDIT_USERS))(GroupCreatePageContainer);
export default GroupCreatePageContainer;
