import { IoMdHourglass, IoMdStopwatch } from "react-icons/io";

export default function TimerHeader({ activeTab, setActiveTab }) {

    return (
        <div className="timer-header border-b border-[#dadce0] text-xs text-[#707579] hover:text-black">
            <button className={activeTab === 'timer' ? 'active' : ''} 
                onClick={() => setActiveTab('timer')}>
                    <span className="flex items-center justify-center">
                        <IoMdHourglass className="mr-1" />TIMER
                    </span>
            </button>
            <button className={activeTab === 'stopwatch' ? 'active' : ''}
                onClick={() => setActiveTab('stopwatch')}>
                    <span className="flex items-center justify-center">
                        <IoMdStopwatch className="mr-1" />STOPWATCH
                    </span>
            </button>
        </div>
    );
}