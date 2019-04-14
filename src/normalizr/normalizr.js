export const formateApartmentsEntity = ({ items }) => {
  const allIds = [];
  const byId = {};
  items.forEach((item) => {
    const {
      fields: {
        title,
        price,
        image: {
          fields: {
            file: { url },
          },
        },
      },
      sys: { id },
    } = item;

    byId[id] = {
      title,
      price,
      id,
      image: url,
    };
    allIds.push(id);
  });

  return { byId, allIds };
};
