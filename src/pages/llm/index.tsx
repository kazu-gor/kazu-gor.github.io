import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState('');

  return (
    <div className="markdown-editor">
      <textarea
        className="markdown-input"
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
        placeholder="Markdownを入力してください"
      />
      <div className="markdown-preview">
        <ReactMarkdown>
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
