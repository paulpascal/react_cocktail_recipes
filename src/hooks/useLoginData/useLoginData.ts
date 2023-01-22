import useLocalStorage from "../useLocalStorage/useLocalStorage";

import { Entry } from "../useUserData/types";

function useLoginData() {
  const [getLogin, setLogin] = useLocalStorage("login");
  const [getUsers, setUsers] = useLocalStorage("users");

  function getUsersData() {
    const users = getUsers();
    if (!users || typeof users !== "object" || Array.isArray(users)) return;

    return users;
  }

  function getLastLogin(): string | undefined {
    const login = getLogin();

    return signIn(login);
  }

  function setLastLogin(login: string) {
    setLogin(login);
  }

  function register(login: string, pass: string): string | undefined {
    const users = getUsersData();
    // is there a Users obj?
    if (users) {
      // does the login already exist?
      if (login in users) {
        return;
      } else {
        users[login] = { password: pass, favs: {}, history: [] };
        setUsers(users);
      }
      // create new Users obj
    } else {
      const newUsers = Object.create(null);
      const firstUser = {
        password: pass,
        favs: {},
        history: [],
      };
      newUsers[login] = firstUser;
      setUsers(newUsers);
    }

    return login;
  }

  function signIn(login: Entry | null): string | undefined {
    const users = getUsers();

    // check if the login is valid and exists in Users
    if (
      !!login &&
      typeof login === "string" &&
      typeof users === "object" &&
      users !== null &&
      !Array.isArray(users) &&
      login in users
    ) {
      return login;
    }
  }

  return { register, signIn, getLastLogin, setLastLogin };
}

export default useLoginData;
