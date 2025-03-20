
import React from 'react';
import { Compass } from 'lucide-react';
import SeatMap from './SeatMap';
import EventHeader from './EventHeader';
import NavigationGuide from './NavigationGuide';
import { Direction } from '@/pages/SeatFinder';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';

interface TicketData {
  eventName: string;
  venue: string;
  date: string;
  section: string;
  row: string;
  seat: string;
  gate: string;
  ticketHolder: string;
  ticketId: string;
}

interface SeatMapSectionProps {
  ticketData: TicketData;
  onReset: () => void;
  isNavigating: boolean;
  startNavigation: () => void;
  currentStep: number;
  directions: Direction[];
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const SeatMapSection = ({ 
  ticketData, 
  onReset, 
  isNavigating,
  startNavigation,
  currentStep,
  directions,
  onNextStep,
  onPreviousStep
}: SeatMapSectionProps) => {
  return (
    <div className="animate-fade-in">
      <EventHeader eventName={ticketData.eventName} eventTime={ticketData.date} />
      
      <div className="grid grid-cols-1 gap-6 px-4 py-6">
        <SeatMap
          venueName={ticketData.venue}
          yourSection={ticketData.section}
          yourRow={ticketData.row}
          yourSeat={ticketData.seat}
          currentStep={isNavigating ? currentStep : -1}
          className="h-[400px]"
        />
        
        {isNavigating ? (
          <NavigationGuide
            directions={directions}
            currentStep={currentStep}
            onNextStep={onNextStep}
            onPreviousStep={onPreviousStep}
            className="mb-16"
          />
        ) : (
          <div className="flex justify-center mb-16">
            <Button 
              onClick={startNavigation}
              className="bg-pink-600 hover:bg-pink-700 text-white flex items-center gap-2"
            >
              <Compass size={18} />
              Start Navigation to Seat
            </Button>
          </div>
        )}
        
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-black border-t border-gray-800">
          <button
            className="btn-outline w-full mt-6 flex items-center justify-center gap-2 bg-gray-900 text-white border-gray-700"
            onClick={onReset}
          >
            <Compass size={18} />
            Start New Navigation
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatMapSection;
