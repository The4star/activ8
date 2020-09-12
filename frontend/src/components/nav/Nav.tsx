import React, {useContext} from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
// components
import NavBarOption from './NavOption'
import NavButton from './NavButton';

// stores
import ActivityStore from '../../stores/activityStore';

interface IProps extends RouteComponentProps{
  
}

const NavBar = ({history }:IProps) => {
  const activityStore = useContext(ActivityStore);
  const { selectActivity } = activityStore;
  const createNewForm = () => {
    selectActivity(undefined)
    history.push('/createActivity')
  }
  return (
    <div className="nav">
      <div className="nav__options">
        <NavBarOption title="Activ8" link="/"/>
        <NavBarOption title="Activities" link="/activities"/>
        <NavButton buttonFunction={createNewForm} title="New Activity" />
      </div>
    </div>
  );
}

export default withRouter(observer(NavBar));