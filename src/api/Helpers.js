/**
 * react-beautiful-dnd helpers
 * @type {{reorder: (function(*=, *=, *=): any[]), move: (function(*=, *=, *, *))}}
 * @author https://github.com/atlassian/react-beautiful-dnd
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
  },

  /**
   * Moves an item from one list to another list.
   * @param source
   * @param destination
   * @param droppableSource
   * @param droppableDestination
   * @author https://github.com/atlassian/react-beautiful-dnd
   */
  move: (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  }
};
