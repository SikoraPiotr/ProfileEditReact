import React from "react";

const ProfileSingle = ({accountData, label}) => {
    return (
        <div className="form-group">
            <label className="ProfileInformation__details--label">
                {label}
            </label>
            <div className="ProfileInformation__details--data">
                {accountData}
            </div>
        </div>
    )
}

export default ProfileSingle;