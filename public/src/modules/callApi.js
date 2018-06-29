export const callApi = async (route) => {
  let results = await fetch(route).then(res => res.json());

  return results;
};