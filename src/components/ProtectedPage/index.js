import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

export function ProtectedPage({ children }) {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth.signed) {
      navigate('/');
    }
  }, [auth, navigate]);

  return children;
}
