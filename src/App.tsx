import { NavLink, Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Card, { CardVariant } from './components/Card';
import CardPage from './components/CardPage';
import EventExemple from './components/EventExemple';
import TodoItemPage from './components/TodoItemPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UsersPage from './components/UsersPage';





const App = () => {



  return (
    <BrowserRouter>
<div className="" style={{margin:"20px 0"}}>
          <NavLink style={{margin:"0 20px"}} to="/users">Пользователи</NavLink>
          <NavLink style={{margin:"0 20px"}} to="/todos">Задачи</NavLink>
          <NavLink style={{margin:"0 20px"}} to="/event">События Браузера</NavLink>
          <NavLink style={{margin:"0 20px"}} to="/card">Карточка</NavLink>
        </div>
      
        
        <Routes>




          <Route path='/users' element={<UsersPage />} />



          <Route path='/event' element={<EventExemple />} />


          <Route path='/todos' element={<TodosPage />} />
          <Route path='/users/:id' element={<UserItemPage />} />
          <Route path='/todos/:id' element={<TodoItemPage />} />
          <Route path='/card' element={<CardPage />} />

        
        
      </Routes>

    </BrowserRouter>

  );
}

export default App;
