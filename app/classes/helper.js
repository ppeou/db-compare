const stringArrayToMap = (arr) => {
  return (arr || []).reduce(({id, key}, c, i) => {
    id[i] = c;
    key[c] = i;
    return {id, key};
  }, {id: {}, key: {}});
};

//console.log(sprintf('City [[0]] is in State [[1]] ..,', 'Houston', 'Texas'));
function sprintf(str, ...items) {
  return str.replace(/\[\[([0-9]+)\]\]/g,(_, idx) => items[idx]);
}
//console.log(fillTemplate('City [[city]] is in State [[state]] ..,', {city: 'Houston', state: 'Texas'}));
function fillTemplate(str, obj) {
  let parsed = str;
  Object.keys(obj).forEach((key) => {
    const value = obj[key]
    parsed = parsed.replace('[[' + key + ']]', value);
  });
  return parsed;
}

module.exports = {
  stringArrayToMap,
  sprintf,
  fillTemplate,
};
