import { action, thunk } from 'easy-peasy';
import client from 'api/graphql';
import uploaderClient from 'api/uploader';
import gql from 'api/gql';

export default {
  // store
  group: {},
  groups: [],

  // actions
  handleGetGroupDetails: action((state, { group = {} }) => {
    state.group = group;
  }),

  handleGetGroups: action((state, { groups = [] }) => {
    state.groups = groups;
  }),

  // thunks
  getGroupDetails: thunk(async (actions, groupId, { dispatch }) => {
    const [data, err] = await client.query(gql`
      group(id: ${groupId}) {
        id
        name
        description
        image_url
        members {
          id
          name
          role_name
          status
        }
        roles {
          id
          name
          permissions {
            can_read
            can_read_members
            can_read_comments
            can_write_comments
            can_write_announcements
            can_write_events
            can_admin_group
            can_edit_users
          }
        }
      }
    `);
    if (err) {
      dispatch.ui.showSnackbar({
        variant: 'error',
        message: 'Error fetching group details: ' + err,
      });
      actions.handleGetGroupDetails({});
      return;
    }
    actions.handleGetGroupDetails(data);
  }),

  getGroups: thunk(async (actions, query, { dispatch }) => {
    const [data, err] = await client.query(gql`
      groups {
        id
        name
        description
        image_url
      }
    `);
    if (err) {
      dispatch.ui.showSnackbar({ variant: 'error', message: 'Error fetching groups: ' + err });
      actions.handleGetGroups({});
      return;
    }
    actions.handleGetGroups(data);
  }),

  createGroup: thunk(async (actions, payload, { dispatch }) => {
    let [data, err] = await client.mutate(gql`
      createGroup(
        name: ${payload.name}
        description: ${payload.description}
      ) {
        ref_id
      }
    `);
    if (err) {
      console.error('[groups.createGroup] error from server: ', err);
      dispatch.ui.showSnackbar({
        variant: 'error',
        message: 'Group failed to be submitted for creation',
      });
      return err;
    }

    if (payload.image) {
      [data, err] = await uploaderClient.uploadImage({
        entityType: 'group',
        relationType: 'profile',
        file: payload.image,
      });
      if (err) {
        console.error('[groups.createGroup] error from server:', err);
        dispatch.ui.showSnackbar({
          variant: 'error',
          message: 'Group profile image failed to be submitted',
        });
        return err;
      }
    }
    dispatch.ui.showSnackbar({ variant: 'success', message: 'Group submitted for creation' });
  }),

  createGroupRole: thunk(async (actions, payload, { dispatch }) => {
    const { name, groupId, permissions } = payload;
    const {
      can_read,
      can_read_members,
      can_read_comments,
      can_write_comments,
      can_write_announcements,
      can_write_events,
      can_admin_group,
      can_edit_users,
    } = permissions;
    const [data, err] = await client.mutate(gql`
      createRole(
        name: ${name}
        group_id: ${groupId}
        can_read: ${can_read}
        can_read_members: ${can_read_members}
        can_read_comments: ${can_read_comments}
        can_write_comments: ${can_write_comments}
        can_write_announcements: ${can_write_announcements}
        can_write_events: ${can_write_events}
        can_admin_group: ${can_admin_group}
        can_edit_users: ${can_edit_users}
      ) {
        ref_id
      }
    `);
    if (err) {
      dispatch.ui.showSnackbar({ variant: 'error', message: 'Error creating group role: ' + err });
      return;
    }
    dispatch.ui.showSnackbar({ variant: 'success', message: 'Group role submitted for creation' });
    dispatch.groups.getGroupDetails(groupId);
  }),

  changeGroupMemberStatus: thunk(async (actions, payload, { dispatch, getStoreState }) => {
    const { userId, roleId, groupId, status } = payload;
    const accessToken = getStoreState().me.accessToken;

    const [data, err] = await client.mutate(
      gql`
      changeGroupMemberStatus(
        user_id: ${userId}
        role_id: ${roleId}
        group_id: ${groupId}
        status: ${status}
      ) {
        ref_id
      }
    `,
      accessToken
    );
    if (err) {
      dispatch.ui.showSnackbar({
        variant: 'error',
        message: 'Error updating member status: ' + err,
      });
      return;
    }
    dispatch.ui.showSnackbar({
      variant: 'success',
      message: 'Group member status change submitted',
    });
    dispatch.groups.getGroupDetails(groupId);
  }),
};
