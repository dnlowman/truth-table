import { createStore, compose } from 'redux';
import reducer from './reducer';
import DevTools from './DevTools';

const enhancer = compose(
  DevTools.instrument()
);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducer', () =>
      store.replaceReducer(require('./reducer'))
    );
  }

  return store;
}
