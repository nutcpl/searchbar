import React from 'react'

export default function UserInfo(props) {
    return (
        <div>
            <div className="user-info">
                <div className="avatar">
                    <img src={props.user.avatar_url} alt="avatar" width="250px" />
                </div>
                <div className="content">
                    <h1>{props.user.name}</h1>
                    <p>
                        <strong>Bio: {props.user.bio} </strong>
                    </p>

                    <p>
                        <strong>Location: {props.user.location} </strong>
                    </p>

                    <p>
                        <strong>Followers: {props.user.followers} </strong>
                    </p>

                    <p>
                        <strong>Following: {props.user.following} </strong>
                    </p>
                </div>
            </div>
        </div>
    )
}
