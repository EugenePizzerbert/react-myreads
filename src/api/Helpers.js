/**
 * Drag & Drop helpers
 * @type {{reorder: (function(*=, *=, *=): any[])}}
 */
export const dndHelpers = {
  /**
   * Function to help us with reordering the result
   * @param list
   * @param startIndex
   * @param endIndex
   * @return {any[]}
   * @author https://github.com/atlassian/react-beautiful-dnd
   */
  reorder: (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }
};

/**
 * Let's you specify which drag sources and drop targets are compatible
 * @type {{BOOK: string}}
 * @package react-dnd
 * @see http://react-dnd.github.io/react-dnd/docs-overview.html
 * @author http://react-dnd.github.io/react-dnd
 */
export const ItemTypes = {
  BOOK: "book"
};
