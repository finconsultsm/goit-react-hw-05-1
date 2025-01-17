const { BackBtn } = require('components/BackBtn/BackBtn');
const { Box } = require('components/Box');

const NotFound = () => {
  return (
    <Box p={3}>
      <BackBtn to={'/'}>Go Home</BackBtn>
      <Box
        height="400px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={'xl'}
        fontWeight={'midle'}
      >
        <p>404 Page not found</p>
      </Box>
    </Box>
  );
};

export default NotFound;
