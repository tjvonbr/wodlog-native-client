import axios from 'axios';
import { config } from '../constants/env-variables';

// API base
const apiUrl = config.dev;

async function client(
  endpoint,
  {data, token, headers: customHeaders, ...customConfig} = {}
) {
  const config = {
    method: data ? "POST" : "GET",
    url: endpoint,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  }

  return axios(`${apiUrl}/${endpoint}`, config)
    .then(async response => {
      if (response.status === 401) {
        console.log("Something went wrong!")
        return Promise.reject({ message: "Please re-authenticate."})
      }
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
  }

  export default client;
  