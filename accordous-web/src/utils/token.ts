export const getToken = () => {
  try {
    return localStorage.getItem('authToken') || '';
  } catch {}
};

export const setToken = (token: string) => {
  try {
    localStorage.setItem('authToken', token);
  } catch {}
};

export const logout = () => {
  try {
    localStorage.setItem('authToken', '');
    if (window.location.pathname.includes('/app/')) {
      window.location.replace('/');
    }
  } catch {}
};
