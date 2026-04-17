import { Outlet } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Zap, Globe } from "lucide-react"

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-background font-sans text-foreground">
      <header className="relative w-full border-b border-border bg-card/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-lg transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10">
              <CalendarDays
                className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6"
                strokeWidth={2}
              />
            </span>
            <span className="text-base font-semibold tracking-tight sm:text-lg">
              Events
              <span className="text-primary"> Hub</span>
            </span>
          </a>

          <Badge
            variant="outline"
            className="flex items-center gap-2 border-border bg-muted px-3 py-1.5 text-xs font-normal text-muted-foreground sm:px-4 sm:text-sm"
          >
            <Zap className="h-4.5 w-4.5 text-primary" />
            Conecte-se ou crie seus eventos
          </Badge>
        </div>
      </header>

      <main className="relative flex flex-1 items-center justify-center px-4 py-16">
        <Outlet />
      </main>

      <footer className="relative z-10 w-full border-t border-border bg-card/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-muted-foreground sm:text-left sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-foreground/60">EventsHub</span>. Todos os
            direitos reservados.
          </p>

          <span className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <Globe className="h-4.5 w-4.5" />
            PT-BR
          </span>
        </div>
      </footer>
    </div>
  )
}
