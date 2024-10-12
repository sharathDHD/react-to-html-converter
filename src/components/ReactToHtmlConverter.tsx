import React, { useState, useRef } from 'react';
import { Code, Download, Upload } from 'lucide-react';

interface ReactToHtmlConverterProps {
  onConvert: (reactCode: string) => void;
  onDownload: (reactCode: string) => void;
}

const ReactToHtmlConverter: React.FC<ReactToHtmlConverterProps> = ({ onConvert, onDownload }) => {
  const [reactCode, setReactCode] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConvert(reactCode);
  };

  const handleDownload = () => {
    onDownload(reactCode);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setReactCode(content);
      };
      reader.readAsText(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-2">Enter your React code:</h2>
      <textarea
        rows={10}
        className="w-full p-2 mb-4 border rounded-md resize-none dark:bg-gray-700 dark:text-white"
        value={reactCode}
        onChange={(e) => setReactCode(e.target.value)}
        placeholder="function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}"
      />
      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <Code className="mr-2" />
          Convert to HTML
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          <Download className="mr-2" />
          Download HTML
        </button>
        <button
          onClick={triggerFileUpload}
          className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          <Upload className="mr-2" />
          Upload File
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept=".js,.jsx,.ts,.tsx"
          className="hidden"
        />
      </div>
    </form>
  );
};

export default ReactToHtmlConverter;