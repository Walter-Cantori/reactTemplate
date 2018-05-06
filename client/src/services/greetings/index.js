import axios from 'axios';

const baseUrl = '/api/greetings';

function getGreetings() {
  return axios.get(baseUrl)
    .then(response => response.data)
    .catch(err => err);
}


function newGreeting(greeting) {
  return axios.post(baseUrl, greeting)
    .then(response => response.data)
    .catch(err => err);
}

export { getGreetings, newGreeting };
