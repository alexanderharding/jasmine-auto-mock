import { AnyObject } from '../models/any-object.type';

export function getPropertyDescriptor<T extends AnyObject>(
  object: T,
  propertyName: keyof T
): PropertyDescriptor | undefined {
  let descriptor: PropertyDescriptor | undefined;
  do descriptor = Object.getOwnPropertyDescriptor(object, propertyName);
  while (!descriptor && (object = Object.getPrototypeOf(object)));
  return descriptor;
}
