import { useState } from "react";
import useUser from "../utils/auth/useUser";
import { backendUrl } from "../utils/env";

export const useFileUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { token } = useUser();

  const uploadFile = async (clientId: string, file: File) => {
    const formData = new FormData();
    formData.append("file", file, file.name);

    setLoading(true);
    setError(null);
    try {
      await fetch(`${backendUrl}fileUpload?clientId=${clientId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
    } catch (e) {
      console.error(e);
      setError(e);
      setLoading(false);
      return;
    }

    setError(null);
    setLoading(false);
  };

  return { uploadFile, loading, error, loaded: !loading && !error };
};
