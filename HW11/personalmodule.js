exports.greetings = function(loginName) {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  let hours = today.getHours();
  let greetingText;
  if ((hours >= 23) || (hours < 5)) {greetingText = 'Good night';}
  if ((hours >= 5) && (hours < 11)) {greetingText = 'Good morning';}
  if ((hours >= 11) && (hours < 17)) {greetingText = 'Good day';}
  if ((hours >= 17) && (hours < 23)) {greetingText = 'Good evening';}

  return `Date of request: ${today.toDateString()}\n
${greetingText}, ${loginName}`;
};