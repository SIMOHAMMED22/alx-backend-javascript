export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var innerTask = true;
    var innerTask2 = false;
    return [innerTask, innerTask2];
  }

  return [task, task2];
}