import { localStorageKullan } from "./localStorageKullan";

export const geceModuAc = (dark) => {
  /*  const [geceModu, setGeceModu] = useState(dark); */
  const [geceModu, setGeceModu] = localStorageKullan("geceModu", "", dark);
  const darkChange = (e) => {
    setGeceModu(e);
  };
  return [geceModu, darkChange];
};
