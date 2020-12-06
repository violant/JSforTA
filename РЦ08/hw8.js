//Task7-1
function upperCase(str) {
  if (/^[A-Z]/.test(str)) {console.log('Strings starts with uppercase character');
  } else {console.log('String not starts with uppercase character ');}
}

upperCase('regexp');
upperCase('RegExp');