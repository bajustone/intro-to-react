import { Component } from "react";

import Header from "./header";
import ContactList from "./contact-list";

class App extends Component{
    render(){
        return <div>
            <Header />
            <ContactList />
        </div>
    }
}
export default App;