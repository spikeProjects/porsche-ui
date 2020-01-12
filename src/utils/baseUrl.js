let baseUrl = '/';

if (process.env.NODE_ENV === 'development') {
  baseUrl = '/pdc-api-gateway';
} else if(process.env.NODE_ENV === 'production') {
  baseUrl = '/pdc-api-gateway';
}

export default baseUrl;
