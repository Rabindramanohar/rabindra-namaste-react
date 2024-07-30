# React.createElement: 
- creats element js object


```javascript
import React  from "react";
import ReactDom from 'react-dom/client';

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
```

# JSX: 
1. It is html/xml like syntax
2. const jsxElement = ``` <h1>Reacting using JSX</h1>```
3. JSX transpiled before it reaches to JS enginge
4. Parcel move JSX to Babel to transpile.
5. conversion by **babel**: JSX => React.createElement => js object[react element] => html
6. In JSX attribute are in camelcase, e.g: class -> className
7. inject any js logic/variable/express inside the JSX using **{}**
8. JSX sanatice the xss/malicious code/data when we use **{}**

# Babel
transfile jsx to js object[react element] which is html


# ReactDom.root: 
will replace the html elements from index.html file

# React component:
1. class based component [old way to write component]
2. funtional component : function thats returns JSX code 
    * const funcComp = () => ```<h1>Hello!</h1>```
3. 


# Component composition
1. put one component inside another 
2. e.g: 
    ```javascript
    const Title = () => <h1>Title</h1>
    const MainComp = () => {
        return (
            <Title /> // {Title()}
            <h2 className="desc">Description </h2>
        )
    }
    ```

# cross site scripting(XSS):
1. It is a web security vulnerability that allows an attracker to compromise the interactions that users have with a vulnerable application.
2. Cross-site scripting works by manipulating a vulnerable web site so that it returns malicious JavaScript to users. When the malicious code executes inside a victim's browser, the attacker can fully compromise their interaction with the application.



