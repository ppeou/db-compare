((_m, _p) => {
  const {argv} = _p;
  const args = argv.reduce((p, i)=> {
    const [k, v] = i.split('=');
    p[k] = v;
    return p;
  }, {});

  const fillTemplate = (str, obj) => {
    let parsed = str;
    Object.keys(obj).forEach((key) => {
      const value = obj[key]
      parsed = parsed.replace('[[' + key + ']]', value);
    });
    return parsed;
  }

  _m.exports = {args, fillTemplate};
})(module, process);

