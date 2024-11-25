// Material-UI
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// Project Import
import { ThemeDirection } from 'config';

// Import the image
import authBackground from 'assets/images/auth/auth-bg.jpg';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        minHeight: '100%',

        backgroundImage: `url(${authBackground})`, // Set the background image
        backgroundSize: 'cover', // Cover the whole area
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'repeat', // Prevent repetition
        filter: 'blur(2px)', // Apply blur effect
        zIndex: -1, // Ensure it stays in the background
        bottom: 0,
        transform: theme.direction === ThemeDirection.RTL ? 'rotate(180deg)' : 'inherit'
      }}
    ></Box>
  );
};

export default AuthBackground;
