import { useCallback, useState } from "react";
import { api } from "./api";
import { Response } from "../../types/response";
import { performLogin, performLogout } from "../../store";
import { useDispatch } from "react-redux";

export const useLoginHook = () => {
  const dispatch = useDispatch();

  const [res, setRes] = useState<Response>({
    success: false,
    loading: true,
    status: null,
  });

  const login = useCallback(async (payload) => {
    setRes({ success: false, loading: true, status: null });
    try {
      const response = await api.post("/auth/login", payload);
      dispatch(performLogin(response.data));
      setRes({ success: true, loading: false, status: 200 });
    } catch (error) {
      setRes({
        success: false,
        loading: false,
        status: error.response.status,
      });
      dispatch(performLogout());
    }
  }, []);

  return { res, login };
};
