import axios from 'axios'

export const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8000/items')
    return response.data
  } catch (error) {
    console.error(error)
  }
}