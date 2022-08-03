import AppConstants from '../../Constants/AppConstants';

export function filter (pods, searchByCol, searchText) {
  if (!searchText) return pods;

  switch (searchByCol) {
  case 'name':
    return pods.filter(pod => pod.name.startsWith(searchText));

  case 'status':
    return pods.filter(pod => pod.status === searchText);

  default:
    break;
  }
}

export function sort (pods, sortCol, sortOrder = AppConstants.SORT_ORDER.Ascending) {
  const copy = [...pods];
  copy.sort((a, b) => {
    if (sortOrder === AppConstants.SORT_ORDER.Ascending) {
      return a[sortCol] > b[sortCol] ? 1 : -1;
    }
    return a[sortCol] > b[sortCol] ? -1 : 1;
  });

  return copy;
}
