export type ReadonlyDictionary<K extends keyof any, V> = Readonly<
  Partial<Record<K, V>>
>;
