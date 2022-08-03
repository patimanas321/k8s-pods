import AppConstants from '../../Constants/AppConstants';
import Pod from '../../Models/Pod';
import { filter, sort } from './utils';

const pods = new Array(10).fill(0).map((_, index) => new Pod({
  metadata: {
    uid: `UID_${index}`,
    name: `Name_${index % 2 === 0 ? 'even' : 'odd'}_${index}`,
    namespace: `Namespace_${index}`,
    creationTimestamp: Date.now()
  },
  status: {
    phase: index % 2 === 0 ? AppConstants.POD_STATUS.running : AppConstants.POD_STATUS.success
  }
}));

test('filter() should not filter if search criteria are not available', () => {
  const res = filter(pods);
  expect(res).toHaveLength(pods.length);
  expect(res).toEqual(pods);
});

test('filter() should filter by status', () => {
  const res = filter(pods, 'status', AppConstants.POD_STATUS.running);
  expect(res).toHaveLength(5);
  expect(res).not.toEqual(pods);

  const res1 = filter(pods, 'status', AppConstants.POD_STATUS.success);
  expect(res1).toHaveLength(5);
  expect(res1).not.toEqual(pods);
});

test('filter() should return empty result for not matching status', () => {
  const res = filter(pods, 'status', AppConstants.POD_STATUS.failed);
  expect(res).toHaveLength(0);
});

test('filter() should filter by name', () => {
  const res = filter(pods, 'name', 'Name_even');
  expect(res).toHaveLength(5);
  expect(res).not.toEqual(pods);

  const res1 = filter(pods, 'name', 'Name_odd');
  expect(res1).toHaveLength(5);
  expect(res1).not.toEqual(pods);
});

test('filter() should return empty result for not matching name', () => {
  const res = filter(pods, 'name', 'Some unknown name');
  expect(res).toHaveLength(0);
});

test('filter() should return empty result for invalid type', () => {
  const res = filter(pods, 'invalid', AppConstants.POD_STATUS.success);
  expect(res).toHaveLength(0);
});

test('sort() should sort by name column Ascending', () => {
  const res = sort(pods, 'name', AppConstants.SORT_ORDER.Ascending);
  expect(res).toHaveLength(pods.length);
  expect(res[0].name).toContain('Name_even');
  expect(res[4].name).toContain('Name_even');
  expect(res[5].name).toContain('Name_odd');
  expect(res[9].name).toContain('Name_odd');
});

test('sort() should sort by name column Descending', () => {
  const res = sort(pods, 'name', AppConstants.SORT_ORDER.Descending);
  expect(res).toHaveLength(pods.length);
  expect(res[0].name).toContain('Name_odd');
  expect(res[4].name).toContain('Name_odd');
  expect(res[5].name).toContain('Name_even');
  expect(res[9].name).toContain('Name_even');
});

test('sort() should sort by status column Ascending', () => {
  const res = sort(pods, 'status', AppConstants.SORT_ORDER.Ascending);
  expect(res).toHaveLength(pods.length);
  expect(res[0].status).toEqual(AppConstants.POD_STATUS.running);
  expect(res[4].status).toEqual(AppConstants.POD_STATUS.running);
  expect(res[5].status).toEqual(AppConstants.POD_STATUS.success);
  expect(res[9].status).toEqual(AppConstants.POD_STATUS.success);
});

test('sort() should sort by status column Descending', () => {
  const res = sort(pods, 'status', AppConstants.SORT_ORDER.Descending);
  expect(res).toHaveLength(pods.length);
  expect(res[0].status).toEqual(AppConstants.POD_STATUS.success);
  expect(res[4].status).toEqual(AppConstants.POD_STATUS.success);
  expect(res[5].status).toEqual(AppConstants.POD_STATUS.running);
  expect(res[9].status).toEqual(AppConstants.POD_STATUS.running);
});

test('sort() should not sort for invalid column name', () => {
  const res = sort(pods, 'invalid', AppConstants.SORT_ORDER.Descending);
  expect(res).toHaveLength(pods.length);
  pods.forEach((pod, index) => {
    expect(res[index].id).toEqual(pod.id);
  });
});
