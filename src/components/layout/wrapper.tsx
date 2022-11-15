import { Box } from '@chakra-ui/react';
import { Sidebar } from './SideBar';
import { Topbar } from './topbar';

export const Wrapper = () => {
  return (
    <Box>
      <Topbar />
      <Sidebar />
    </Box>
  );
};
