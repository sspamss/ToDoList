import React from 'react';
import CardUI from '../components/CardUI';
import LoggedInName from '../components/LoggedInName';

const CardPage = () =>
{
    return(
        <div>
            <LoggedInName/>
            <CardUI/>
        </div>
    );
}

export default CardPage;