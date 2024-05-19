import { useState } from 'react';
import TimerHeader from './TimerHeader';
import TimerBody from './TimerBody';
import StopwatchBody from './StopwatchBody';

export default function Body() {
    const [activeTab, setActiveTab] = useState('timer');
    const [zoomed, setZoomed] = useState(false); // State to track zoom

    const toggleZoom = () => {
        setZoomed(!zoomed); // Toggle zoom state
    };

    return (
        <div
        className={`zoom-out rounded-md md:min-w-[650px] ${zoomed ? 'zoomed border-[#4285f4]' : 'border-[#b3b0b0]'} `}
        style={{ borderWidth: zoomed ? '0px' : '0.5px' }}>            
        {!zoomed && <TimerHeader activeTab={activeTab} setActiveTab={setActiveTab} />}
            <TimerBody activeTab={activeTab} toggleZoom={toggleZoom} />
            <StopwatchBody activeTab={activeTab} toggleZoom={toggleZoom} />
        </div>
    );
}