import { Entry } from "../useUserData/types";

export type UseLocalStorage = (
  key: string,
) => [() => Entry | null, (val: Entry) => void];
