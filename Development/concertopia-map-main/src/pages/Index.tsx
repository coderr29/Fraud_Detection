
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, TicketCheck, Navigation, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import VenueCard from '@/components/VenueCard';
import { cn } from '@/lib/utils';

const Index = () => {
  const featuredVenues = [
    {
      id: '1',
      name: 'SoFi Stadium',
      location: 'Los Angeles, CA',
      imageUrl: 'https://static.concertpass.com/uploaded-images/venues/SoFi-Stadium/sofi-stadium-Los-Angeles-1023-event-center-venue.jpg',
      capacity: '70,000',
      featured: true
    },
    {
      id: '2',
      name: 'Madison Square Garden',
      location: 'New York, NY',
      imageUrl: 'https://static01.nyt.com/images/2019/05/18/sports/18msg-print/18msg-print-superJumbo.jpg',
      capacity: '20,789'
    },
    {
      id: '3', 
      name: 'O2 Arena',
      location: 'London, UK',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/58/bf/76/the-o2-from-the-river.jpg?w=1200&h=1200&s=1',
      capacity: '20,000'
    }
  ];

  const features = [
    {
      icon: <MapPin size={24} />,
      title: 'Venue Navigation',
      description: 'Navigate through any venue with our detailed maps and step-by-step directions.'
    },
    {
      icon: <TicketCheck size={24} />,
      title: 'Ticket Scanning',
      description: 'Scan your ticket to instantly locate your seat and get personalized navigation.'
    },
    {
      icon: <Navigation size={24} />,
      title: 'AR Guidance',
      description: 'Use augmented reality to follow visual markers that lead you directly to your seat.'
    }
  ];

  return (
    <Layout>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
              style={{ 
                backgroundImage: "url('https://images.ctfassets.net/cgc1xdmrr4rp/3OZcJjdwFgzC7JnakO8mG0/cb26d6ec9dba2c48b4678c8b2d29e05a/Venues.jpg')" 
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>
          
          <div 
            className="container max-w-4xl mx-auto space-y-6 animate-slide-up" 
            style={{ animationDelay: '0.2s' }}
          >
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Never Get Lost Again
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Find Your Seat with <span className="text-gradient">Precision</span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Navigate concert venues and stadiums effortlessly with 
              our advanced seat finder and AR guidance system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/venues" className="btn-primary min-w-40">
                Explore Venues
              </Link>
              <Link to="/seat-finder" className="btn-outline min-w-40">
                Find My Seat
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-16 left-0 right-0 flex justify-center">
            <div className="animate-bounce size-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <ArrowRight size={20} className="rotate-90" />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose SeatFinder?</h2>
              <p className="text-muted-foreground">
                Our app combines cutting-edge technology with user-friendly design to make
                venue navigation simple and stress-free.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-panel p-6 rounded-xl animate-scale-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="bg-primary/10 size-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Venues Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Venues</h2>
                <p className="text-muted-foreground max-w-xl">
                  Discover popular concert venues and stadiums with our detailed navigation maps.
                </p>
              </div>
              <Link 
                to="/venues" 
                className="group mt-4 md:mt-0 inline-flex items-center font-medium text-primary"
              >
                View all venues
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredVenues.map((venue) => (
                <VenueCard
                  key={venue.id}
                  id={venue.id}
                  name={venue.name}
                  location={venue.location}
                  imageUrl={venue.imageUrl}
                  capacity={venue.capacity}
                  featured={venue.featured}
                  className={cn(
                    venue.featured && 'md:col-span-2',
                    'animate-fade-in'
                  )}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <div 
              className="glass-panel rounded-2xl py-16 px-6 relative overflow-hidden animate-blur-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 size-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 size-40 bg-primary/10 rounded-full blur-3xl" />
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                Ready to Navigate Like a Pro?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 relative">
                Download our app today and never worry about finding your seat again. 
                Enjoy the show, leave the navigation to us.
              </p>
              <div className="relative">
                <Link to="/seat-finder" className="btn-primary min-w-44">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-10 px-4 border-t border-border">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-xl font-semibold mb-4 md:mb-0">
                <span className="relative size-8 flex items-center justify-center">
                  <div className="absolute size-full bg-primary/10 rounded-full"></div>
                  <MapPin className="text-primary size-5" />
                </span>
                <span className="text-gradient">SeatFinder</span>
              </div>
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} SeatFinder. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Index;
