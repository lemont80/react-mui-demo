import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

interface ComponentPreviewProps {
  code: string;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ code }) => (
  <div>
    <LiveProvider code={code} scope={{ React }}>
      <div>
        <h2>Preview</h2>
        <LivePreview />
      </div>
      <div>
        <h2>TSX Code</h2>
        <LiveEditor />
        <LiveError />
      </div>
    </LiveProvider>
  </div>
);

export default ComponentPreview;
