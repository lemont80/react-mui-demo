// DynamicTabsSimulator.tsx
import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button, Input, TextareaAutosize, Box, Tab, Tabs } from '@mui/material';

export default function DynamicTabsSimulator() {
  const [code, setCode] = useState(
    `function MyButton() {
      return (
        <Button variant="contained" color="primary">
          Click me
        </Button>
      );
    }
    
    ReactDOM.render(<MyButton />, document.getElementById('root'));`
  );

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const scope = { Button, Input, TextareaAutosize, Box, Tab, Tabs };

  return (
    <div>
      <LiveProvider code={code} scope={scope} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="dynamic tabs simulator">
            <Tab label="Editor" />
            <Tab label="Preview" />
            <Tab label="LiveError" />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          <LiveEditor
            onChange={(newCode) => setCode(newCode)}
            style={{ textAlign: 'left', overflowX: 'auto' }}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <LivePreview />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <LiveError />
        </TabPanel>
      </LiveProvider>
    </div>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
