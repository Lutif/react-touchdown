import { useCallback, useState } from "react";
import { api } from "./api";
import { Response } from "../../types/response";
import { performLogin, performLogout } from "../../store";
import { useDispatch } from "react-redux";

export const useGetMeHook = () => {
  const dispatch = useDispatch();

  const [res, setRes] = useState<Response>({
    success: false,
    loading: true,
    status: null,
  });

  const getMe = useCallback(async () => {
    setRes({ success: false, loading: true, status: null });
    try {
      const response = await api.get("/user/me");
      dispatch(performLogin(response.data));
      setRes({ success: true, loading: false, status: response.status });
    } catch (error) {
      setRes({
        success: false,
        loading: false,
        status: error.response.status,
      });
      dispatch(performLogout());
    }
  }, []);

  return { res, getMe };
};
