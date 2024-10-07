import { getSessionStorage } from '@/utils/storage'
import axios from 'axios'
import Cookies from 'js-cookie'

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
    throw new Error(e.response?.data?.error || 'Signup failed')
  }
}

export async function handleGrantTokenRequest() {
  const { client_id, redirect_uri, scopes } = JSON.parse(
    getSessionStorage('authQueryParams')
  )
  const accessToken = Cookies.get('token')

  try {
    await axios.post(
      `${API_URL}/o/grant`,
      {
        clientId: client_id,
        redirectUri: 'https://jobcadet.com/',
        scopes: scopes,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
  } catch (error) {
    console.log(error)
    throw new Error(error.response?.data?.error || 'Grant failed')
  }
}
