import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import SidebarOption from './components/sidebar/SidebarOption';
import Timeline from './components/timeline/Timeline';
import Widgets from './components/widget/Widget';

function App() {
  return (
    <div className='app'>
      <Sidebar/>
      <Timeline/>
      <Widgets/>
      </div>
  );
}

export default App;
