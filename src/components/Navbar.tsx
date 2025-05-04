
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/companies", label: "Companies", icon: "Building" },
    { path: "/jobs", label: "Jobs", icon: "Briefcase" },
    { path: "/dashboard", label: "Jobs Dashboard", icon: "LayoutDashboard" },
    { path: "/profile", label: "My Profile", icon: "User" },
  ];
  
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-purple-500 font-bold text-2xl flex items-center">
              <Icon name="Zap" size={24} className="text-purple-500" />
              <span>mave</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-1 py-3 text-gray-600 hover:text-purple-600 border-b-2 border-transparent transition-colors",
                  location.pathname === item.path && "text-purple-600 border-purple-600"
                )}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Icon name="Bell" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="MessageSquare" size={20} />
          </Button>
          <button className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="font-medium text-purple-600">A</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
