// DynamicTabsSimulator.tsx
import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button, Input, TextareaAutosize, Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function DynamicTabsSimulator() {
  const [code, setCode] = useState(
    `function TabsWrappedLabel() {
      const [value, setValue] = React.useState('one');
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      return (
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab
              value="one"
              label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
              wrapped
            />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
          </Tabs>
        </Box>
      );
    }`
  );

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const scope = { Button, Input, TextareaAutosize, Box, Tab, Tabs, Typography, PropTypes };

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
