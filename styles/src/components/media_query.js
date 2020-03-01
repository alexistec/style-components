import React from 'react';
import styled from 'styled-components';

const Header =  styled.header`
    background : #db7093;
    text-align:center;
    border-radius:0.2em;
    color : #FFF;
    padding: 0.3em;
    margin:0.3 em;
    font-size:14px;

    @media (max-width:700px){
        background:#000;
        font-size : 20px;
        h1{
            color:yellow
        }
    }
`

const MediaQuery = () => {
    return(
        <div>
            <Header>            
                <h1>Media Query</h1>
            </Header>
        </div>
    )
}

export default MediaQuery;