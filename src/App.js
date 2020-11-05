import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import state from './components/redux/state';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wraper'>
        <Header />
        <Navbar state={props.state.navBarPage} />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
          <Route path='/dialogs' exact render={() =>
            <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/setting' render={() => <Setting />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
