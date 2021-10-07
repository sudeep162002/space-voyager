import {render,screen,cleanup} from '@testing-library/react';
import App from '../App';
import Error from '../components/Error'
import  ReactDOM from 'react-dom';

import {isTSAnyKeyword } from '@babel/types';

import 'jest-canvas-mock';






import '@testing-library/jest-dom/extend-expect';





import react from 'react';

import renderer from 'react-test-renderer'

afterEach(()=>{
    cleanup();
});


test ('searchbox should be in screen',()=>{
    render(<App/>);
    const searchkabox=screen.getByTestId("searchkabox");
    expect (searchkabox).toBeInTheDocument;  
} )




test ('main_heading',()=>{
    render(<App/>);
    const main_heading=screen.getByTestId("main_heading");
    expect (main_heading).toBeInTheDocument;
} )

test ('footer',()=>{
    render(<App/>);
    const footer=screen.getByTestId("footer");
    expect (footer).toBeInTheDocument;
    

} )

test ('footerText',()=>{
    render(<App/>);
    const footerText=screen.getByTestId("footerText");
    expect (footerText).toBeInTheDocument;
    
    

} )



test ('error existance verification',()=>{
    render(<Error/>);
    const error=screen.getByTestId("error");
    expect (error).toBeInTheDocument;
} )


test ('deepbox1',()=>{
    render(<App/>);
    const deepbox1=screen.getByTestId("deepbox1");
    expect (deepbox1).toBeInTheDocument;
} )








