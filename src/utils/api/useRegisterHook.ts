import { useCallback, useState } from "react";
import { api } from "./api";
import { Response } from "../../types/response";

export const useRegisterHook = () => {
  const [res, setRes] = useState<Response>({
    success: false,
    loading: true,
    status: null,
  });
  const register = useCallback(async (payload) => {
    setRes({ success: false, loading: true, status: null });
    try {
      const response = await api.post("/auth/register", payload);
      if (response.status === 200) {
        //redux login
      }
      setRes({ success: true, loading: false, status: 200 });
    } catch (error) {
      setRes({ success: false, loading: false, status: error.response.status });
    }
  }, []);

  return { res, register };
};
