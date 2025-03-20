
import React, { useState } from 'react';
import { 
  Bell, 
  Map, 
  Eye, 
  Vibrate, 
  Wifi, 
  Battery, 
  Info,
  Check,
  X
} from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import Layout from '@/components/Layout';
import { toast } from 'sonner';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [arMode, setArMode] = useState(true);
  const [dataUsage, setDataUsage] = useState(true);
  const [batteryOptimization, setBatteryOptimization] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [mapQuality, setMapQuality] = useState([50]);
  
  const handleSliderChange = (value: number[]) => {
    setMapQuality(value);
  };
  
  const saveSettings = () => {
    toast.success('Settings saved successfully', {
      description: 'Your preferences have been updated',
      action: {
        label: 'Dismiss',
        onClick: () => {}
      }
    });
  };
  
  const resetSettings = () => {
    setNotificationsEnabled(true);
    setArMode(true);
    setDataUsage(true);
    setBatteryOptimization(true);
    setVibrationEnabled(true);
    setMapQuality([50]);
    
    toast('Settings reset to default', {
      description: 'All preferences have been reset'
    });
  };
  
  return (
    <Layout>
      <div className="page-container">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Customize your app experience
            </p>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            {/* Notifications */}
            <div className="glass-panel rounded-xl divide-y divide-border">
              <div className="p-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Bell size={20} className="text-primary" />
                  Notifications
                </h2>
              </div>
              
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Enable Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about your seat and venue
                  </p>
                </div>
                <Switch 
                  checked={notificationsEnabled} 
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>
            </div>
            
            {/* Navigation */}
            <div className="glass-panel rounded-xl divide-y divide-border">
              <div className="p-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Map size={20} className="text-primary" />
                  Navigation & Display
                </h2>
              </div>
              
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Augmented Reality Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Use AR for in-venue navigation
                  </p>
                </div>
                <Switch 
                  checked={arMode} 
                  onCheckedChange={setArMode}
                />
              </div>
              
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Enable Vibration</h3>
                  <p className="text-sm text-muted-foreground">
                    Vibrate when approaching turns or destinations
                  </p>
                </div>
                <Switch 
                  checked={vibrationEnabled} 
                  onCheckedChange={setVibrationEnabled}
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-medium mb-1">Map Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Adjust the detail level of venue maps
                  </p>
                </div>
                <div className="px-2">
                  <Slider 
                    value={mapQuality} 
                    onValueChange={handleSliderChange}
                    max={100}
                    step={1}
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Basic</span>
                    <span>Standard</span>
                    <span>Detailed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Performance */}
            <div className="glass-panel rounded-xl divide-y divide-border">
              <div className="p-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Battery size={20} className="text-primary" />
                  Performance & Data
                </h2>
              </div>
              
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Data Saving Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce data usage by loading lower quality maps
                  </p>
                </div>
                <Switch 
                  checked={dataUsage} 
                  onCheckedChange={setDataUsage}
                />
              </div>
              
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Battery Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce battery consumption during navigation
                  </p>
                </div>
                <Switch 
                  checked={batteryOptimization} 
                  onCheckedChange={setBatteryOptimization}
                />
              </div>
            </div>
            
            {/* About */}
            <div className="glass-panel rounded-xl p-6">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <Info size={20} className="text-primary" />
                About
              </h2>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version</span>
                  <span>1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Build</span>
                  <span>2023.06.21</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Device</span>
                  <span>Web Browser</span>
                </div>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                className="btn-primary sm:flex-1 flex items-center justify-center gap-2"
                onClick={saveSettings}
              >
                <Check size={18} />
                Save Settings
              </button>
              <button 
                className="btn-outline sm:flex-1 flex items-center justify-center gap-2"
                onClick={resetSettings}
              >
                <X size={18} />
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
