// material-ui
import React from 'react';
import { Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
    <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
        <Stack alignItems="center" spacing={2.5}>
            <Stack alignItems="center">
                <Typography variant="h5">Mantis Pro</Typography>
                <Typography variant="h6" color="secondary">
                    Checkout pro features
                </Typography>
            </Stack>
        </Stack>
    </MainCard>
);

export default NavCard;
