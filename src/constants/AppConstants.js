const AppConstants = {
  BASE_API_URL: process.env.REACT_APP_API_URL,
  POD_STATUS: {
    pending: 'Pending',
    running: 'Running',
    success: 'Success',
    failed: 'Failed',
    unknown: 'Unknown'
  },
  SORT_ORDER: {
    Ascending: 'asc',
    Descending: 'desc'
  }
};

export default AppConstants;
