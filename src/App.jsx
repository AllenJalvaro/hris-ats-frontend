import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/hris/dashboard/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/hris" />} />
        <Route
          path="/hris"
          element={
            <MainLayout
              title="HRIS Dashboard"
              description="Short Description dito"
            >
              <Dashboard />
            </MainLayout>
          }
        />
         <Route
          path="/hris-employees"
          element={
            <MainLayout
              title="HRIS Dashboard"
              description="Short Description dito"
            >
              <Dashboard />
            </MainLayout>
          }
        />
        

        <Route
          path="/hris-configurations"
          element={
            <MainLayout
              title="HRIS Configurations"
              description="Short Description dito"
            ></MainLayout>
          }
        />

        {/* ATS HEREEEE */}

        <Route
          path="/ats"
          element={
            <MainLayout
              title="ATS Dashboard"
              description="Short Description dito"
            >
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/ats-configurations"
          element={
            <MainLayout
              title="ATS Configurations"
              description="Short Description dito"
            ></MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
