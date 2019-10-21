import Reactotron, {asyncStorage} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({host: '192.168.0.117'})
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .use(asyncStorage())
    .connect();

  console.tron = tron;

  console.tron.clear();
}
