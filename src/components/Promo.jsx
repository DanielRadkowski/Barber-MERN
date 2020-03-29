import React from 'react';
import styled from 'styled-components';
import { ResponsiveEmbed } from 'react-bootstrap';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

background: #d65a31;

@media(min-width: ${breakpoints.sx}) and (max-width: ${breakpoints.sm}) {
    padding-top: 0;
  }
  
`

export default function Promo() {
    return (
        <Styles className="pt-sm-5">
            <ResponsiveEmbed aspectRatio="16by9">
                <embed src="https://www.youtube.com/embed/C6jZtwxYNVM" allowfullscreen></embed>
            </ResponsiveEmbed>
        </Styles>
    );
}  