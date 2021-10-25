import { ICardProps } from '../interface/ICardProps';

import styled from 'styled-components';
import { url } from 'inspector';

export const Card = (props: ICardProps) => {
    return (

        <div className="card">
            <img src={props.image_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
            <Information href={props.url} target="_blank" >More information</Information>
            
        </div>

    )
}

const Information = styled.a`
    text-decoration: none;
    margin:5px;
`;