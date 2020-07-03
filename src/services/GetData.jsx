const URL = 'http://localhost:3000/dates';



async function getData(){
  const data = await fetch(URL).then(data => data);
  const resp = data.json();
  return resp
}

async function getDate(date){
  const data = await fetch(`${URL}/${date}`).then(data => data);
  const resp = data.json();
  return resp
}

export {
  getData,
  getDate
};
