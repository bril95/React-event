export default {
  defaultApi: () => 'http://localhost:4040/api',
  auth: () => '/auth',

  user: {
    favourites: () => '/user/favourites',
    remove: (requestId: string) => `/user/favourites/${requestId}`,
    profile: () => '/user',
  },

  request: {
    details: (id: string) => `/request/${id}`,
    list: () => '/request',
    contribute: (id: string) => `/request/${id}/contribution`,
  },
};