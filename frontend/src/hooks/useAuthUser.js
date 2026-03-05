import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const authUserQuery = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false,
    refetchOnWindowFocus: false, // tránh refetch linh tinh
    keepPreviousData: true, // 👈 giữ dữ liệu cũ khi refetch
  });

  return {
    isLoading: authUserQuery.isLoading,
    authUser: authUserQuery.data?.user,
  };
};
export default useAuthUser;
