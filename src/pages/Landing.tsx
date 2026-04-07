import React from "react";
import {
  BookOpen,
  ChevronRight,
  Shield,
  AlertTriangle,
  Link2Off,
  WifiOff,
  Coins,
  Layers,
  Activity,
  CloudOff,
  Terminal,
  GraduationCap,
  TrendingDown,
  Settings,
  Globe,
  BarChart3,
  CheckCircle,
  Compass,
  Share2,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="landing-page">
      {/* Background blobs for depth */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>
      <div className="glow-blob blob-3"></div>

      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="mission-badge">
              <BookOpen size={16} />
              <span>Proyecto Educativo Nacional</span>
            </div>
            <h1 className="text-gradient">
              Acortando brechas.
              <br />
              Uniendo la educación peruana.
            </h1>
            <p className="hero-subtitle">
              Una plataforma de gestión unificada, inclusiva y de código abierto para fortalecer la
              evolución del aprendizaje en todo el país.
            </p>
            <div className="hero-actions">
              <a href="#solucion" className="btn btn-primary btn-lg">
                Únete a la misión <ChevronRight size={18} />
              </a>
              <a
                href="https://github.com/johnkbarrera/hamutay"
                className="btn btn-secondary btn-lg"
              >
                <Terminal size={18} /> Ver Código Libre
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="premium-glass hero-card-float"
              style={{
                padding: "0.8rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="/Clase en los Andes peruanos.png"
                alt="Clase en los Andes peruanos"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "0.8rem",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
              />
              <div
                className="terminal-box"
                style={{
                  background: "var(--color-bg)",
                  padding: "1.2rem",
                  borderRadius: "10px",
                  marginTop: "0.8rem",
                  textAlign: "left",
                  fontFamily: "monospace",
                  border: "1px solid rgba(45, 55, 63, 0.1)",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    color: "var(--color-primary)",
                    margin: "0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: "700",
                  }}
                >
                  <span style={{ opacity: 0.5 }}>$</span> Nodos de gestión local
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-text)",
                    margin: "0.5rem 0 0",
                    fontWeight: "500",
                  }}
                >
                  &gt; arquitectura_data_federada
                </p>
                <div
                  style={{
                    width: "6px",
                    height: "18px",
                    background: "var(--color-primary)",
                    display: "inline-block",
                    marginTop: "0.6rem",
                    animation: "blink 1s infinite",
                  }}
                ></div>
              </div>
              <style>{`
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges-section" id="problemas">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="section-title">Desafíos que Resolvemos</h2>
            <p className="section-desc">
              Superamos las barreras que impiden una educación equitativa y digital en nuestras
              diversas regiones.
            </p>
          </div>

          <div className="responsive-grid grid-4">
            <div className="glass-card problem-card">
              <div className="icon-mask icon-danger">
                <AlertTriangle size={24} />
              </div>
              <h4>Brechas Educativas</h4>
              <p>
                Combatimos la desigualdad entre zonas urbanas y rurales con recursos accesibles.
              </p>
            </div>

            <div className="glass-card problem-card">
              <div className="icon-mask icon-danger">
                <Link2Off size={24} />
              </div>
              <h4>Sistemas Aislados</h4>
              <p>
                Eliminamos la fragmentación, integrando la gestión de cada colegio en un panorama
                nacional.
              </p>
            </div>

            <div className="glass-card problem-card">
              <div className="icon-mask icon-danger">
                <WifiOff size={24} />
              </div>
              <h4>Baja Conectividad</h4>
              <p>
                Diseñado para contextos con infraestructura limitada, sin depender de internet
                constante.
              </p>
            </div>

            <div className="glass-card problem-card">
              <div className="icon-mask icon-danger">
                <Coins size={24} />
              </div>
              <h4>Costos de Acceso</h4>
              <p>Democratizamos la tecnología educativa eliminando barreras económicas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section bg-cream" id="solucion">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="section-title">Infraestructura de Futuro</h2>
            <p className="section-desc">
              Hamutay combina lo mejor del desarrollo open source con la validación académica.
            </p>
          </div>

          <div className="responsive-grid grid-3">
            <div className="solution-card premium-glass">
              <div className="icon-circle">
                <Layers size={28} />
              </div>
              <h4>Gestión Escolar Unificada</h4>
              <p>Centraliza asistencia, notas y reportes académicos de forma intuitiva.</p>
            </div>

            <div className="solution-card premium-glass">
              <div className="icon-circle success">
                <CloudOff size={28} />
              </div>
              <h4>Modo Offline Resiliente</h4>
              <p>
                Sincronización automática: registra datos hoy, actualiza cuando detecte internet.
              </p>
            </div>

            <div className="solution-card premium-glass">
              <div className="icon-circle info">
                <BarChart3 size={28} />
              </div>
              <h4>Fortalecer y Acompañar</h4>
              <p>Visualiza el progreso de cada estudiante y respalda el avance entre colegios.</p>
            </div>

            <div className="solution-card premium-glass">
              <div className="icon-circle secondary">
                <Terminal size={28} />
              </div>
              <h4>Open Source y Libre</h4>
              <p>Software adaptable, gratuito y mejorado constantemente por la comunidad.</p>
            </div>

            <div className="solution-card premium-glass">
              <div className="icon-circle primary">
                <GraduationCap size={28} />
              </div>
              <h4>Respaldo Académico</h4>
              <p>
                Alianzas con universidades para garantizar la calidad y rigor de nuestros módulos.
              </p>
            </div>

            <div className="solution-card premium-glass">
              <div className="icon-circle tertiary">
                <Globe size={28} />
              </div>
              <h4>Inclusión Nacional</h4>
              <p>Tecnología para todos los colegios de Perú, incluso los más alejados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container benefit-flex">
          <div className="benefit-text">
            <h2 className="section-title">Impacto en la Gestión</h2>
            <p>Un sistema diseñado para transformar la toma de decisiones basada en datos.</p>
            <ul className="impact-list">
              <li>
                <CheckCircle size={20} className="icon-success" />
                <span>Reducción real del 30% en carga administrativa</span>
              </li>
              <li>
                <CheckCircle size={20} className="icon-success" />
                <span>Acompañamiento individual del aprendizaje</span>
              </li>
              <li>
                <CheckCircle size={20} className="icon-success" />
                <span>Equidad tecnológica en zonas rurales</span>
              </li>
              <li>
                <CheckCircle size={20} className="icon-success" />
                <span>Datos confiables para políticas educativas</span>
              </li>
            </ul>
          </div>
          <div className="benefit-visual">
            <div className="premium-glass data-dashboard-preview">
              <div className="preview-header">
                <Activity size={18} />
                <span>Analíticos en Tiempo Real</span>
              </div>
              <div className="preview-chart"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="roadmap-section bg-cream">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="section-title">Hoja de Ruta</h2>
            <p className="section-desc">Consolidando la red educativa más grande del país.</p>
          </div>

          <div className="timeline-grid grid-4">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <h5>Offline Completo</h5>
              <p>Sincronización total para zonas sin red móvil estable.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <h5>Módulos Analíticos</h5>
              <p>Reportes comparativos nacionales de rendimiento escolar.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <h5>Comunidad Global</h5>
              <p>Apertura de contribuciones para desarrolladores open source.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <h5>Calidad Educativa</h5>
              <p>Alianzas con universidades para la excelencia de nuestros módulos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Essence Section (Origin of Hamutay) */}
      <section className="essence-section">
        <div className="container text-center">
          <div className="essence-card premium-glass">
            <h2 className="section-title text-gradient">Hamutay</h2>
            <p className="essence-text">
              Hamutay es un proyecto cuyo nombre proviene del <strong>quechua</strong>, basado en la
              raíz <em>“hamu-”</em> o <em>“hamuy”</em>, que significa pensar, reflexionar o
              comprender.
            </p>
            <p className="essence-text">
              A partir de esta raíz, Hamutay representa no solo el acto de pensar, sino un proceso
              más profundo: el análisis consciente, la reflexión y la generación de conocimiento a
              partir de la información.
            </p>
            <div className="essence-philosophy">
              <p>
                Este proyecto nace con esa misma filosofía:
                <br />
                <strong>transformar datos en entendimiento, y entendimiento en decisiones.</strong>
              </p>
            </div>
            <h3 className="essence-tagline">Hamutay: pensar para comprender.</h3>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-wrapper premium-glass text-center">
            <h2 className="section-title text-gradient">Únete a la transformación educativa</h2>
            <p className="section-desc">
              Forma parte de un sistema que garantiza equidad, calidad y acompañamiento genuino del
              aprendizaje.
            </p>
            <div className="hero-cta-group centered">
              <a href="#contacto" className="btn btn-primary btn-lg">
                🚀 Inscripción Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container footer-content">
          <p>
            &copy; {new Date().getFullYear()} Hamutay. Tecnología abierta para la soberanía
            educativa.
          </p>
        </div>
      </footer>
    </div>
  );
}
