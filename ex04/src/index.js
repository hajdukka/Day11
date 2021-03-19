var monitorsListArray = ["Apple", "Peach", "Berry"];
function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];

  var monitorsList = [];

  for (i = 0; i < 3; i++) {
    var pair = [newMonitorsList[i], i + 1];
    monitorsList.push(pair);
  }

  return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
