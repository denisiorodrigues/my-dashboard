import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetHeader, SheetDescription } from "../ui/sheet";
import { Home, Package, PanelBottom } from "lucide-react";

export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:p1-14">
                {/* sticky -> faz a tag HTMl ficar fixa */}
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 
                                   sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5"/>
                                <span className="sr-only">Abrir/Fechar menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="sm:max-w-x">
                            <SheetHeader>
                                <SheetTitle className="sr-only">Dashboard</SheetTitle>
                                {/* <SheetDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </SheetDescription> */}
                            </SheetHeader>
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link href="#"
                                      className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground gap-2" 
                                      prefetch = {false}>
                                        {/* prefetch -> Informa se quer fazer um carregamento em background desse componente */}    
                                    <Package className="h-5 w-5 transition-all"/>
                                    <span className="sr-only">Logo do projeto</span>   
                                </Link>
                                <Link href="#"
                                      className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground gap-2" 
                                      prefetch = {false}>
                                        {/* prefetch -> Informa se quer fazer um carregamento em background desse componente */}    
                                    <Home className="h-5 w-5 transition-all"/>
                                    <span className="sr-only">Inicio</span>   
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
        </div>
    )
}