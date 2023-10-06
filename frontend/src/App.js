import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chatpage from './pages/Chatpage';
import { Text } from '@chakra-ui/react';
function App() {
  return (
    <>
      <Text fontSize={['12px','md','lg']} style={{textAlign:'center',padding:'5px'}}>
        Build By Arslan Haroon 👉 <a style={{borderBottom:'2px solid black'}} href='https://github.com/ArslanJajja1' target='_blank'>GitHub</a>
      </Text>
      <div className="app">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
    </>
  );
}

export default App;
