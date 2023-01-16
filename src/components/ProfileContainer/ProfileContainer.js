import React from "react";
import Profile from "../Profile/Profile.js";

const ProfileContainer = ({profile}) => {
    return (
        <div className="container">
                <Profile account={profile} key={profile.id}/>
        </div>
    )
}

export default ProfileContainer;