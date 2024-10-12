import React from 'react';

interface OutputDisplayProps {
  htmlOutput: string;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ htmlOutput }) => {
  return (
    <div className="mt-8 w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-2">Generated HTML:</h2>
      <pre className="p-4 bg-gray-100 rounded-md overflow-auto max-h-96 dark:bg-gray-700 dark:text-white">
        <code>{htmlOutput}</code>
      </pre>
    </div>
  );
};

export default OutputDisplay;