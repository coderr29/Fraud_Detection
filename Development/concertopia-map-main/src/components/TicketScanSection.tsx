
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, MapPinned } from 'lucide-react';
import TicketScanner from './TicketScanner';

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

interface TicketScanSectionProps {
  onScanComplete: (data: TicketData) => void;
}

const TicketScanSection = ({ onScanComplete }: TicketScanSectionProps) => {
  const handleManualEntry = () => {
    onScanComplete({
      eventName: "Taylor Swift: The Eras Tour",
      venue: "SoFi Stadium",
      date: "August 7, 2023",
      section: "C",
      row: "14",
      seat: "22",
      gate: "Gate 5",
      ticketHolder: "Manual Entry",
      ticketId: "MANUAL-ENTRY"
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Your Seat</h1>
        <p className="text-muted-foreground">
          Scan your ticket or input your seat details to get started.
        </p>
      </div>
      
      <Tabs defaultValue="scan">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="scan" className="flex items-center gap-2">
            <QrCode size={16} />
            <span>Scan Ticket</span>
          </TabsTrigger>
          <TabsTrigger value="manual" className="flex items-center gap-2">
            <MapPinned size={16} />
            <span>Manual Entry</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="scan" className="animate-slide-up">
          <TicketScanner onScanComplete={onScanComplete} />
        </TabsContent>
        
        <TabsContent value="manual" className="animate-slide-up">
          <div className="glass-panel rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Enter Seat Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="venue" className="block text-sm font-medium mb-1">
                    Venue
                  </label>
                  <select
                    id="venue"
                    className="w-full px-3 py-2 bg-background border border-input rounded-md"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a venue</option>
                    <option value="sofi">SoFi Stadium</option>
                    <option value="msg">Madison Square Garden</option>
                    <option value="o2">O2 Arena</option>
                    <option value="wembley">Wembley Stadium</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="event" className="block text-sm font-medium mb-1">
                    Event
                  </label>
                  <select
                    id="event"
                    className="w-full px-3 py-2 bg-background border border-input rounded-md"
                    defaultValue=""
                  >
                    <option value="" disabled>Select an event</option>
                    <option value="concert1">Taylor Swift: The Eras Tour</option>
                    <option value="concert2">Ed Sheeran World Tour</option>
                    <option value="concert3">Coldplay Music of the Spheres</option>
                    <option value="sports1">NFL: Rams vs. Chiefs</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="section" className="block text-sm font-medium mb-1">
                    Section
                  </label>
                  <input
                    id="section"
                    type="text"
                    className="w-full px-3 py-2 bg-background border border-input rounded-md"
                    placeholder="e.g. C"
                  />
                </div>
                
                <div>
                  <label htmlFor="row" className="block text-sm font-medium mb-1">
                    Row
                  </label>
                  <input
                    id="row"
                    type="text"
                    className="w-full px-3 py-2 bg-background border border-input rounded-md"
                    placeholder="e.g. 14"
                  />
                </div>
                
                <div>
                  <label htmlFor="seat" className="block text-sm font-medium mb-1">
                    Seat
                  </label>
                  <input
                    id="seat"
                    type="text"
                    className="w-full px-3 py-2 bg-background border border-input rounded-md"
                    placeholder="e.g. 22"
                  />
                </div>
              </div>
              
              <button
                className="btn-primary w-full mt-2"
                onClick={handleManualEntry}
              >
                Find My Seat
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TicketScanSection;
