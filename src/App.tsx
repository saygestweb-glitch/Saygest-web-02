import React from 'react';
import { 
  Target, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Award, 
  Search, 
  Lightbulb, 
  ShieldCheck,
  ChevronRight,
  Quote
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-saygest-gray font-sans text-[#002411]">
      {/* 1. HERO */}
      <header className="relative pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between mb-16 lg:mb-24">
            <a href="#" className="flex items-center">
              <img 
                src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SAYGEST%20LOGO%20OSCURO.svg" 
                alt="Saygest Logo" 
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
            <div className="hidden md:flex gap-8 text-sm font-medium text-[#002411]/70">
              <a href="#propuesta" className="hover:text-[#002411] transition-colors">Propuesta de Valor</a>
              <a href="#servicios" className="hover:text-[#002411] transition-colors">Servicios</a>
              <a href="#productos" className="hover:text-[#002411] transition-colors">Productos</a>
              <a href="#contacto" className="hover:text-[#002411] transition-colors">Contacto</a>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-saygest-mustard font-semibold tracking-wide uppercase text-sm mb-4">
                Boutique Executive Consulting
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#002411] leading-[1.1] mb-8">
                Excelencia boutique en la identificación y desarrollo del liderazgo estratégico.
              </h1>
            </div>
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SAYGEST_PERSONAS-43.jpg" 
                alt="Executive" 
                className="absolute inset-0 w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-saygest-gray/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. BLOQUE VERDE DESCRIPTIVO */}
      <section 
        className="bg-saygest-green relative py-16 lg:py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/FONDO%2001.png')" }}
      >
        <div className="absolute inset-0 bg-saygest-green/70"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-8">
            <img 
              src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SAYGEST%20ISOTIPO%20CLARO.svg" 
              alt="Saygest Isotipo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-lg lg:text-2xl text-[#fffef6] font-bold leading-relaxed">
            Saygest es una consultora boutique especializada en búsqueda, selección y desarrollo de liderazgo, comprometida con conectar el talento excepcional con los desafíos estratégicos de nuestros clientes.
          </p>
        </div>
      </section>

      {/* 3. PROPUESTA DE VALOR */}
      <section id="propuesta" className="bg-saygest-beige py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#002411] text-center mb-20">
            Propuesta de Valor
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/PERSONA%2001.png" 
                alt="Professional" 
                className="rounded-2xl w-full h-[500px] object-cover shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-saygest-mustard rounded-2xl flex items-center justify-center shadow-lg hidden md:flex overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/ICON.png" 
                  alt="Saygest Icon" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="text-saygest-mustard font-mono text-3xl font-bold">01</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002411] mb-3">Alta sensibilidad</h3>
                  <p className="text-[#002411]/70 leading-relaxed">
                    Comprendemos profundamente la cultura y los desafíos únicos de cada organización, permitiéndonos identificar líderes que no solo encajan, sino que potencian el ecosistema.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="text-saygest-mustard font-mono text-3xl font-bold">02</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002411] mb-3">Especialidad</h3>
                  <p className="text-[#002411]/70 leading-relaxed">
                    Foco exclusivo en posiciones ejecutivas y de alta dirección. Nuestro rigor metodológico garantiza precisión en la evaluación de competencias críticas.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="text-saygest-mustard font-mono text-3xl font-bold">03</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002411] mb-3">Fluidez Estratégica</h3>
                  <p className="text-[#002411]/70 leading-relaxed">
                    Agilidad y adaptabilidad en nuestros procesos. Actuamos como socios estratégicos, anticipando necesidades y aportando visión de mercado en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MÉTRICAS / DIFERENCIALES */}
      <section className="bg-saygest-beige pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-saygest-darkbeige rounded-3xl p-10 lg:p-16">
            <div className="grid md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-saygest-green/20">
              <div className="text-center md:px-6 pt-6 md:pt-0 first:pt-0">
                <h4 className="text-lg font-bold text-[#002411] mb-4">Expertise Sectorial y Regional</h4>
                <p className="text-sm text-[#002411]/80 leading-relaxed">
                  Conocimiento profundo de industrias clave y alcance en mercados estratégicos, asegurando acceso al mejor talento sin fronteras.
                </p>
              </div>
              <div className="text-center md:px-6 pt-6 md:pt-0">
                <h4 className="text-lg font-bold text-[#002411] mb-4">Socio de transformación</h4>
                <p className="text-sm text-[#002411]/80 leading-relaxed">
                  Acompañamos a las organizaciones en sus procesos de cambio, asegurando que el liderazgo sea el motor de la evolución corporativa.
                </p>
              </div>
              <div className="text-center md:px-6 pt-6 md:pt-0">
                <h4 className="text-lg font-bold text-[#002411] mb-4">Integración</h4>
                <p className="text-sm text-[#002411]/80 leading-relaxed">
                  Proceso holístico que no termina en la contratación; facilitamos el onboarding y la alineación cultural para un impacto inmediato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICIOS */}
      <section 
        id="servicios" 
        className="bg-[#1A1A1A] py-24 lg:py-32 relative bg-no-repeat bg-center"
        style={{ 
          backgroundImage: "url('https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/FONDO%2002.png')",
          backgroundSize: "contain"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#fffef6] text-center mb-20">
            Nuestros Servicios
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mb-8">
                <img 
                  src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SERV%2001.png" 
                  alt="Executive Search" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-[#002411] mb-4">Executive Search</h3>
              <p className="text-[#002411]/70 text-sm leading-relaxed">
                Búsqueda directa y confidencial de perfiles C-Level y Alta Gerencia, utilizando inteligencia de mercado y redes exclusivas.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mb-8">
                <img 
                  src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SERV%2002.png" 
                  alt="Leadership Assessment" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-[#002411] mb-4">Leadership Assessment</h3>
              <p className="text-[#002411]/70 text-sm leading-relaxed">
                Evaluación profunda de competencias, potencial y estilo de liderazgo para decisiones de promoción, sucesión o desarrollo.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mb-8">
                <img 
                  src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SERV%2003.png" 
                  alt="Board Consulting" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-[#002411] mb-4">Board Consulting</h3>
              <p className="text-[#002411]/70 text-sm leading-relaxed">
                Asesoría en la composición, evaluación y efectividad de Directorios, asegurando gobierno corporativo de excelencia.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mb-8">
                <img 
                  src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SERV%2004.png" 
                  alt="Talent Mapping" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-[#002411] mb-4">Talent Mapping</h3>
              <p className="text-[#002411]/70 text-sm leading-relaxed">
                Mapeo estratégico del talento en el mercado para benchmarking, planificación de sucesión o futuras expansiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUCTOS */}
      <section id="productos" className="bg-[#222e27] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#fffef6] text-center mb-20">
            Nuestros Productos
          </h2>
          
          <div className="flex justify-center mb-16">
            <img 
              src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/PRODUCTOS%2002.png" 
              alt="Productos Saygest" 
              className="w-full max-w-4xl h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="flex flex-col items-start">
                <img 
                  src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SAYGEST%20LOGO%20CLARO.svg" 
                  alt="Saygest Logo" 
                  className="h-3 mb-6 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <span className="text-saygest-mustard text-3xl font-bold mb-2">01</span>
                <h3 className="text-xl font-bold text-[#fffef6] leading-snug">
                  Decision<br />Dynamics
                </h3>
                <p className="text-[#fffef6]/70 text-sm mt-2">
                  Executive Suite
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="flex flex-col items-start">
                <img 
                  src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SAYGEST%20LOGO%20CLARO.svg" 
                  alt="Saygest Logo" 
                  className="h-3 mb-6 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <span className="text-saygest-mustard text-3xl font-bold mb-2">02</span>
                <h3 className="text-xl font-bold text-[#fffef6] leading-snug">
                  Insights & Development<br />Report
                </h3>
                <p className="text-[#fffef6]/70 text-sm mt-2">
                  Brechas y Desarrollo
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="flex flex-col items-start">
                <img 
                  src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SAYGEST%20LOGO%20CLARO.svg" 
                  alt="Saygest Logo" 
                  className="h-3 mb-6 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <span className="text-saygest-mustard text-3xl font-bold mb-2">03</span>
                <h3 className="text-xl font-bold text-[#fffef6] leading-snug">
                  Informes<br />Psicolaborales
                </h3>
                <p className="text-[#fffef6]/70 text-sm mt-2">
                  Incluyendo Estilos de Decisión
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLIENTES */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#002411] text-center mb-16">
            Algunos Clientes
          </h2>
          
          <div className="flex justify-center items-center w-full">
            <img 
              src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/MARCAS.png" 
              alt="Marcas de Clientes" 
              className="w-full max-w-5xl h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIOS */}
      <section className="bg-saygest-beige py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#002411] text-center mb-20">
            Testimonios
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Testimonial" 
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-saygest-beige"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 text-saygest-mustard/20" size={48} />
                <p className="text-lg md:text-xl text-[#002411]/80 italic leading-relaxed mb-6 relative z-10">
                  "El nivel de entendimiento de nuestro negocio y la precisión en la selección de nuestro nuevo CEO fue excepcional. Saygest no solo encontró un candidato, encontró al socio estratégico que necesitábamos para nuestra expansión."
                </p>
                <div>
                  <h4 className="font-bold text-[#002411] text-lg">Roberto Mendoza</h4>
                  <p className="text-sm text-saygest-mustard font-medium">Presidente del Directorio, Grupo Inversor Latam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer id="contacto" className="bg-[#002411] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <a href="#" className="flex items-center mb-8 md:mb-0">
              <img 
                src="https://raw.githubusercontent.com/Victorriveros22-laboratorio/SAYGEST/main/SAYGEST%20LOGO%20OSCURO.svg" 
                alt="Saygest Logo" 
                className="h-10 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-[#fffef6] font-bold mb-6">Empresa</h5>
              <ul className="space-y-4 text-[#fffef6]/70 text-sm">
                <li><a href="#" className="hover:text-saygest-mustard transition-colors">Sobre Nosotros</a></li>
                <li><a href="#servicios" className="hover:text-saygest-mustard transition-colors">Servicios</a></li>
                <li><a href="#productos" className="hover:text-saygest-mustard transition-colors">Productos</a></li>
                <li><a href="#" className="hover:text-saygest-mustard transition-colors">Insights</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-[#fffef6] font-bold mb-6">Dirección</h5>
              <ul className="space-y-4 text-[#fffef6]/70 text-sm">
                <li>Av. El Bosque Norte 0123, Of. 45</li>
                <li>Las Condes, Santiago</li>
                <li>Chile</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-[#fffef6] font-bold mb-6">Contacto</h5>
              <ul className="space-y-4 text-[#fffef6]/70 text-sm">
                <li><a href="mailto:contacto@saygest.com" className="hover:text-saygest-mustard transition-colors">contacto@saygest.com</a></li>
                <li><a href="tel:+56223456789" className="hover:text-saygest-mustard transition-colors">+56 2 2345 6789</a></li>
                <li className="pt-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-saygest-mustard hover:text-[#002411] cursor-pointer transition-colors text-[#fffef6]">in</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#fffef6]/60">
            <p>© {new Date().getFullYear()} Saygest Boutique Executive Consulting. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#fffef6] transition-colors">Políticas de Privacidad</a>
              <a href="#" className="hover:text-[#fffef6] transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
