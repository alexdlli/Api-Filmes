import Factory from './factory';

const coreApiUrl = 'https://api.themoviedb.org/3';
const commonInstance = Factory(coreApiUrl);

export default commonInstance;