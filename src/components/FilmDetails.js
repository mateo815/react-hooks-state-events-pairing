import React from 'react';

function FilmDetails(props) {
    const title = props.title
    const views = props.views
    const uploaded = props.createdAt


    return <div>
        <h2>{title}</h2>
        <div>{views} Views | Uploaded {uploaded} </div>
    </div>;
}

export default FilmDetails;
