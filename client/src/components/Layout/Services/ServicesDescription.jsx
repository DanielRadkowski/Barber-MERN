import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

    color: white;

@media(min-width: ${breakpoints.md}) {  
    
    width: 80vw;
    p {
        text-indent: 5vw;
        font-size: 1em;
    }

@media(min-width: ${breakpoints.xl}) {  
    
    width: 70vw;
    p {
        text-indent: 2vw;
        font-size: 1.25em;
    }
}    

`


export default function ServicesDescription() {
    return (
        <Styles className="pb-5 mx-auto">
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum enim viverra
            pharetra lobortis. Nulla quis justo a augue molestie venenatis. In nec porttitor ipsum.
            Suspendisse a molestie est. Nulla sit amet vulputate mauris. Duis in dui tellus. Ut commodo,
            magna sed consectetur pulvinar, libero diam semper leo, vel lobortis sapien neque id purus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Cras ipsum nulla, porttitor sed posuere eget, vestibulum ac sem. Cras eget pellentesque est.
            Phasellus luctus fermentum feugiat. Nam finibus auctor arcu, a scelerisque tellus scelerisque nec.
            Morbi molestie porta fringilla. Nullam nisl est, pharetra posuere nulla non, porttitor convallis
            magna.</p>
        </Styles>
    );
}
