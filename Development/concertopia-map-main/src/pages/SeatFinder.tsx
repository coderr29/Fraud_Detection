
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import TicketScanSection from '@/components/TicketScanSection';
import SeatMapSection from '@/components/SeatMapSection';

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

export interface Direction {
  type: 'straight' | 'right' | 'left' | 'upstairs' | 'downstairs' | 'slight-right' | 'slight-left';
  distance: string;
  instruction: string;
}

const SeatFinder = () => {
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  
  const handleScanComplete = (data: TicketData) => {
    setTicketData(data);
  };
  
  const resetTicketData = () => {
    setTicketData(null);
    setCurrentStep(0);
    setIsNavigating(false);
  };

  const startNavigation = () => {
    setIsNavigating(true);
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, getNavigationDirections().length - 1));
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const getNavigationDirections = (): Direction[] => {
    // Generate directions based on the ticket data
    // This would ideally come from an API or be calculated based on venue layout
    return [
      {
        type: 'straight',
        distance: '50m',
        instruction: 'Enter through Gate ' + (ticketData?.gate || 'A') + ' and walk straight ahead'
      },
      {
        type: 'right',
        distance: '20m',
        instruction: 'Turn right at the concession stand'
      },
      {
        type: 'upstairs',
        distance: '10m',
        instruction: 'Take the stairs to Level 2'
      },
      {
        type: 'slight-left',
        distance: '30m',
        instruction: 'Follow the corridor slightly to your left'
      },
      {
        type: 'straight',
        distance: '15m',
        instruction: `Look for Section ${ticketData?.section || 'C'} on your right`
      },
      {
        type: 'slight-right',
        distance: '5m',
        instruction: `Enter Section ${ticketData?.section || 'C'} and walk down to Row ${ticketData?.row || '14'}`
      },
      {
        type: 'straight',
        distance: '3m',
        instruction: `Find Seat ${ticketData?.seat || '22'} in Row ${ticketData?.row || '14'}`
      }
    ];
  };
  
  return (
    <Layout>
      <div className="page-container bg-black text-white min-h-screen">
        {!ticketData ? (
          <TicketScanSection onScanComplete={handleScanComplete} />
        ) : (
          <SeatMapSection 
            ticketData={ticketData} 
            onReset={resetTicketData}
            isNavigating={isNavigating}
            startNavigation={startNavigation}
            currentStep={currentStep}
            directions={getNavigationDirections()}
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )}
      </div>
    </Layout>
  );
};

export default SeatFinder;
