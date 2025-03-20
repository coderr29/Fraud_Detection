
import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import Layout from '@/components/Layout';
import VenueCard from '@/components/VenueCard';

const Venues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  const allVenues = [
    {
      id: '1',
      name: 'SoFi Stadium',
      location: 'Los Angeles, CA',
      date: 'Upcoming events',
      imageUrl: 'https://static.concertpass.com/uploaded-images/venues/SoFi-Stadium/sofi-stadium-Los-Angeles-1023-event-center-venue.jpg',
      capacity: '70,000',
      type: 'stadium'
    },
    {
      id: '2',
      name: 'Madison Square Garden',
      location: 'New York, NY',
      date: 'Upcoming events',
      imageUrl: 'https://static01.nyt.com/images/2019/05/18/sports/18msg-print/18msg-print-superJumbo.jpg',
      capacity: '20,789',
      type: 'arena'
    },
    {
      id: '3',
      name: 'O2 Arena',
      location: 'London, UK',
      date: 'Upcoming events',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/58/bf/76/the-o2-from-the-river.jpg?w=1200&h=1200&s=1',
      capacity: '20,000',
      type: 'arena'
    },
    {
      id: '4',
      name: 'Wembley Stadium',
      location: 'London, UK',
      date: 'Upcoming events',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Wembley_Stadium_interior.jpg',
      capacity: '90,000',
      type: 'stadium'
    },
    {
      id: '5',
      name: 'Sydney Opera House',
      location: 'Sydney, Australia',
      date: 'Upcoming events',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Sydney_Opera_House%2C_botanic_gardens_1.jpg',
      capacity: '5,738',
      type: 'hall'
    },
    {
      id: '6',
      name: 'Red Rocks Amphitheatre',
      location: 'Morrison, CO',
      date: 'Upcoming events',
      imageUrl: 'https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/RedrocksCO_Web_0.jpg?itok=kVH3Vd8l',
      capacity: '9,525',
      type: 'amphitheater'
    },
    {
      id: '7',
      name: 'Royal Albert Hall',
      location: 'London, UK',
      date: 'Upcoming events',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Royal_Albert_Hall%2C_London%2C_Spring_2013_%281%29.jpg',
      capacity: '5,272',
      type: 'hall'
    },
    {
      id: '8',
      name: 'Hollywood Bowl',
      location: 'Los Angeles, CA',
      date: 'Upcoming events',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Hollywood_Bowl_full.jpg',
      capacity: '17,500',
      type: 'amphitheater'
    },
    {
      id: '9',
      name: 'Carnegie Hall',
      location: 'New York, NY',
      date: 'Upcoming events',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Carnegie_Hall_-_New_York%2C_NY_-_arches.jpg',
      capacity: '2,804',
      type: 'hall'
    }
  ];
  
  // Filter venues based on search term and filter selection
  const filteredVenues = allVenues.filter(venue => {
    const matchesSearch = venue.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          venue.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || venue.type === filter;
    
    return matchesSearch && matchesFilter;
  });
  
  return (
    <Layout>
      <div className="page-container">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Explore Venues</h1>
          <p className="text-muted-foreground">
            Browse our collection of supported venues for your next event.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search size={18} className="text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search venues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background"
            />
          </div>
          
          <div className="flex gap-2">
            <div className="flex items-center gap-2 px-4 py-2 border border-input rounded-lg bg-background">
              <Filter size={18} className="text-muted-foreground" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent outline-none"
              >
                <option value="all">All Venues</option>
                <option value="stadium">Stadiums</option>
                <option value="arena">Arenas</option>
                <option value="hall">Concert Halls</option>
                <option value="amphitheater">Amphitheaters</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredVenues.length} {filteredVenues.length === 1 ? 'venue' : 'venues'} found
          </p>
        </div>
        
        {/* Venue Grid */}
        {filteredVenues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredVenues.map((venue, index) => (
              <VenueCard
                key={venue.id}
                id={venue.id}
                name={venue.name}
                location={venue.location}
                date={venue.date}
                imageUrl={venue.imageUrl}
                capacity={venue.capacity}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-secondary/50 rounded-full p-4 w-fit mx-auto mb-4">
              <MapPin size={32} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No venues found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Venues;
