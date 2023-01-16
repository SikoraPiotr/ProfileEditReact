import React from "react";
import Avatar from "react-avatar-editor";
import ProfileSingle from "./profileSingle";
import "./Profile.scss"
const Profile = ({account}) => {
    return (
        <div className="row ProfileInformation">
            <div className="col col-lg-4 col-md-12 col-sm-12">
                <div className="ProfileInformation__avatar">
                    <Avatar width={250} height={250}  scale={1.5} image={account.image}/>
                </div>
            </div>
            <div className="col col-lg-8 col-md-12 col-sm-12">
                <div className="ProfileInformation__details">
                    <ProfileSingle label={"Account ID"} accountData={account.id} />
                    <ProfileSingle label={"Name"} accountData={account.name} />
                    <ProfileSingle label={"Lastname"} accountData={account.lastname} />
                    <ProfileSingle label={"Email"} accountData={account.email} />
                    <ProfileSingle label={"Phone"} accountData={account.phone} />
                    <ProfileSingle label={"About"} accountData={account.about} />
                </div>
            </div>
        </div>
    )
}

export default Profile;