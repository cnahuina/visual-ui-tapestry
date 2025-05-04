
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { name: "¿Quiénes somos?", href: "#about" },
    { name: "Contáctanos", href: "#contact" },
  ];

  return (
    <header className="w-full">
      <nav className="flex w-full items-center gap-[40px_100px] text-base font-semibold leading-none justify-between flex-wrap px-8 md:px-24 py-6 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/791c8a3de4fd464db3ca19d68c19ad86/5f19750e00b3d73d14c18dcf0c0587857d03479c?placeholderIfAbsent=true"
          alt="Inclap Logo"
          className="aspect-[3.69] object-contain w-[140px] self-stretch shrink-0 my-auto"
        />
        
        {isMobile ? (
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button 
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="px-6 pb-6 pt-10">
              <div className="flex flex-col space-y-6 items-center">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-semibold hover:text-primary"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  className="mt-4 w-full border gap-2 text-[rgba(3,24,57,1)] whitespace-nowrap px-6 py-3 rounded-[32px] border-[rgba(3,24,57,1)] border-solid hover:bg-[rgba(3,24,57,0.05)] transition-colors"
                  aria-label="Unirme"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Unirme
                </button>
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <div className="self-stretch flex min-w-60 items-center gap-[40px_51px] my-auto max-md:max-w-full">
            <div className="self-stretch flex min-w-60 items-center gap-10 text-black my-auto">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="self-stretch my-auto hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button
              className="self-stretch border gap-2 text-[rgba(3,24,57,1)] whitespace-nowrap my-auto px-6 py-2 rounded-[32px] border-[rgba(3,24,57,1)] border-solid max-md:px-5 hover:bg-[rgba(3,24,57,0.05)] transition-colors"
              aria-label="Unirme"
            >
              Unirme
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
