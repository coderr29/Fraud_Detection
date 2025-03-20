
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VenueCardProps {
  id: string;
  name: string;
  location: string;
  date?: string;
  imageUrl: string;
  capacity?: string;
  featured?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const VenueCard = ({
  id,
  name,
  location,
  date,
  imageUrl,
  capacity,
  featured = false,
  className,
  style,
}: VenueCardProps) => {
  return (
    <Link 
      to={`/venues/${id}`} 
      className={cn(
        'group relative overflow-hidden rounded-xl flex flex-col transition-all duration-500',
        'bg-white border border-border hover:shadow-lg transform hover:-translate-y-1',
        featured ? 'md:col-span-2 aspect-[16/8]' : 'aspect-[3/4]',
        className
      )}
      style={style}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
      </div>

      {featured && (
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-white">
            Featured
          </span>
        </div>
      )}

      <div className="relative mt-auto p-4 text-white z-10">
        <h3 className="font-semibold text-xl mb-1 group-hover:text-primary-foreground transition-colors">{name}</h3>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary/90" />
            <span className="text-sm opacity-90">{location}</span>
          </div>
          
          {date && (
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary/90" />
              <span className="text-sm opacity-90">{date}</span>
            </div>
          )}
          
          {capacity && (
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-primary/90" />
              <span className="text-sm opacity-90">Capacity: {capacity}</span>
            </div>
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/80 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </Link>
  );
};

export default VenueCard;
