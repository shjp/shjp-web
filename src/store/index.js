import { createStore } from 'easy-peasy';
import events from 'store/events';
import groups from 'store/groups';
import me from 'store/me';
import ui from 'store/ui';
import loader from 'store/loader';
import middlewares from 'store/middlewares';

const store = createStore({
  events,
  groups,
  me,
  ui,
  loader,
}, {
  middleware: middlewares,
});

export default store;
