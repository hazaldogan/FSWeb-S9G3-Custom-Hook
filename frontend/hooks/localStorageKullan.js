import { useState } from "react";

export const localStorageKullan = (key, value, baslangicDegeri) => {
  const [data, setData] = useState(baslangicDegeri ? baslangicDegeri : value);
  const updateStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setData(newValue);
  };
  return [data, updateStorage];
};
