
import React, { useState } from 'react';
import { ZoomIn, ZoomOut, X, Info, MapPin, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SeatMapProps {
  venueName?: string;
  yourSection?: string;
  yourRow?: string;
  yourSeat?: string;
  currentStep?: number;
  className?: string;
}

const SeatMap = ({
  venueName = "SoFi Stadium",
  yourSection = "C",
  yourRow = "14",
  yourSeat = "22",
  currentStep = -1,
  className
}: SeatMapProps) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showSeatDetail, setShowSeatDetail] = useState(false);
  
  const increaseZoom = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const decreaseZoom = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  
  // Generate the semicircular grid layout
  const generateAmphitheaterSeatMap = () => {
    // Save the image to the public folder
    const mapImageUrl = '/lovable-uploads/1cf13d7f-a1e8-4a12-b75c-31401d371df8.png';
    
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={mapImageUrl} 
          alt="Venue seating map" 
          className="max-w-full max-h-full"
        />
        
        {/* Navigation progress indicator */}
        {currentStep >= 0 && (
          <div className="absolute left-0 right-0 top-0 p-2">
            <div className="bg-black/70 rounded-lg p-2 text-white text-center">
              <div className="flex items-center justify-center mb-2">
                <Navigation className="text-pink-500 mr-2" size={20} />
                <span className="text-sm font-semibold">Navigation in Progress</span>
              </div>
              <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-pink-500 h-full transition-all duration-300 ease-in-out"
                  style={{ width: `${(currentStep + 1) * 100 / 7}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
        
        {/* You are here indicator - changes based on navigation step */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 text-center flex items-center justify-center gap-2">
          <MapPin size={18} className="text-pink-500" />
          {currentStep >= 0 ? (
            <span>
              {currentStep === 6 
                ? `You've reached your seat: Section ${yourSection}, Row ${yourRow}, Seat ${yourSeat}` 
                : `Step ${currentStep + 1} of 7: Following directions to your seat`}
            </span>
          ) : (
            <span>You are outside of the Event</span>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-black", className)}>
      {/* Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <button
          onClick={increaseZoom}
          className="icon-btn bg-gray-800 text-white shadow-sm hover:bg-gray-700"
          aria-label="Zoom in"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={decreaseZoom}
          className="icon-btn bg-gray-800 text-white shadow-sm hover:bg-gray-700"
          aria-label="Zoom out"
        >
          <ZoomOut size={20} />
        </button>
      </div>
      
      {/* Map */}
      <div 
        className="relative w-full h-full min-h-[400px] bg-black"
        style={{
          transform: `scale(${zoomLevel})`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        {generateAmphitheaterSeatMap()}
      </div>
      
      {/* Seat Information Panel */}
      <div 
        className={cn(
          "fixed inset-0 z-50 flex items-end justify-center sm:items-center p-4 backdrop transition-all duration-300",
          showSeatDetail ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div 
          className={cn(
            "w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform",
            showSeatDetail ? "scale-100" : "scale-95"
          )}
        >
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Info size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Your Seat Details</h3>
                  <p className="text-sm text-muted-foreground">{venueName}</p>
                </div>
              </div>
              <button
                onClick={() => setShowSeatDetail(false)}
                className="icon-btn hover:bg-secondary"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-secondary rounded-lg p-4 text-center">
                <span className="text-sm text-muted-foreground">Section</span>
                <div className="text-2xl font-semibold mt-1">{yourSection}</div>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <span className="text-sm text-muted-foreground">Row</span>
                <div className="text-2xl font-semibold mt-1">{yourRow}</div>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <span className="text-sm text-muted-foreground">Seat</span>
                <div className="text-2xl font-semibold mt-1">{yourSeat}</div>
              </div>
            </div>
            
            <div className="mt-6">
              <button 
                className="btn-primary w-full"
                onClick={() => setShowSeatDetail(false)}
              >
                Navigate to Seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatMap;
