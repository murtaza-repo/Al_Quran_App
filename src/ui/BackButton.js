import React from 'react';
import { useHistory } from 'react-router-dom';

export const BackButton = () => {
    const history = useHistory();

    return (
        <button className="btn back-button" onClick={() => history.push("/")}>Back</button>
    )
}