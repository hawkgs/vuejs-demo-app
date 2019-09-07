import Vue from 'vue';
import Router from 'vue-router';

import TodoList from './components/TodoList';
import AboutPage from './components/AboutPage';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'list',
    component: TodoList
  }, {
    path: '/about',
    name: 'about',
    component: AboutPage
  }]
});
