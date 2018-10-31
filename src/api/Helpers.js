/**
 * Function to help us with reordering the result
 * @param list
 * @param startIndex
 * @param endIndex
 * @return {any[]}
 * @author https://github.com/atlassian/react-beautiful-dnd
 */
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
