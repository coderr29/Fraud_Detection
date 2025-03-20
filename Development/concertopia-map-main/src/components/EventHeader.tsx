
import React from 'react';
import { Star, Share } from 'lucide-react';

interface EventHeaderProps {
  eventName?: string;
  eventTime?: string;
}

const EventHeader = ({ 
  eventName = "Camps", 
  eventTime = "Monday 6:30 - 8:30am" 
}: EventHeaderProps) => {
  return (
    <div className="border-b border-gray-800 pb-2">
      <div className="flex justify-between items-center px-4 py-2">
        <div>
          <h1 className="text-2xl font-bold text-pink-600">{eventName}</h1>
          <p className="text-gray-400">{eventTime}</p>
        </div>
        <div className="flex gap-4">
          <button className="text-pink-600">
            <Star size={24} />
          </button>
          <button className="text-pink-600">
            <Share size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
