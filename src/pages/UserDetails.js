import { Card, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Page from '../components/Page';
import UserEditFrom from 'src/sections/@dashboard/user/UserEditFrom';

const UserDetailsPage = () => {
  const location = useLocation();
  const userInfo = location?.state || null

  return (
    <Page title="Users">
      <Container style={{ maxWidth: '1400px' }} >
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User Details
          </Typography>
        </Stack>
        <Card sx={{ p: "25px"}}>
          <UserEditFrom data={userInfo} />
        </Card>
      </Container>
    </Page>
  );
};

export default UserDetailsPage;
