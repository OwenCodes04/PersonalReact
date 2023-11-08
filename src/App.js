import './App.css'; // Assuming you still have some custom styles
import NavBar from './components/NavBar';
import TabBar from './components/TabBar';
import DividerDocument from './components/DividerDocument';
import DividerQA from './components/DividerQA';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <TabBar />
      {/* <DividerDocument className="flex-grow" /> */}
      <DividerQA></DividerQA>

    </div>
  );
}

export default App;
