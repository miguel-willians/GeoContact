import App from "@/pages/Main";
import ProtectedRoute from "@/ui/ProtectedRoute";

export default function Main() {
  return (
    <ProtectedRoute>
      <App />
    </ProtectedRoute>
  );
}
