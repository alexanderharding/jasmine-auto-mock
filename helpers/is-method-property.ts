import { getPropertyDescriptor } from "./get-property-descriptor";
import { AnyObject } from "../models/any-object.type";

export function isMethodProperty<T extends AnyObject>(
  object: T,
  propertyName: keyof T
): boolean {
  let value: T[keyof T];
  try {
    value = object[propertyName];
  } catch {
    return false;
  }
  if (!(typeof value === "function")) return false;
  const descriptor = getPropertyDescriptor(object, propertyName);
  return (
    (!!descriptor?.writable || !!descriptor?.set) && !!descriptor?.configurable
  );
}
