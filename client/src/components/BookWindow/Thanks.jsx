import React, { useState } from 'react';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as loader from "../../animations/splashy-loader.json";
import styled from 'styled-components';


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loader.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Styles = styled.div`

height: 75vh;
#eeeeee;

`

export default function Thanks(props) {

  const [state, setState] = useState({
    done: false,
  });


    if (props.ready) {
      setTimeout(() => {
        setState({
          done: true,
        })
        setTimeout(() => {
          window.location = '/';
        }, 2500)
      }, 2000);

    }

  return (
    <Styles className={`${props.className} justify-content-center align-items-center`}>
        {!state.done ? (
          <div className="">
            <Lottie options={defaultOptions} height={120} width={120} />
          </div>
        ) : (
            <FadeIn>
              <h1 className="mx-auto text-center">Thank you for choosing our barbershop!</h1>
            </FadeIn>
          )}
    </Styles>
  );
}
