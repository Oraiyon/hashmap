const HashMap = () => {
  const buckets = [];
  let limit = 16;

  const log = () => console.log(buckets);

  const hash = (string) => {
    let hashCode = 0;
    const primeNumber = 31; // Any prime works
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }
    return hashCode % limit; // Returns number within limit
  };

  const set = (key, value) => {
    if (key === "" || key === null || value === "" || value === null) {
      return undefined;
    }
    const index = hash(key);
    if (buckets[index] === undefined) {
      buckets[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < buckets[index].length; i++) {
        if (buckets[index][i][0] === key) {
          buckets[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        buckets[index].push([key, value]);
      }
    }
  };

  const get = (key) => {
    const index = hash(key);
    if (buckets[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < buckets[index].length; i++) {
        if (buckets[index][i][0] === key) {
          console.log(buckets[index][i][1]);
          return buckets[index][i][1];
        }
      }
    }
  };

  const has = (key) => {
    const index = hash(key);
    if (buckets[index] === undefined) {
      console.log(false);
      return false;
    } else {
      for (let i = 0; i < buckets[index].length; i++) {
        if (buckets[index][i][0] === key) {
          console.log(true);
          return true;
        } else {
          console.log(false);
          return false;
        }
      }
    }
  };

  const remove = (key) => {
    const index = hash(key);
    if (buckets[index].length === 1 && buckets[index][0][0] === key) {
      buckets[index] = undefined;
    } else {
      for (let i = 0; i < buckets[index].length; i++) {
        if (buckets[index][i][0] === key) {
          buckets[index][i] = null;
        }
      }
    }
  };

  const length = () => {
    let amount = 0;
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] !== undefined) {
        amount += buckets[i].length;
      }
    }
    console.log(amount);
    return amount;
  };

  const clear = () => {
    while (buckets.length > 0) {
      buckets.pop();
    }
  };

  const keys = () => {
    const keysArray = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i]) {
        for (let j = 0; j < buckets[i].length; j++) {
          keysArray.push(buckets[i][j][0]);
        }
      }
    }
    console.log(keysArray);
    return keysArray;
  };

  const values = () => {
    const valuesArray = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i]) {
        for (let j = 0; j < buckets[i].length; j++) {
          valuesArray.push(buckets[i][j][1]);
        }
      }
    }
    console.log(valuesArray);
    return valuesArray;
  };

  const entries = () => {
    const entriesArray = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i]) {
        for (let j = 0; j < buckets[i].length; j++) {
          entriesArray.push(buckets[i][j]);
        }
      }
    }
    test.remove("Person");
    test.log();
    return entriesArray;
  };

  return {
    log,
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries
  };
};

const test = HashMap();
test.set("Name", "Oliver");
test.set("Name", "Thor");
test.log();
