
import React, { useState } from 'react';
import { TicketIcon, ScanLine, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TicketScannerProps {
  onScanComplete?: (ticketData: any) => void;
  onCancel?: () => void;
  className?: string;
}

const TicketScanner = ({ 
  onScanComplete, 
  onCancel,
  className 
}: TicketScannerProps) => {
  const [scanning, setScanning] = useState(false);

  const handleScanComplete = () => {
    // Mock data - in a real app, this would come from the QR code scanner
    const mockTicketData = {
      eventName: "Taylor Swift: The Eras Tour",
      venue: "SoFi Stadium",
      date: "August 7, 2023",
      section: "C",
      row: "14",
      seat: "22",
      gate: "Gate 5",
      ticketHolder: "John Doe",
      ticketId: "TS-ERA-1234567890"
    };
    
    setScanning(false);
    if (onScanComplete) {
      onScanComplete(mockTicketData);
    }
  };

  const startScanning = () => {
    setScanning(true);
    // In a real app, this would start the camera and QR scanner
    // For demo purposes, we'll just simulate a scan after 3 seconds
    setTimeout(handleScanComplete, 3000);
  };

  const cancelScanning = () => {
    setScanning(false);
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {!scanning ? (
        <div className="text-center space-y-6 max-w-md mx-auto">
          <div className="bg-primary/10 rounded-full p-5 mx-auto w-fit">
            <TicketIcon size={48} className="text-primary" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Scan Your Ticket</h2>
            <p className="text-muted-foreground">
              Point your camera at the QR code on your ticket to find your seat and get navigation directions.
            </p>
          </div>
          
          <button 
            onClick={startScanning}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <ScanLine size={20} />
            Start Scanning
          </button>
        </div>
      ) : (
        <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden bg-black">
          {/* Camera viewfinder simulation */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-3/4 aspect-square border-2 border-white/70 rounded-lg overflow-hidden">
                {/* Scan animation */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary/80 animate-pulse-subtle" />
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary/80 animate-pulse-subtle" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/80 animate-pulse-subtle" />
                <div className="absolute top-0 right-0 bottom-0 w-1 bg-primary/80 animate-pulse-subtle" />
                
                {/* Corners */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary" />
                
                {/* Scan line animation */}
                <div 
                  className="absolute left-0 right-0 h-0.5 bg-primary" 
                  style={{
                    animation: 'scan 2s ease-in-out infinite',
                  }}
                />
              </div>
            </div>
            
            {/* Scanning text at the bottom */}
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <p className="font-medium">Scanning...</p>
              <p className="text-sm text-white/80">Hold steady</p>
            </div>
          </div>
          
          {/* Cancel button */}
          <button 
            onClick={cancelScanning}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Cancel scanning"
          >
            <X size={24} />
          </button>
        </div>
      )}
      
      {/* Custom scanning animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0%, 100% { top: 5%; }
          50% { top: 95%; }
        }
      `}} />
    </div>
  );
};

export default TicketScanner;
