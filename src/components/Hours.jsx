import React, { useState } from 'react';
import styled from 'styled-components';
import * as dateFns from 'date-fns';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import { Container, Row, Col } from 'react-bootstrap';


const Styles = styled.div`

`

export default function Hours(props) {
    return (
        <Styles className={`${props.class} border border-danger h-100`} >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum enim imperdiet, sollicitudin est nec, dictum nulla. Vestibulum id libero quis erat fringilla consequat. Nam tempus eros sed arcu fringilla, at dignissim augue fermentum. Integer imperdiet, nulla sit amet eleifend cursus, metus diam vehicula dui, et facilisis ex metus quis nulla. Nulla mollis maximus efficitur. Quisque faucibus pharetra velit, vitae interdum urna cursus sit amet. Mauris ornare venenatis ex in suscipit. Donec pellentesque ornare ante, id efficitur quam. Praesent elementum sagittis nisl et vestibulum. Fusce consequat mi nec dapibus pretium. Nam ut pulvinar mauris. Phasellus semper ornare nisi, id luctus metus venenatis ut. Donec accumsan arcu porta facilisis molestie. Ut eu condimentum risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultricies nisl id tempus dignissim.

                Nam at justo vel velit congue pretium. Nulla facilisi. Donec in velit et dolor tincidunt ultricies a at tortor. Integer luctus libero quis diam rutrum, et suscipit enim porta. Duis facilisis volutpat est nec volutpat. Nullam suscipit luctus auctor. Donec maximus auctor tincidunt. Donec ac pharetra turpis, ac interdum sapien. Donec eget porttitor turpis. Nam finibus ac dolor et tincidunt. Quisque eget urna sapien. Ut consectetur est tristique, mattis arcu quis, eleifend purus. Etiam pellentesque, leo a suscipit lobortis, arcu massa cursus ipsum, at congue lectus magna a velit. Proin non urna massa.

                Nulla vitae nibh eget ipsum rhoncus tincidunt. Suspendisse in arcu quis est volutpat venenatis vitae non diam. Nulla hendrerit sapien sed finibus auctor. Suspendisse lobortis cursus odio non posuere. Vivamus sollicitudin scelerisque est non tempor. Nunc non placerat augue. Mauris tincidunt condimentum ultrices. Vestibulum lobortis lorem sit amet sem vestibulum, non dignissim est interdum.

                Donec mollis nisi in elit placerat, eu pretium nulla pretium. Pellentesque augue magna, gravida lacinia pellentesque vel, pulvinar in urna. Vestibulum ac tincidunt nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nulla elit, ultricies non rutrum sed, varius id neque. Maecenas vel diam ac massa dignissim feugiat eu vitae diam. Proin lectus risus, facilisis non justo at, tincidunt auctor neque. Fusce gravida imperdiet ligula.

                Sed efficitur nibh in justo eleifend rhoncus. Nam quis lacus suscipit, convallis urna eu, semper massa. Nunc vulputate ut orci non faucibus. Praesent ut orci lorem. Ut placerat purus velit, sit amet dapibus mauris interdum in. Phasellus eget ex eget nisl tincidunt sollicitudin efficitur vel est. Donec viverra justo maximus augue venenatis, non eleifend urna dictum. Proin libero orci, commodo id efficitur et, varius ut enim. Suspendisse potenti. Vivamus lacinia rhoncus mi, eu suscipit quam varius a. Fusce accumsan justo eu massa placerat cursus. Vestibulum nunc elit, tempus in suscipit sed, condimentum rutrum ante. Phasellus nunc ex, fermentum in cursus vitae, posuere eget ex.
            </p>
        </Styles>
    );
}