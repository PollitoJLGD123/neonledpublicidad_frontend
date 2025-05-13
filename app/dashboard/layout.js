"use client"
import "../globals.css"
import Link from "next/link"
import AuthGuard from "./components/AuthGuard"
import auth_service from "./users/services/auth.service"
import { usePathname, useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import { useState, useEffect } from "react"
import { DisplayNameContext } from "./components/DisplayNameContext"

import {
  User,
  LogOut,
  Sun,
  Moon,
  ChevronRight,
  Home,
  Users,
  MessageSquare,
  AlertCircle,
  FileText,
  Settings,
  Mail,
} from "lucide-react"

// Estilos adicionales para resolver el problema
const iconStyle = {
  // Este estilo solo se aplica inicialmente para prevenir el fondo morado
  // pero no afecta al hover porque no especifica hover
  backgroundColor: 'transparent'
};

export default function RootLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()

  // Info usuario y rol
  const userRole = getCookie("rol") || "Usuario"
  const userData = getCookie("user") ? JSON.parse(getCookie("user")) : { name: "Usuario" }
  const empleadoData = getCookie("empleado") ? JSON.parse(getCookie("empleado")) : null

  const [displayName, setDisplayName] = useState(empleadoData?.nombre || userData?.name || "Usuario")
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  // Estado y lógica del Dark Mode con solución más agresiva
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Montamos el componente después de la hidratación
  useEffect(() => {
    setMounted(true)
    
    // Recuperamos la preferencia de tema
    const savedMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(savedMode)
    
    if (savedMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Este efecto maneja los cambios de tema
  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      localStorage.setItem("darkMode", darkMode)
    }
  }, [darkMode, mounted])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await auth_service.logout()
      setTimeout(() => auth_service.logoutClient(router), 350)
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
      setTimeout(() => auth_service.logoutClient(router), 1000)
    }
  }

  // Get current section name
  const getSectionName = () => {
    if (pathname === "/dashboard/main") return "Panel Principal"
    const section = pathname.slice(pathname.indexOf("/", 1) + 1)
    return section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, " ")
  }

  // Este es un componente que sustituye a los botones con iconos hasta que la página esté montada
  const IconPlaceholder = () => (
    <div className="w-5 h-5"></div>
  )

  // Componentes de iconos envueltos
  const ThemeIcon = () => {
    if (!mounted) return <IconPlaceholder />
    return darkMode ? 
      <Sun className="h-5 w-5" /> : 
      <Moon className="h-5 w-5" />
  }

  const CollapseIcon = () => {
    if (!mounted) return <IconPlaceholder />
    return (
      <ChevronRight
        className={`h-5 w-5 transition-transform duration-300 ${isSidebarOpen ? "rotate-180" : ""}`}
      />
    )
  }

  return (
    <DisplayNameContext.Provider value={{ displayName, updateDisplayName: setDisplayName }}>
      <AuthGuard>
        {/* Este div crea algunos estilos CSS importantes para sobrescribir el fondo morado */}
        {!mounted && (
          <style jsx global>{`
            /* Esto oculta los iconos durante la hidratación */
            svg {
              background-color: transparent !important;
            }
          `}</style>
        )}
        
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          {/* Sidebar */}
          <aside
            className={`${isSidebarOpen ? "w-64" : "w-20"} transition-all duration-300 fixed inset-y-0 left-0 z-50 flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-lg`}
          >
            {/* Logo and brand */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                {isSidebarOpen && (
                <>
                <img src="/dashboard/main-icon.svg" alt="Logo" className="h-8 w-8" />

                  <span className="ml-2 text-lg font-semibold text-blue-primary dark:text-white">
                    Neon Led Publicidad
                  </span>
                </>
                )}
              </div>
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400"
              >
                <CollapseIcon />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4 px-3">
              <ul className="space-y-1">
                <NavLink
                  href="/dashboard/main"
                  title="Sección Principal"
                  icon={<Home className="h-5 w-5" />}
                  isCollapsed={!isSidebarOpen}
                  isActive={pathname === "/dashboard/main"}
                  mounted={mounted}
                />

                {auth_service.hasPermission("ver-empleados") && (
                  <NavLink
                    href="/dashboard/empleados"
                    title="Empleados"
                    icon={<Users className="h-5 w-5" />}
                    isCollapsed={!isSidebarOpen}
                    isActive={pathname.includes("/dashboard/empleados")}
                    mounted={mounted}
                  />
                )}

                {auth_service.hasPermission("ver-contactos") && (
                  <NavLink
                    href="/dashboard/contactos"
                    title="Contactanos"
                    icon={<Mail className="h-5 w-5" />}
                    isCollapsed={!isSidebarOpen}
                    isActive={pathname.includes("/dashboard/contactos")}
                    mounted={mounted}
                  />
                )}

                {auth_service.hasPermission("ver-modales") && (
                  <NavLink
                    href="/dashboard/modales"
                    title="Modales"
                    icon={<AlertCircle className="h-5 w-5" />}
                    isCollapsed={!isSidebarOpen}
                    isActive={pathname.includes("/dashboard/modales")}
                    mounted={mounted}
                  />
                )}

                {auth_service.hasPermission("ver-reclamaciones") && (
                  <NavLink
                    href="/dashboard/reclamaciones"
                    title="Reclamaciones"
                    icon={<MessageSquare className="h-5 w-5" />}
                    isCollapsed={!isSidebarOpen}
                    isActive={pathname.includes("/dashboard/reclamaciones")}
                    mounted={mounted}
                  />
                )}

                {auth_service.hasPermission("crear-blogs") && (
                  <NavLink
                    href="/dashboard/blogs"
                    title="Blogs"
                    icon={<FileText className="h-5 w-5" />}
                    isCollapsed={!isSidebarOpen}
                    isActive={pathname.includes("/dashboard/blogs")}
                    mounted={mounted}
                  />
                )}

                {auth_service.hasRole("administrador") && auth_service.isVerifiedAccount() && (
                  <NavLink
                    href="/dashboard/role-permission"
                    title="Roles y Permisos"
                    icon={<Settings className="h-5 w-5" />}
                    isCollapsed={!isSidebarOpen}
                    isActive={pathname.includes("/dashboard/role-permission")}
                    mounted={mounted}
                  />
                )}
              </ul>
            </nav>

            {/* User profile and dark mode toggle */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              {isSidebarOpen ? (
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-blue-primary flex items-center justify-center text-white">
                        {mounted ? <User className="h-5 w-5" /> : <IconPlaceholder />}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{displayName}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{userRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {mounted ? (
                      <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400"
                      >
                        <ThemeIcon />
                      </button>
                    ) : (
                      <div className="p-2 opacity-0">
                        <div className="h-5 w-5"></div>
                      </div>
                    )}

                    <button
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className="flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md text-white bg-blue-primary hover:bg-blue-dark transition-colors disabled:opacity-70"
                    >
                      {isLoggingOut ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Saliendo...</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          {mounted ? <LogOut className="h-4 w-4 mr-2" /> : <div className="h-4 w-4 mr-2"></div>}
                          <span>Cerrar sesión</span>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-10 w-10 rounded-full bg-blue-primary flex items-center justify-center text-white">
                    {mounted ? <User className="h-5 w-5" /> : <IconPlaceholder />}
                  </div>
                  
                  {mounted ? (
                    <button
                      onClick={toggleDarkMode}
                      className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400"
                    >
                      <ThemeIcon />
                    </button>
                  ) : (
                    <div className="p-2 opacity-0">
                      <div className="h-5 w-5"></div>
                    </div>
                  )}
                  
                  <button
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="p-2 rounded-md text-white bg-blue-primary hover:bg-blue-dark transition-colors disabled:opacity-70"
                  >
                    {isLoggingOut ? (
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      mounted ? <LogOut className="h-5 w-5" /> : <IconPlaceholder />
                    )}
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className={`flex-1 flex flex-col ${isSidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300`}>
            {/* Header */}
            <header className="z-10 h-16 flex items-center justify-between px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{getSectionName()}</h1>
            </header>

            {/* Page content */}
            <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 p-0 ">{children}</main>
          </div>
        </div>
      </AuthGuard>
    </DisplayNameContext.Provider>
  )
}

// Navigation link component
function NavLink({ href, title, icon, isActive, isCollapsed, mounted }) {
  // Si no está montado, mostramos un espacio en blanco
  if (!mounted) {
    return (
      <li>
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-start"} p-2 rounded-lg`}>
          <div className="h-5 w-5"></div>
          {!isCollapsed && <div className="ml-3 h-5"></div>}
        </div>
      </li>
    );
  }
  
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center ${isCollapsed ? "justify-center" : "justify-start"} p-2 rounded-lg transition-colors ${
          isActive
            ? "bg-blue-primary text-white"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <span className={`${isActive ? "text-white" : "text-blue-primary dark:text-gray-300"}`}>{icon}</span>
        {!isCollapsed && <span className="ml-3">{title}</span>}
      </Link>
    </li>
  )
}