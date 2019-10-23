import produce from 'immer';

const INITIAL_STATE = {
  notification: null,
  has: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@push/ADD': {
        draft.notification = action.payload.notification;
        draft.has = true;
        break;
      }
      case '@push/REMOVE': {
        draft.notification = null;
        draft.has = false;
        break;
      }
      default:
    }
  });
}
