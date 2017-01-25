import React from 'react';
import HomeClient from '../clienthome/home';
import TopMenu from '../leftmenu/topmenu';
import DefaultPage from './defaultpageclient';
import AssistanView from '../interaction/assistantChatContainer';
export default class LeftMenuContent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      switch(this.props.sidebarItemSelected){
        case 'Build':{
        return  <DefaultPage/>
      }
        case 'Home':{
        return  <DefaultPage />
        }
        case 'ChatBot':{
        return  <AssistanView/>
        }

        case 'SavedQueries':{
        return  <TopMenu/>
        }
        case 'Unanswered Queries':{
        return  <TopMenu/>
        }
      }
  }
}
