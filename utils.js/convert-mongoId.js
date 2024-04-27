export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObject } = { ...obj, id: obj._id.toString() };

  return updatedObject;
};

export const replaceMongoIdInArrayOrPlain = (array) => {
  const mappedArray = array.map((item) => {
    // If it's a Mongoose object, convert _id to id
    if (item._id) {
      const { _id, ...rest } = item;
      return {
        id: _id.toString(),
        ...rest,
      };
    }
    // If it's a plain JavaScript object, keep it as it is
    return item;
  });

  return mappedArray;
};
