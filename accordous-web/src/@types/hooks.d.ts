declare namespace Hooks {
  type UseAccountContext = {
    user: Models.User | undefined;
    setUser: React.Dispatch<Models.Users>;
    loading: boolean;
  };
}
