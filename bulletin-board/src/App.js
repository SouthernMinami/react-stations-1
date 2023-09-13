import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NewThread from './components/NewThread';
import  Thread  from './components/Thread';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title='Tech Board'/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<NewThread />} />
          <Route path='thread/:threadId' element={<Thread />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
