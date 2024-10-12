import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import ReactToHtmlConverter from './components/ReactToHtmlConverter';
import Header from './components/Header';
import OutputDisplay from './components/OutputDisplay';

function App() {
  const [htmlOutput, setHtmlOutput] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const generateHtmlTemplate = (reactCode: string) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        ${reactCode}
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        );
    </script>
</body>
</html>
    `;
  };

  const handleConvert = (reactCode: string) => {
    const htmlTemplate = generateHtmlTemplate(reactCode);
    setHtmlOutput(htmlTemplate);
  };

  const handleDownload = (reactCode: string) => {
    const htmlTemplate = generateHtmlTemplate(reactCode);
    const blob = new Blob([htmlTemplate], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'react-app.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <FileText className="mr-2" />
          React to HTML Converter
        </h1>
        <ReactToHtmlConverter onConvert={handleConvert} onDownload={handleDownload} />
        {htmlOutput && (
          <OutputDisplay htmlOutput={htmlOutput} />
        )}
      </main>
    </div>
  );
}

export default App;