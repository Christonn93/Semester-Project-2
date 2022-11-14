export async function api_request(url, method, token, data) {
  try {
    const fetchOptions = {
      method,
      headers: {},
    };

    // Adding this to header if the method is set to POST
    if (method === 'POST') {
      fetchOptions.body = JSON.stringify(data);
      fetchOptions.headers['Content-Type'] = 'application/json';
    }

    // Adding this to header if the method is set to GET
    if (method === 'GET') {
      fetchOptions.headers['Content-Type'] = 'application/json';
    }

    // Adding this to header if the method is set to DELETE
    if (method === 'DELETE') {
      fetchOptions.headers['Content-Type'] = 'application/json';
    }

    // Adding this to header if the method is set to PUT
    if (method === 'PUT') {
      fetchOptions.body = JSON.stringify(data);
      fetchOptions.headers['Content-Type'] = 'application/json; charset=UTF-8';
    }

    // Adding this to the header if the token is asked for
    if (token) {
      fetchOptions.headers['Authorization'] = `Bearer ${token}`;
    }

    const request = await fetch(url, fetchOptions);
    const response = await request.json();

    console.log('The response from the fetch', response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
