## 



#### Configuration details
1) Set up React app `yarn create react-app app`

2)  Add Dependencies  
 `yarn add moment react-dom react-loader-spinner react-rainbow-components react-router-dom react-scripts react-spinners-kit reactn reactn-devtools semantic-ui-react styled-components`  

    - note  
        - For `react-loaded-spinner`, you must also add `styled-components`
        - For `semantic-ui-react`, you must also 
        add to `index.html`  
            ~~~ html 
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm semantic-ui@2.4.2/dist/semantic.min.css" />
            ~~~
        - For `reactn`, you must add 
            - this as the first line of `src/index.js`
                ~~~ js
                import { setGlobal } from 'reactn';
                 ~~~
            - before `ReactDOM.render` 
                ~~~ js
                import addReactNDevTools from 'reactn-devtools';
                ~~~
                addReactNDevTools();
                ~~~ js
                setGlobal({
                    toggleTracker: [],
                    count: 0,
                })
                ~~~

3) Add router dependencies  `yarn add react-router-dom` and wrap `<App/> in <BrowserRouter>`

3) Add 