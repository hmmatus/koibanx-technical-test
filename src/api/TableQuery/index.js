const queryString = 'https://api.koibanx.com/stores';
const selectAllFromTable = async() => {
  // try {
  //   const response = await fetch(queryString);
  //   return response.json();
  // } catch(e) {
  //   return ({
  //     status: 'error',
  //     reason: e
  //   })
  // }

};

const getQuery = async (data) => {
  const id = data?.id !== '' ? data?.id : null;
  const commerce = data?.commerce !== '' ? data?.commerce : null;
  const cuit = data?.cuit !== '' ? data?.cuit : null;
  const active = data?.status !== '' ? data?.status : null;
  const page = data?.page !==  '' ? data?.page : null;

  const idString = `${id ? `"id": {"$in": ["${id}"]},` : ''}`;
  const commerceString = `${commerce ? `"commerce": {"$in": ["${commerce}"]},` : ''}`
  const cuitString = `${cuit ? `"cuit": {"$in": ["${cuit}"]},` : ''}`;
  const activeString = `${active ? `"active": "${active}",` : ''}`;
  const pageString = `${page ? `"page": "${page}"` : ''}`;


  console.log('!--QUERY--!');
  console.log(`${queryString}?q={${idString}${commerceString}${cuitString}${activeString}${pageString}}`);  
  // try {
  //   const response = await fetch(
  //     `${queryString}?q={${idString}${CommerceString}${cuitString}${activeString}${pageString}}`
  //   );
  //   return response.json();
  // } catch(e) {
  //   return ({
  //     status: 'error',
  //     reason: e
  //   })
  // }
}

export {selectAllFromTable, getQuery};