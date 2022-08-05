/** * @jest-environment jsdom */

jest.mock('../count-show-items.js');

test('Array [1,2,3,4,5,6] should return 6', () => {
  const mockAPI = () => Promise.resolve({ items: [1, 2, 3, 4, 5, 6] });
  mockAPI().then((result) => {
    const showsArray = result.items;
    const showsCounter = showsArray.length;
    expect(showsCounter).toBe(6);
  })

});
