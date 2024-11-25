import { Link } from 'react-router-dom';

// Material-UI components
import { Grid, Typography, Box } from '@mui/material';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';

// Import the image
import authBackground from 'assets/images/auth/auth-bg.jpg';

const Login = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#fff',
          px: 4,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            color: '#FF4500',
            textAlign: 'center',
          }}
        >
          ALA QART
        </Typography>

        {/* Login Form */}
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 500, textAlign: 'center' }}>
            Giriş Yap
          </Typography>
          <AuthLogin />
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#FF4500' }}>
              Şifremi Unuttum
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
            Hesabınız yok mu?{' '}
            <Link to="/register" style={{ textDecoration: 'none', color: '#FF4500' }}>
              Üye olun.
            </Link>
          </Typography>
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${authBackground})`, // Set the background image
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
};

export default Login;
