// Delete all visits older than 90 days
function purge() {
  let start = new Date(1970, 1, 1);
  let end = new Date();
  end.setDate(end.getDate() - 90);
  browser.history.deleteRange({
    startTime: start, 
    endTime: end,
  });
}

// On start up, start the purge
purge();

// Set up an alarm to clear history every six hours
browser.alarms.onAlarm.addListener(purge);
browser.alarms.create('purge', {periodInMinutes: 60 * 6});
