
import React from 'react';
import { ArrowRight, ArrowUp, TrendingUp, ArrowDown, CornerUpRight, CornerDownRight, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Direction } from '@/pages/SeatFinder';

interface NavigationGuideProps {
  directions: Direction[];
  currentStep: number;
  onNextStep?: () => void;
  onPreviousStep?: () => void;
  className?: string;
}

const NavigationGuide = ({
  directions,
  currentStep,
  onNextStep,
  onPreviousStep,
  className
}: NavigationGuideProps) => {
  const currentDirection = directions[currentStep] || directions[0];
  const progressPercentage = ((currentStep + 1) / directions.length) * 100;
  
  const renderDirectionIcon = (type: Direction['type']) => {
    switch (type) {
      case 'straight':
        return <ArrowUp size={28} />;
      case 'right':
        return <CornerUpRight size={28} />;
      case 'left':
        return <ArrowRight size={28} className="rotate-[-90deg]" />;
      case 'upstairs':
        return <TrendingUp size={28} />;
      case 'downstairs':
        return <ArrowDown size={28} />;
      case 'slight-right':
        return <CornerUpRight size={28} className="rotate-[-30deg]" />;
      case 'slight-left':
        return <CornerDownRight size={28} className="rotate-[120deg]" />;
      default:
        return <ArrowUp size={28} />;
    }
  };
  
  return (
    <div className={cn("bg-gray-900 text-white rounded-xl shadow-sm overflow-hidden border border-gray-800", className)}>
      <div className="bg-pink-600 text-white p-4">
        <h3 className="font-semibold flex items-center gap-2">
          <MapPin size={18} />
          Navigation Guide
        </h3>
        <p className="text-sm opacity-90">Step {currentStep + 1} of {directions.length}</p>
      </div>
      
      <div className="p-6">
        {/* Progress bar */}
        <Progress value={progressPercentage} className="h-1.5 mb-6" />
        
        {/* Current Step Visualization */}
        <div className="flex items-center justify-center mb-6">
          <div className="bg-pink-600/10 rounded-full p-6 text-pink-500">
            {renderDirectionIcon(currentDirection.type)}
          </div>
        </div>
        
        {/* Direction Text */}
        <div className="text-center mb-6">
          <h4 className="text-lg font-medium mb-1">{currentDirection.instruction}</h4>
          <p className="text-sm text-gray-400">Distance: {currentDirection.distance}</p>
        </div>
        
        {/* Progress Indicators */}
        <div className="flex justify-center gap-1 mb-6">
          {directions.map((_, index) => (
            <div 
              key={index}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === currentStep 
                  ? "w-6 bg-pink-600" 
                  : "w-2 bg-pink-600/30"
              )}
            />
          ))}
        </div>
        
        {/* Navigation Controls */}
        <div className="flex gap-3">
          <Button
            onClick={onPreviousStep}
            disabled={currentStep === 0}
            variant="outline"
            className={cn(
              "flex-1 bg-gray-800 border-gray-700 text-white",
              currentStep === 0 && "opacity-50 cursor-not-allowed"
            )}
          >
            Previous
          </Button>
          <Button
            onClick={onNextStep}
            disabled={currentStep === directions.length - 1}
            className={cn(
              "flex-1 bg-pink-600 hover:bg-pink-700 text-white",
              currentStep === directions.length - 1 && "opacity-50 cursor-not-allowed"
            )}
          >
            {currentStep === directions.length - 1 ? "Arrived" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationGuide;
