import logo from './logo.svg';
import './App.css';
import FormPage from './components/Formpage';
import Post from './components/post';
import Modal from './components/Modal';


function App() {
  return (
    <div className="App">
     Instagram clone page
     <FormPage></FormPage>
    {/* <Post></Post> */}
    <Modal></Modal>
    </div>
  );
}

export default App;
