import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { Separator } from "../components/ui/separator";

export default function Navigation() {
  const navLinks = [
    { title: "ABOUT", href: "#about" },
    { title: "CHARACTERS", href: "#characters" },
  ];

  return (
    <div className="absolute w-full max-w-[1280px] h-[72px] top-0 left-1/2 -translate-x-1/2 px-6 z-50">
      <NavigationMenu className="flex justify-end items-center h-full">
        <NavigationMenuList className="flex gap-10">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.title}>
              <NavigationMenuLink
                href={link.href}
                className="font-['Poppins-Regular',Helvetica] text-[#3d524e] text-lg tracking-widest transition-all duration-300 hover:text-[#c6ffff] hover:drop-shadow-[0_0_6px_#c6ffff] glow"
              >
                {link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {}
      <div className="relative w-full h-px mt-0">
        <Separator className="w-full h-px bg-[#3D524F]/20 border-none" />
        <div className="absolute top-0 left-0 w-3 h-px bg-[#c6ffff] blur-sm animate-pulse" />
      </div>
    </div>
  );
}
