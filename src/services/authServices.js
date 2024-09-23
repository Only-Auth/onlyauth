import axios from 'axios'

const API_URL = import.meta.env.BASE_API_URL || 'http://localhost:8000'

export async function signIn(credentials) {
  const { email, password } = credentials

  try {
    const response = await axios.post(`${API_URL}/user/login`, {
      email,
      password,
    })

    if (response.status !== 200 || !response.data) {
      throw new Error(response.data.error || 'Login failed')
    }

    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Login failed')
  }
}

export async function signUp(data) {
  const { email, password, name } = data

  try {
    const response = await axios.post(`${API_URL}/user/signup`, {
      fullName: name,
      email: email,
      password: password,
    })

    if (response.status !== 201 || !response.data) {
      throw new Error(response.data?.error || 'Signup failed')
    }

    return response.data
  } catch (e) {
    console.log(e)
    throw new Error(error.response?.data?.error || 'Signup failed')
  }
}
