import { MdFullscreen } from "react-icons/md";

export default function TimerActions({ running, onStart, onStop, onReset }) {
    return (
        <div className="flex items-center justify-between border-t border-[#dadce0] py-4 text-xs">
            <div>
                <button className="timer-actions" onClick={running ? onStop : onStart}>{running ? 'STOP' : 'START'}</button>
                <button className="resetButton" onClick={onReset}>RESET</button>
            </div>
            <MdFullscreen className="text-2xl mr-5 text-[#868686]"  />
        </div>
    );
}