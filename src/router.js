import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" initial />
      </Scene>
      <Scene key="main">
        <Scene
        key="employeeList"
         component={EmployeeList}
         title="Employee"
         rightTitle="Add"
         onRight={() => Actions.employeeCreate()}
         initial
        />
        <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
