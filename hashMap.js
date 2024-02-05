const HashMap = () => {
  const buckets = [];
  let limit = 8;
  let capacity = 0;
  const loadFactor = 0.75;

  const log = () => console.log(buckets);

  const getLimit = () => console.log(limit);

  const getCapacity = () => console.log(capacity);

  const stringToNumber = (string) => {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }
    return hashCode % limit;
  };

  const hash = (name) => {
    return stringToNumber(name);
  };

  const set = (key, value) => {
    if (key === "" || key === null || value === "" || value === null) {
      return undefined;
    }
    const index = hash(key);
    if (buckets[index] === undefined) {
      if (capacity + 1 > limit * loadFactor) {
        console.log(`Limit Of ${limit} Reached`);
        limit = limit * 2;
        console.log("New Limit " + limit);
      }
      buckets[index] = [[key, value]];
      capacity++;
    } else {
      let inserted = false;
      for (let i = 0; i < buckets[index].length; i++) {
        if (buckets[index][i][0] === key) {
          buckets[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        if (capacity + 1 > limit * loadFactor) {
          console.log(`Limit Of ${limit} Reached`);
          limit = limit * 2;
          console.log("New Limit " + limit);
        }
        buckets[index].push([key, value]);
        capacity++;
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
      delete buckets[index];
    } else {
      for (let i = 0; i < buckets[index].length; i++) {
        if (buckets[index][i][0] === key) {
          delete buckets[index][i];
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
    while (buckets.length !== 0) {
      buckets.pop();
    }
  };

  const keys = () => {
    const keysArray = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] !== undefined) {
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
      if (buckets[i] !== undefined) {
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
      if (buckets[i] !== undefined) {
        for (let j = 0; j < buckets[i].length; j++) {
          entriesArray.push(buckets[i][j]);
        }
      }
    }
    console.log(entriesArray);
    return entriesArray;
  };

  return {
    log,
    getLimit,
    getCapacity,
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
test.set("Person", "Oliver");
