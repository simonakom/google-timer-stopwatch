import { IoMdHourglass, IoMdStopwatch } from "react-icons/io";
import PropTypes from "prop-types";

export default function TimerHeader({ activeTab, setActiveTab }) {
    return (
        <div className="border-b border-[#dadce0] text-xs text-[#707579] hover:text-black flex">
            <button className={`tab-button ${activeTab === 'timer' ? 'active' : ''}`} 
                onClick={() => setActiveTab('timer')}>
                    <span className="flex items-center justify-center">
                        <IoMdHourglass className="mr-1" />TIMER
                    </span>
            </button>
            <button className={`tab-button ${activeTab === 'stopwatch' ? 'active' : ''}`}
                onClick={() => setActiveTab('stopwatch')}>
                    <span className="flex items-center justify-center">
                        <IoMdStopwatch className="mr-1" />STOPWATCH
                    </span>
            </button>
        </div>
    );
}
TimerHeader.propTypes = {
    activeTab: PropTypes.string.isRequired, 
    setActiveTab: PropTypes.func.isRequired,
};