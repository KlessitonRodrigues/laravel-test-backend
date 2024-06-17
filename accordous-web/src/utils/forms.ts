import { notify } from './notify';

export const onlyNumbers = (value: string) => {
  return value.replace(/\D/g, '');
};

export const isValidPassword = (value: string, confirm?: string) => {
  if (confirm && confirm !== value) return notify.warning('Passwords do not match');
  if (value.length < 8) return notify.warning('Password is too short');
  if (value.length > 30) return notify.warning('Password is too long');
  if (!value.match(/[A-Z]/))
    return notify.warning('Password must have at least one uppercase letter');
  if (!value.match(/[a-z]/))
    return notify.warning('Password must have at least one lowercase letter');
  if (!value.match(/[0-9]/)) return notify.warning('Password must have at least one number');
  return true;
};

export const isValidEmail = (value: string) => {
  if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    return notify.warning('Invalid email');
  return true;
};
