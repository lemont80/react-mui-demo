import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button, Input, TextareaAutosize, Box, Tab, Tabs } from '@mui/material';

const code = `
function MyForm() {
  return (
    <div>
      <Input placeholder="Enter text" />
      <TextareaAutosize placeholder="Enter multiline text" />
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </div>
  );
}
`;

const scope = { Button, Input, TextareaAutosize, Box, Tab, Tabs };

const LiveDemo = () => (
  <LiveProvider code={code} scope={scope}>
    <LiveEditor
      style={{ textAlign: 'left', overflowX: 'auto' }}
    />
    <LiveError />
    <LivePreview />
  </LiveProvider>
);

export default LiveDemo;