
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MapPin, 
  TicketCheck, 
  Settings, 
  Menu, 
  X,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={20} /> },
    { to: '/venues', label: 'Venues', icon: <MapPin size={20} /> },
    { to: '/seat-finder', label: 'Seat Finder', icon: <TicketCheck size={20} /> },
    { to: '/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 backdrop-blur-lg',
          isScrolled ? 'py-2 bg-background/80 shadow-sm' : 'py-4 bg-transparent'
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-xl font-semibold">
            <span className="relative size-8 flex items-center justify-center">
              <div className="absolute size-full bg-primary/10 rounded-full animate-pulse-subtle"></div>
              <MapPin className="text-primary size-5" />
            </span>
            <span className="text-gradient">SeatFinder</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300',
                  location.pathname === link.to
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'hover:bg-secondary'
                )}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden icon-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'flex items-center space-x-3 px-6 py-4 rounded-xl w-64 transition-all duration-300',
                location.pathname === link.to
                  ? 'bg-primary/10 text-primary font-medium scale-105'
                  : 'hover:bg-secondary'
              )}
              onClick={closeMobileMenu}
            >
              {link.icon}
              <span className="text-lg">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Header Spacing */}
      <div className={isScrolled ? 'h-16' : 'h-20'} />
    </>
  );
};

export default NavBar;
