import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SchoolDashboard from "./pages/SchoolDashboard";
import SelectSchool from "./pages/SelectSchool";
import SchoolPortal from "./pages/SchoolPortal";
import ProtectedRoute from "./components/ProtectedRoute";

// Layout para Rutas Públicas (agrega el Header y Footer)
function PublicLayout() {
  return (
    <>
      <header className="header glass">
        <div className="container header-content">
          <Link to="/" className="logo">
            <img
              src="/bear-logo.png"
              alt="Hamutay Logo"
              style={{ width: "36px", height: "36px", borderRadius: "8px" }}
            />{" "}
            Hamutay <span>Schools</span>
          </Link>
          <nav>
            <Link to="/login" className="btn btn-secondary" style={{ padding: "0.5rem 1.2rem" }}>
              Iniciar Sesión
            </Link>
          </nav>
        </div>
      </header>

      <main style={{ minHeight: "calc(100vh - 200px)", paddingTop: "80px" }}>
        <Outlet />
      </main>

      {/* <section className="collaborators-section">
        <div className="container text-center">
          <h3 className="section-title" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Nuestros Colaboradores
          </h3>
          <p className="section-desc" style={{ fontSize: "1rem" }}>
            Instituciones y organizaciones que impulsan la equidad educativa.
          </p>
          <div className="collaborators-grid">
            <a href="#" className="collab-placeholder">
              Logo Colaborador
            </a>
            <a href="#" className="collab-placeholder">
              Logo Colaborador
            </a>
            <a href="#" className="collab-placeholder">
              Logo Colaborador
            </a>
          </div>
        </div>
      </section> */}

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <Link to="/" className="logo">
              <img
                src="/bear-logo.png"
                alt="Hamutay Logo"
                style={{ width: "36px", height: "36px", borderRadius: "8px" }}
              />{" "}
              Hamutay <span>Schools</span>
            </Link>
            <nav style={{ display: "flex", gap: "2rem" }}>
              <Link to="/" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>
                Plataforma
              </Link>
              <Link to="/" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>
                Soporte
              </Link>
              <Link to="/" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>
                Políticas
              </Link>
            </nav>
          </div>
          <div className="footer-bottom">
            <strong>Hamutay: pensar para comprender.</strong>
            <p>
              &copy; {new Date().getFullYear()} Hamutay. Tecnología abierta para la soberanía
              educativa.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Decorative Global Background */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>
      <div className="glow-blob blob-3"></div>

      <Routes>
        {/* Rutas Públicas que usan el Layout (Header/Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Selector de Colegio (semi-público — necesita datos en sessionStorage) */}
        <Route path="/select-school" element={<SelectSchool />} />

        {/* Rutas Privadas / Platform Admin */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/schools/:id"
          element={
            <ProtectedRoute>
              <SchoolDashboard />
            </ProtectedRoute>
          }
        />

        {/* Portal Escolar (School Users) */}
        <Route
          path="/school-portal"
          element={
            <ProtectedRoute>
              <SchoolPortal />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
