import { Store, iNotification } from 'react-notifications-component';

const notification: iNotification = {
  title: '',
  message: '',
  type: 'default',
  insert: 'top',
  container: 'top-right',
  dismiss: {
    duration: 5000,
    onScreen: true,
    showIcon: true,
    pauseOnHover: true,
  },
};

export const notify = {
  success: (msg: string) => {
    Store.addNotification({ ...notification, title: 'Success', message: msg, type: 'success' });
  },
  info: (msg: string) => {
    Store.addNotification({ ...notification, title: 'Information', message: msg, type: 'info' });
  },
  error: (msg: string) => {
    Store.addNotification({ ...notification, title: 'Error', message: msg, type: 'danger' });
  },
  warning: (msg: string) => {
    Store.addNotification({ ...notification, title: 'Warning', message: msg, type: 'warning' });
  },
};
