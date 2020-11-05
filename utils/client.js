async function client(
  endpoint,
  {data, token, headers: customHeaders, ...customConfig} = {}
) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  }

  return window.fetch(`${apiURL}/${endpoint}`, config)
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
  