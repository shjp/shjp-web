import { createStore } from 'easy-peasy';
import events from 'store/events';
import groups from 'store/groups';
import me from 'store/me';
import ui from 'store/ui';
import middlewares from 'store/middlewares';

const store = createStore({
  events,
  groups,
  me,
  ui,
}, {
  middleware: middlewares,
});

export default store;
