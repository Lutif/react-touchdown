import { useCallback, useState } from "react";
import { api } from "./api";
import { Response } from "../../types/response";
import { performLogout } from "../../store";
import { useDispatch } from "react-redux";

export const useLogoutHook = () => {
  const dispatch = useDispatch();

  const [res, setRes] = useState<Response>({
    success: false,
    loading: true,
    status: null,
  });

  const logout = useCallback(async () => {
    setRes({ success: false, loading: true, status: null });
    try {
      const response = await api.delete("/auth/logout");
      dispatch(performLogout());
      setRes({ success: true, loading: false, status: 200 });
    } catch (error) {
      dispatch(performLogout());
      setRes({
        success: false,
        loading: false,
        status: error.response.status,
      });
    }
  }, []);

  return { res, logout };
};
