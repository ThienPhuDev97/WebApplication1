import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import  EditCategory  from './components/EditCategory';

import './custom.css'
import Category from './components/Category';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/Category' component={Category} />
            <Route path="/EditCategory/:id" component={EditCategory} ><EditCategory /></Route>
      </Layout>
    );
  }
}
