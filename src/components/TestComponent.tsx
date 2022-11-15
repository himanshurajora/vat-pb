import { Avatar } from '@chakra-ui/react';
import { getUserProfileUrl } from '../utils/get-user-profile-url';
import { useEffect, useState } from 'react';
import { pbClient } from '../utils/pocket-base-client';

export const TestComponent = () => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const res = await pbClient.records.getList('colleges', 1, 10, {
      expand: 'departments(college),admin',
    });
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Avatar
      width="100px"
      height="100px"
      src={data && getUserProfileUrl(data.items[0].expand.admin)}
    />
  );
};
