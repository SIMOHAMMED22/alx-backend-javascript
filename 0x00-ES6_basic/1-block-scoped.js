/**
 * Function to create a task block based on the input trueOrFalse value.
 *
 * @param {boolean} trueOrFalse - A boolean value to determine the task status
 * @return {Array} An array containing the task status values
 */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
