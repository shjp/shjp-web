export const permission = Object.freeze({
  READ: 'can_read',
  READ_MEMBERS: 'can_read_members',
  READ_COMMENTS: 'can_read_comments',
  WRITE_COMMENTS: 'can_write_comments',
  WRITE_ANNOUNCEMENTS: 'can_write_announcements',
  WRITE_EVENTS: 'can_write_events',
  ADMIN_GROUP: 'can_admin_group',
  EDIT_USERS: 'can_edit_users',
});

export const permissionLabels = Object.freeze({
  [permission.READ]: 'Read',
  [permission.READ_MEMBERS]: 'See Members',
  [permission.READ_COMMENTS]: 'Read Comments',
  [permission.WRITE_COMMENTS]: 'Write Comments',
  [permission.WRITE_ANNOUNCEMENTS]: 'Write Announcements',
  [permission.WRITE_EVENTS]: 'Write Events',
  [permission.ADMIN_GROUP]: 'Group Admin',
  [permission.EDIT_USERS]: 'Edit Users',
});
