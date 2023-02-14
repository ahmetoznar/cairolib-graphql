import { v4 as uuidv4 } from "uuid";
export const createUUID = (): string => uuidv4();

export * as tableIncludes from "./table-includes";

export const isFileValid = async (url) => {
  try {
    if (url.split("/")[2] == "raw.githubusercontent.com") {
      const res = await fetch(url);
      if (res.ok) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export function isHexString(str: string) {
  if (str === "") return true;
  return /^[0123456789abcdefABCDEF]+$/.test(str.slice(2));
}

export const controlSubLinks = (links: any) => {
  var err: boolean = false;
  for (let index = 0; index < links.length; index++) {
    if (err === true) {
      return false;
    } else {
      if (!isFileValid(links[index].url)) {
        err = true;
      } else {
        return true;
      }
    }
  }
};
