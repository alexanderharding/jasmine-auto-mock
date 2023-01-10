import { AnyObject } from "../models/any-object.type";

export function getMemberNames<T extends AnyObject>(
  object: T
): ReadonlyArray<keyof T> {
  let memberNames: ReadonlyArray<keyof T> = [];
  while (object && object !== Object.prototype) {
    const keys = Object.keys(object);
    const propertyNames = Object.getOwnPropertyNames(object);
    memberNames = [...memberNames, ...keys, ...propertyNames];
    object = Object.getPrototypeOf(object);
  }
  return [...new Set(memberNames)].filter((name) => name !== "constructor");
}
