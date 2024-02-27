import Timer from './components/Timer';
import TimerHeader from './components/TimerHeader';
import Body from './components/Body';
import TimerBody from './components/TimerBody';
import StopwatchBody from './components/StopwatchBody';
import TimerActions from './components/TimerActions';


export default function Layout () {
  return (
    <div>
      <Timer />
      <TimerHeader />
      <Body />
      <TimerBody />
      <StopwatchBody />
      <TimerActions />
    </div> 
  )
}