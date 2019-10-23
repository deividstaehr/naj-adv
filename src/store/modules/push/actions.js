export function addNotification(notification) {
  return {
    type: '@push/ADD',
    payload: {notification},
  };
}

export function removeNotification() {
  return {
    type: '@push/REMOVE',
  };
}
