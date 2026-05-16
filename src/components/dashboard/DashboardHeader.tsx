import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search, User, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardHeader = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
      <div className="container px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <img src={logo} alt="Imobi PRO" className="h-8" />
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                Dashboard
              </a>
              <a href="/imoveis" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Imóveis
              </a>
              <a href="/leads" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Leads
              </a>
              <a href="/financeiro" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Financeiro
              </a>
              <a href="/relatorios" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Relatórios
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 w-64">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar..." 
                className="border-0 bg-transparent h-auto p-0 focus-visible:ring-0 text-sm"
              />
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
