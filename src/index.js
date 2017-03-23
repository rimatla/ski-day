import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import sampleData from './initialState'
import storeFactory from './store'
//this is a component that you can wrap around any component tree, and it will place the store in Context
import { Provider } from 'react-redux'
import { addError } from './actions'


//we're either going to load the state from local storage, whatever's saved under the Redux store key, or use the sampleData from initial state above
const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData;

//save to localStorage
const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState());

//make sure that any errors that occur with our application get recorded in state.
const handleError = error => {
    store.dispatch(
        addError(error.message)
    )
};

//create store
const store = storeFactory(initialState); //send-in the initial state data

//setup a listener
store.subscribe(saveState);

//globally expose React and Store to dev console
window.React = React;
window.store = store;

//add event listener for window object
window.addEventListener("error", handleError);

//route configuration
render(
    //Provider allows us to integrate our store down to the component tree
    //wrap it around routes to place the store in Context that can be accessible by any child components listed under routes
    <Provider store= {store}>
        {routes}
    </Provider>,
  document.getElementById('react-container')
);

