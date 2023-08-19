import React from 'react';

const InfoContainer = ({data, rep}) => {
    return (
        <div>
            <div className='info__container'>
                <div className="avatar" style={{backgroundImage: `url(${data.avatar_url})`}}></div>
                <div>
                    <div><strong>Name:</strong> {data.name}</div>
                    <div><strong>Username:</strong> {data.login}</div>
                    <div><strong>Followers:</strong> {data.followers}</div>
                    <div><strong>Following:</strong> {data.following}</div>
                    <div><strong>Repositories count:</strong> {data.public_repos}</div>
                </div>
                <div>
                    <div><strong>Latest repositories:</strong></div>
                    {rep
                        ?   rep.map(e =>
                            <div key={e}>{e}</div>
                        )
                        :   <div>Empty</div>
                    }
                </div>
            </div>
            <div>
                {data.company && <div><strong>Company:</strong> {data.company}</div> }
                {data.email && <div><strong>Email:</strong> {data.email}</div>}
                {data.bio && <div><strong>Bio:</strong> {data.bio}</div>}
                {data.twitter_username && <div><strong>Twitter username:</strong> {data.twitter_username}</div>}
                <div><strong>Public gists:</strong> {data.public_gists}</div>
                {data.created_at && <div><strong>Created at:</strong> {data.created_at.slice(0, 10)}
                    {" "} {data.created_at.slice(11, 19)}</div>}
                {data.updated_at && <div><strong>Last updated:</strong> {data.updated_at.slice(0, 10)}
                    {" "} {data.updated_at.slice(11, 19)}</div>}
                {data.location && <div><strong>Location:</strong> {data.location}</div>}
            </div>
        </div>
    );
};

export default InfoContainer;