// material-ui
import { Container, Link, Stack, Typography, useMediaQuery } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'center'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'center'}
      >
        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'center'}>
          <Typography variant="subtitle2" color="white" component={Link} href="https://www.wenunu.com" target="_blank" underline="hover">
            Alaqart, bir Wenunu kuruluşudur.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
