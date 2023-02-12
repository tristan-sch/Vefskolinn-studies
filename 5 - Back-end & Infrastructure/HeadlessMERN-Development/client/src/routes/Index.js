import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!navigate) return;
    navigate("/auth/login", { replace: true });
  }, [navigate]);

  return null;
}
