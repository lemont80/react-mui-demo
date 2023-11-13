import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DynamicTabs() {
  const [code, setCode] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  // Split the code into lines
  const codeLines = code.split('\n');

  // Extract the number of tabs from the code
  const numTabs = codeLines.filter(line => line.includes('<Tab')).length;

  return (
    <div>
      <textarea value={code} onChange={handleChange} rows={20} cols={80} />
      <div>
        {Array.from({ length: numTabs }, (_, index) => (
          <CustomTabPanel key={index} value={0} index={index}>
            {/* You can add more logic to parse and render each tab's content */}
            {`Item ${index + 1}`}
          </CustomTabPanel>
        ))}
      </div>
    </div>
  );
}
