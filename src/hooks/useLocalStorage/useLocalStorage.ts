import { UseLocalStorage } from "./types";

const useLocalStorage: UseLocalStorage = (key) => {
  function getItem() {
    const val = localStorage.getItem(key);
    return typeof val === "string" ? JSON.parse(val) : null;
  }

  function setItem(val: string | string[] | object) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  return [getItem, setItem];
};

export default useLocalStorage;
