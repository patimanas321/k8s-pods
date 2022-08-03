export function filter (pods, searchByCol, searchText) {
  if (!searchText) return pods;

  switch (searchByCol) {
  case 'name':
    return pods.filter(pod => pod.name === searchText);

  case 'namespace':
    return pods.filter(pod => pod.namespace === searchText);

  default:
    break;
  }
}

export function sort (pods, sortCol, sortOrder = 'asc') {
  const copy = [...pods];
  copy.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortCol] > b[sortCol] ? 1 : -1;
    }
    return a[sortCol] > b[sortCol] ? -1 : 1;
  });

  return copy;
}
