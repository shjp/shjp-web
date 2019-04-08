import {
  GET_GROUPS
} from 'store/actionTypes';

const getInitialState = () => ({
  groups: []
});

const groupsReducer = (state = getInitialState(), action) => {
  switch(action.type) {
    case GET_GROUPS:
      return { ...state, groups: action.groups };
    default:
      return state;
  }
};

export default groupsReducer;
