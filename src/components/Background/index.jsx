import { createGlobalStyle } from 'styled-components'
import bgimg from './bg_lame.png'

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgimg});
    margin = 0;
    padding = 0;
  }
`

const Background = () => {
    return (
        <>
            <GlobalStyle/>
        </>
    );
};

export default Background;