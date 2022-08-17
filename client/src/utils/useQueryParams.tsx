import { useSearchParams } from "react-router-dom";

const useQueryParams = (key: string) => {
  const [searchParams] = useSearchParams();
  return searchParams.get(key);
};

export { useQueryParams };
