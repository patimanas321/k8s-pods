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
  },
  READABLE_DATE_FORMAT_OPTIONS: { weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
};

export default AppConstants;
