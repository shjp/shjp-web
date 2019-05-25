export default function logger({ getState }) {
  return next => action => {
    console.group('STATE CHANGE');
    console.log('[%cAction%c]:', 'color: blue; font-weight: bold;', 'color: black; font-weight: normal;', action);

    const returnValue = next(action)

    console.log('[%cState%c]:', 'color: green; font-weight: bold;', 'color: black; font-weight: normal;', getState());
    console.groupEnd();

    return returnValue
  };
}
