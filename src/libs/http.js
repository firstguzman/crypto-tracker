export async function get(url) {
  try {
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

export async function post(url, body) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body
    })
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}
