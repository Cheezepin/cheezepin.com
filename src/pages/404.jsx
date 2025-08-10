import React from 'react';
import AnimatedPage from "./AnimatedPage";
import Ononoki from '/src/components/Ononoki';
import "./pages.css";

const ErrorPage = () => {
  return (
    <AnimatedPage>
        <div style={{
            justifyContent: 'centre',
            alignItems: 'centre',
            fontSize:"30px",
        }}
        >
        <h1 class="centerheader">404 Not Found</h1>
        <Ononoki/>
        </div>
    </AnimatedPage>
  );
};

export default ErrorPage;