import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';

import { apiClient, apiRoutes } from 'src/utils/axios/api';
import { getToken, logout, setToken } from 'src/utils/token';

// @ts-ignore
const AccountContext = createContext<Hooks.UseAccountContext>(null);

export const AccountProvider = (props: PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<Models.User>();

  useEffect(() => {
    const load = async () => {
      const token = getToken();
      if (!token) return logout();
      setLoading(true);
      const res = await apiClient.get(apiRoutes.authRefreshToken);
      setToken(res.data.token);
      setUser(res.data.user);
      setLoading(false);
    };
    load().catch(() => {
      logout();
      location.pathname = '/test';
    });
  }, []);

  const value = useMemo<Hooks.UseAccountContext>(() => {
    return {
      user,
      setUser,
      loading,
    };
  }, [user, loading]);

  return <AccountContext.Provider value={value}>{props.children}</AccountContext.Provider>;
};

const useAccount = () => useContext(AccountContext);
export default useAccount;
