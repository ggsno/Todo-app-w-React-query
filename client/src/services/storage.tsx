const storage = {
  get: ({ key }: { key: string }) => localStorage.getItem(key),
  set: ({ key, value }: { key: string; value: string }) =>
    localStorage.setItem(key, value),
  remove: ({ key }: { key: string }) => localStorage.removeItem(key),
};

export default storage;
