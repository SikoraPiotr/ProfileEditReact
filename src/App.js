import React, {Component} from "react";
import Header from "./components/Header/Header";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer.js";
import ProfileEdit from "./components/ProfileEdit/ProfileEdit";
import Footer from "./components/Footer/Footer";

class App extends Component {
    state = {
        profile: [
            {
                id: 1,
                name: "Piotr",
                lastname: "Sikora",
                phone: "+48536896486",
                email: "piotrsikora5@gmail.com",
                date: "1991-02-28",
                about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                    "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
                    "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, " +
                    "sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: 'https://i.pinimg.com/originals/a4/4a/f3/a44af3bb5f074e3cdb4be8a56232c996.jpg',
            }
        ]
    }

    editAccount = (currentlyEditedProfile) => {
        const allProfiles = [...this.state.profile];
        let profilePosition = allProfiles.map(accounts => accounts.id).indexOf(currentlyEditedProfile.id);
        allProfiles[profilePosition] = currentlyEditedProfile;
        this.setState({profile: allProfiles});
    }

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Route path="/" exact>
                    <ProfileContainer profile={this.state.profile[0]}/>
                </Route>
                <Switch>
                    <Route path="/edit/">
                        <ProfileEdit profile={this.state.profile} editAccount={this.editAccount}/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default App;