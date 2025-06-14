import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // Desactiva caché para datos en tiempo real
export const revalidate = 60 // Revalidar cada 60 segundos

export async function GET() {
  try {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
    const response = await fetch(apiUrl)
    
    if (!response.ok) {
      throw new Error('Failed to fetch crypto data')
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch crypto data' },
      { status: 500 }
    )
  }
}