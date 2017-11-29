import React, {Component} from 'react'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import FilteredArticleList from "../containers/FilteredArticleList";

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <Counter />
                <UserForm />
                <Filters articles = {[]}/>
                <FilteredArticleList />
            </div>
        )
    }
}

export default App