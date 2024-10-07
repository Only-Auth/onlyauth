import { getSessionStorage } from '@/utils/storage'
import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = import.meta.env.BASE_API_URL || 'http://localhost:8000'

export async function getConsentScreenConfig() {
  const token = Cookies.get('token')
  const authQueryParams = JSON.parse(getSessionStorage('authQueryParams'))
  const client_id = authQueryParams.client_id
  try {
    const response = await axios.get(`${API_URL}/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status !== 200 || !response.data) {
      throw new Error(response.data.error || 'Failed to fetch data')
    }
    const configList = response.data.applications

    const config = configList.find((item) => item.clientId === client_id)

    return config.consentScreen
  } catch (e) {
    console.log(e)
  }
}
