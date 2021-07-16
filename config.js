const {
  JWT_SECRET_DEV = 'JWT_SECRET_DEV',
  MONGODB_URL = 'mongodb://localhost:27017/beatfilmsdb',
  PORT = '3000',
} = process.env;

module.exports = {
  JWT_SECRET_DEV,
  MONGODB_URL,
  PORT,
};
