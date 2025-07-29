import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";
import AuthHydration from "./utils/AuthHydration";

function App() {
  return (
    <UserProvider>
      <AuthHydration>
        <AppRoutes />
      </AuthHydration>
    </UserProvider>
  );
}

export default App;
