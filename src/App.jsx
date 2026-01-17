
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import PromptList from './component/PromptList';
import PromptDetails from './component/PromptDetails';
import VersionDetails from './component/VersionDetails';
import AddPrompt from './component/AddPrompt';
import DeleteConfirmation from './component/DeleteConfirmation';
import UpdatePrompt from './component/UpdatePrompt';

function App() {


      return <>

            <h1>ברוכים הבאים</h1>

            <header>
                  <nav>
                        <Link to='/promptList' className='link'>פרומפטים</Link>
                  </nav>
            </header>


            <Routes>
                  <Route path='promptList' element={<PromptList />} />
                  <Route path='promptDetails' element={<PromptDetails />} />
                  <Route path='versionDetails' element={<VersionDetails />} />
                  <Route path='addPrompt' element={<AddPrompt />} />
                  <Route path='deleteConfirmation' element={<DeleteConfirmation />} />
                  <Route path='updatePrompt' element={<UpdatePrompt />} />
            </Routes>


      </>

}

export default App;

