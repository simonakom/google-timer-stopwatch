import { MdFullscreen } from "react-icons/md";
import * as PropTypes from "prop-types";

export default function TimerActions({ running, onStart, onStop, onReset, toggleZoom }) {
    return (
        <div className="flex items-center justify-between border-t border-[#edeef1] py-4 text-xs">
            <div>
                <button className="timer-actions" onClick={running ? onStop : onStart}>{running ? 'STOP' : 'START'}</button>
                <button className="resetButton" onClick={onReset}>RESET</button>
            </div>
            <MdFullscreen className="text-2xl mr-5 text-[#868686] cursor-pointer" onClick={toggleZoom} />
        </div>
    );
}
TimerActions.propTypes = {
    running: PropTypes.bool,
    onStart: PropTypes.func,
    onStop: PropTypes.func,
    onReset: PropTypes.func,
    toggleZoom: PropTypes.func,
};
