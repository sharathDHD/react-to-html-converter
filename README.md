# 🚀 React to HTML Converter  

![React](https://img.shields.io/badge/React-v15.4.2-blue) ![License](https://img.shields.io/badge/License-MIT-green)  

A lightweight tool for converting **React components** into **HTML with React support**, enabling React-based content to work within static HTML files. This project leverages **CDN links for React, ReactDOM, and Babel** to ensure the HTML output is functional when opened in a browser. 🧑‍💻  

---

## ✨ Features  
- 🔄 **Convert React components** into HTML with embedded React functionality.  
- 🌐 **CDN-powered React and Babel** to render React components directly in a browser.  
- ⚙️ Supports React components with **props and state**.  
- 🏗️ **No build step** required; simply load the HTML in the browser.  

---

## 📚 Table of Contents  
1. [Installation](#installation)  
2. [Usage](#usage)  
3. [Example HTML](#example-html)  
4. [API Documentation](#api-documentation)  
5. [Contributing](#contributing)  
6. [License](#license)  
7. [Contact](#contact)  

---

## 🛠️ Installation  

Clone the repository:  
```bash
git clone https://github.com/sharathDHD/react-to-html-converter.git
cd react-to-html-converter
```

Install dependencies:

```bash
npm install
```

---

## 🚀 Usage  

1. Create a **React component** in the `src` folder.  
2. Convert it to an **HTML string** using the `renderToHtml` function.  
3. Inject React, ReactDOM, and Babel scripts via CDN to make the HTML file functional.

---

## 🧩 Example  

### Component (`src/components/MyComponent.jsx`)  
```javascript
const MyComponent = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This React component is working inside an HTML file!</p>
    </div>
  );
};

export default MyComponent;
```

### Conversion Script (`src/index.js`)  
```javascript
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MyComponent from './components/MyComponent';

const renderToHtml = (component) => {
  return ReactDOMServer.renderToString(component);
};

const htmlContent = renderToHtml(<MyComponent name="Sharath" />);
console.log(htmlContent);
```

---

### 📝 Example HTML Output with React and Babel  

Create an HTML file (`index.html`) with the following content:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React to HTML Example</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      const MyComponent = ({ name }) => (
        <div>
          <h1>Hello, {name}!</h1>
          <p>This React component is working inside an HTML file!</p>
        </div>
      );

      ReactDOM.render(<MyComponent name="Sharath" />, document.getElementById('root'));
    </script>
  </body>
</html>
```

---

### 🛠️ How It Works  
1. The **React** and **ReactDOM** libraries are loaded via **CDN**. 🌐  
2. The **Babel** library allows you to use JSX directly inside the `<script>` tag with `type="text/babel"`. 💡  
3. When the HTML file is opened in a browser, React renders the component inside the `<div id="root"></div>` element.  

---

## 📑 API Documentation  

### `renderToHtml(component: ReactElement): string`  
- **Description:** Converts a React component into an HTML string.  
- **Parameters:**  
  - `component` *(ReactElement)*: The React component to render.  
- **Returns:** A string containing the HTML representation of the component.

---

## 🤝 Contributing  

We welcome contributions! 🎉 Please follow these steps:  

1. Fork the repository. 🍴  
2. Create a new branch (`feature-branch-name`). 🌲  
3. Commit your changes (`git commit -m 'Add feature'`). 💬  
4. Push to the branch (`git push origin feature-branch-name`). 🚀  
5. Open a Pull Request. 📝  

---

## ⚖️ License  

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

## 📬 Contact  

If you have any questions or suggestions, feel free to reach out by creating an [issue](https://github.com/sharathDHD/react-to-html-converter/issues). 🙋‍♂️  
