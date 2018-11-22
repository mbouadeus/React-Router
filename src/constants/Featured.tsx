import React from 'react';

export const Featured = ({props: {match: {params: {name, topic}: Props}}}) => {
   return ( <div className="main-content">
        <h2>{name}</h2>
        <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
   )
}