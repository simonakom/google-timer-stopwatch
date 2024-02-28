import { useState } from 'react';
import TimerHeader from './TimerHeader';
import TimerBody from './TimerBody';
import StopwatchBody from './StopwatchBody';

export default function Body() {
    const [activeTab, setActiveTab] = useState('timer');

    return (
        <div className='border border-[#dadce0] rounded-md mx-5 my-5' style={{ borderWidth: '0.5px' }}>
            <TimerHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            <TimerBody activeTab={activeTab} />
            <StopwatchBody activeTab={activeTab} />
        </div>
    );
}