// src/lib/api.ts
import axios from 'axios'

interface CryptoData {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
  high_24h: number
  low_24h: number
  last_updated: string
}

interface ApiResponse<T> {
  data: T
  error: string | null
  loading: boolean
}

const API_BASE_URL = 'https://api.coingecko.com/api/v3'

// Configuración global de axios
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

/**
 * Obtiene el listado de criptomonedas del mercado
 * @param currency Moneda para los precios (default: 'usd')
 * @param perPage Número de resultados por página (default: 20)
 * @param page Número de página (default: 1)
 * @returns Promise con los datos de las criptomonedas
 */
export const getCryptoMarkets = async (
  currency: string = 'usd',
  perPage: number = 20,
  page: number = 1
): Promise<ApiResponse<CryptoData[]>> => {
  try {
    const response = await api.get('/coins/markets', {
      params: {
        vs_currency: currency,
        order: 'market_cap_desc',
        per_page: perPage,
        page,
        sparkline: false,
        price_change_percentage: '24h',
        locale: 'es'
      }
    })

    return {
      data: response.data,
      error: null,
      loading: false
    }
  } catch (error) {
    let errorMessage = 'Error al obtener los datos del mercado'
    
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Error de servidor (4xx, 5xx)
        errorMessage = `Error ${error.response.status}: ${error.response.data?.error || 'Problema con la API'}`
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        errorMessage = 'No se recibió respuesta del servidor'
      } else {
        // Error al configurar la solicitud
        errorMessage = `Error de configuración: ${error.message}`
      }
    } else if (error instanceof Error) {
      errorMessage = error.message
    }

    console.error('Error en getCryptoMarkets:', error)
    return {
      data: [],
      error: errorMessage,
      loading: false
    }
  }
}

/**
 * Obtiene los detalles de una criptomoneda específica
 * @param id ID de la criptomoneda (ej: 'bitcoin')
 * @returns Promise con los detalles de la criptomoneda
 */
export const getCryptoDetails = async (id: string): Promise<ApiResponse<any>> => {
  try {
    const response = await api.get(`/coins/${id}`, {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false
      }
    })

    return {
      data: response.data,
      error: null,
      loading: false
    }
  } catch (error) {
    let errorMessage = 'Error al obtener los detalles de la criptomoneda'
    
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.error || error.message
    } else if (error instanceof Error) {
      errorMessage = error.message
    }

    console.error('Error en getCryptoDetails:', error)
    return {
      data: null,
      error: errorMessage,
      loading: false
    }
  }
}

/**
 * Obtiene el precio histórico de una criptomoneda
 * @param id ID de la criptomoneda
 * @param days Número de días de histórico (max: 365)
 * @param currency Moneda para el precio (default: 'usd')
 * @returns Promise con los datos históricos
 */
export const getCryptoHistory = async (
  id: string,
  days: number = 30,
  currency: string = 'usd'
): Promise<ApiResponse<any>> => {
  try {
    const response = await api.get(`/coins/${id}/market_chart`, {
      params: {
        vs_currency: currency,
        days
      }
    })

    return {
      data: response.data,
      error: null,
      loading: false
    }
  } catch (error) {
    let errorMessage = 'Error al obtener el histórico de precios'
    
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.error || error.message
    } else if (error instanceof Error) {
      errorMessage = error.message
    }

    console.error('Error en getCryptoHistory:', error)
    return {
      data: null,
      error: errorMessage,
      loading: false
    }
  }
}

/**
 * Obtiene las tendencias del mercado
 * @returns Promise con las criptomonedas en tendencia
 */
export const getTrendingCryptos = async (): Promise<ApiResponse<any>> => {
  try {
    const response = await api.get('/search/trending')

    return {
      data: response.data.coins,
      error: null,
      loading: false
    }
  } catch (error) {
    let errorMessage = 'Error al obtener las tendencias'
    
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.error || error.message
    } else if (error instanceof Error) {
      errorMessage = error.message
    }

    console.error('Error en getTrendingCryptos:', error)
    return {
      data: [],
      error: errorMessage,
      loading: false
    }
  }
}

// Exportar la instancia de axios por si se necesita para otras llamadas
export { api }