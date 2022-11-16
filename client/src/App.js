
import AppRouter from "./routes/AppRouter";
import AuthProvider from "./auth/AuthProvider";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
