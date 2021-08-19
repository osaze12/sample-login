import './App.css';
import { Login } from './components/Login';
import { ChakraProvider } from "@chakra-ui/react"
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import { Dashboard } from './components/Dashboard';
import { Modal } from './components/Modal';
import { forgotPassModal, modal } from './components/store/atom';
import { useAtom } from 'jotai';
import { ForgotPassModal } from './components/ForgotPassModal';

function App() {
  const [showModal, setShowModal]      = useAtom(modal);
  const [forgotModal, setForgotModal]  = useAtom(forgotPassModal);

  const handleModalClose = () => {
    setShowModal(false);
  }

  const handleForgotModalClose = () => {
    setForgotModal(false);
  } 
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Switch>
              <Route path="/" exact component={Login} /> 
              <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </Router>
        <Modal showModal={showModal} shouldClose={handleModalClose}/>
        <ForgotPassModal showModal={forgotModal} shouldClose={handleForgotModalClose}/>
      </ChakraProvider>
    </div>
  );
}

export default App;
