interface InputObject {
  [key: string]: any;
}

interface OutputObject {
  [key: string]: any;
}

export function addDollarSignToKeys(obj: InputObject): OutputObject {
  const dollarSignRegex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  const newObj: OutputObject = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = dollarSignRegex.test(key) ? '$' + key : key;
      newObj[newKey] = obj[key];
    }
  }

  return newObj;
}
