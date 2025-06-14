'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, BarChart2, ChevronDown, Loader2, Search } from 'lucide-react'
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

const CryptoExplorer = () => {
    const [cryptos, setCryptos] = useState<CryptoData[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null)
    const [filter, setFilter] = useState<string>('')
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({
        key: 'market_cap',
        direction: 'desc'
    })

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Puedes ajustar este número

    // Calcular ítems actuales
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Cambiar página
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
                )
                setCryptos(response.data)
                setError(null)
            } catch (err) {
                console.error('Error fetching crypto data:', err)
                setError('Failed to load cryptocurrency data. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
        const interval = setInterval(fetchData, 60000) // Refresh every minute
        return () => clearInterval(interval)
    }, [])

    // Sort data
    const sortedCryptos = [...cryptos].sort((a, b) => {
        if (a[sortConfig.key as keyof CryptoData] < b[sortConfig.key as keyof CryptoData]) {
            return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (a[sortConfig.key as keyof CryptoData] > b[sortConfig.key as keyof CryptoData]) {
            return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
    })

    // Filter data
    const filteredCryptos = sortedCryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(filter.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(filter.toLowerCase())
    )

    const currentItems = filteredCryptos.slice(indexOfFirstItem, indexOfLastItem);

    // Formatting functions
    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value)
    }

    const formatLargeNumber = (num: number): string => {
        if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
        if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
        if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
        return formatCurrency(num)
    }

    const formatPercentage = (value: number): string => {
        return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`
    }

    // Handle sort
    const requestSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'desc'
        if (sortConfig.key === key && sortConfig.direction === 'desc') {
            direction = 'asc'
        }
        setSortConfig({ key, direction })
    }

    return (
        <section id="market" className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-2">Mercado Cripto en Tiempo Real</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Datos actualizados cada minuto de las principales criptomonedas por capitalización de mercado
                    </p>
                </motion.div>

                {/* Search and filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mb-6 flex flex-col md:flex-row gap-4 items-center"
                >
                    <div className="relative flex-grow max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar criptomonedas..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <BarChart2 className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-400 text-sm">Ordenar por:</span>
                        <div className="relative">
                            <select
                                className="appearance-none bg-gray-700 text-white pl-3 pr-8 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                value={sortConfig.key}
                                onChange={(e) => requestSort(e.target.value)}
                            >
                                <option value="market_cap">Capitalización</option>
                                <option value="current_price">Precio</option>
                                <option value="price_change_percentage_24h">Cambio (24h)</option>
                                <option value="total_volume">Volumen</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </motion.div>

                {/* Loading state */}
                {loading && (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="animate-spin h-12 w-12 text-primary" />
                    </div>
                )}

                {/* Error state */}
                {error && (
                    <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 text-center">
                        <p className="text-red-400">{error}</p>
                    </div>
                )}

                {/* Crypto table */}
                {!loading && !error && (
                    <div className="overflow-hidden">
                        {/* Versión desktop */}
                        <div className="hidden md:block">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="overflow-x-auto"
                            >
                                <table className="min-w-full divide-y divide-gray-700">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                #
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                Activo
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white"
                                                onClick={() => requestSort('current_price')}
                                            >
                                                <div className="flex justify-end items-center gap-1">
                                                    Precio
                                                    {sortConfig.key === 'current_price' && (
                                                        <ChevronDown className={`h-4 w-4 transition-transform ${sortConfig.direction === 'asc' ? 'rotate-180' : ''}`} />
                                                    )}
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white"
                                                onClick={() => requestSort('price_change_percentage_24h')}
                                            >
                                                <div className="flex justify-end items-center gap-1">
                                                    24h %
                                                    {sortConfig.key === 'price_change_percentage_24h' && (
                                                        <ChevronDown className={`h-4 w-4 transition-transform ${sortConfig.direction === 'asc' ? 'rotate-180' : ''}`} />
                                                    )}
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white"
                                                onClick={() => requestSort('market_cap')}
                                            >
                                                <div className="flex justify-end items-center gap-1">
                                                    Capitalización
                                                    {sortConfig.key === 'market_cap' && (
                                                        <ChevronDown className={`h-4 w-4 transition-transform ${sortConfig.direction === 'asc' ? 'rotate-180' : ''}`} />
                                                    )}
                                                </div>
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Detalles</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                                        {currentItems.map((crypto, index) => (
                                            <motion.tr
                                                key={crypto.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.02 }}
                                                whileHover={{ backgroundColor: 'rgba(39, 39, 42, 0.5)' }}
                                                className="hover:bg-gray-700/50 transition-colors cursor-pointer"
                                                onClick={() => setSelectedCrypto(crypto)}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                                    {(currentPage - 1) * itemsPerPage + index + 1}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <img
                                                            src={crypto.image}
                                                            alt={crypto.name}
                                                            width={32}
                                                            height={32}
                                                            className="w-8 h-8 rounded-full mr-3"
                                                        />
                                                        <div>
                                                            <div className="text-sm font-medium text-white">{crypto.name}</div>
                                                            <div className="text-sm text-gray-400 uppercase">{crypto.symbol}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white text-right">
                                                    {formatCurrency(crypto.current_price)}
                                                </td>
                                                <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${crypto.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                                                    }`}>
                                                    {formatPercentage(crypto.price_change_percentage_24h)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 text-right">
                                                    {formatLargeNumber(crypto.market_cap)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button className="text-primary hover:text-primary/80">
                                                        <ArrowUpRight className="h-5 w-5" />
                                                    </button>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div>

                            {/* Paginador */}
                            <div className="flex items-center justify-between mt-6">
                                <div className="text-sm text-gray-400">
                                    Mostrando {(currentPage - 1) * itemsPerPage + 1} a {Math.min(currentPage * itemsPerPage, filteredCryptos.length)} de {filteredCryptos.length} resultados
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => paginate(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                                    >
                                        Anterior
                                    </button>
                                    {Array.from({ length: Math.ceil(filteredCryptos.length / itemsPerPage) }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => paginate(index + 1)}
                                            className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => paginate(currentPage + 1)}
                                        disabled={currentPage === Math.ceil(filteredCryptos.length / itemsPerPage)}
                                        className={`px-4 py-2 rounded-lg ${currentPage === Math.ceil(filteredCryptos.length / itemsPerPage) ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Versión móvil */}
                        <div className="md:hidden">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 gap-4"
                            >
                                {currentItems.map((crypto, index) => (
                                    <motion.div
                                        key={crypto.id}
                                        whileHover={{ y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-gray-800 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:bg-gray-700"
                                        onClick={() => setSelectedCrypto(crypto)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <img
                                                    src={crypto.image}
                                                    alt={crypto.name}
                                                    width={32}
                                                    height={32}
                                                    className="w-10 h-10 mr-3"
                                                />
                                                <div>
                                                    <h3 className="font-bold text-white text-sm">{crypto.name}</h3>
                                                    <p className="text-gray-400 text-xs uppercase">{crypto.symbol}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-white text-sm">
                                                    {formatCurrency(crypto.current_price)}
                                                </p>
                                                <p
                                                    className={`text-xs ${crypto.price_change_percentage_24h >= 0
                                                        ? 'text-green-400'
                                                        : 'text-red-400'
                                                        }`}
                                                >
                                                    {crypto.price_change_percentage_24h >= 0 ? '↑' : '↓'}
                                                    {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Paginador móvil */}
                            <div className="flex flex-col items-center mt-6 space-y-4">
                                <div className="text-sm text-gray-400 text-center">
                                    Mostrando {(currentPage - 1) * itemsPerPage + 1} a {Math.min(currentPage * itemsPerPage, filteredCryptos.length)} de {filteredCryptos.length} resultados
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => paginate(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                                    >
                                        Anterior
                                    </button>
                                    <div className="flex space-x-1 overflow-x-auto max-w-[200px]">
                                        {Array.from({ length: Math.ceil(filteredCryptos.length / itemsPerPage) }).map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => paginate(index + 1)}
                                                className={`px-3 py-2 rounded-lg text-sm ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => paginate(currentPage + 1)}
                                        disabled={currentPage === Math.ceil(filteredCryptos.length / itemsPerPage)}
                                        className={`px-4 py-2 rounded-lg ${currentPage === Math.ceil(filteredCryptos.length / itemsPerPage) ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Crypto details modal */}
                <AnimatePresence>
                    {selectedCrypto && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
                            onClick={() => setSelectedCrypto(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-gray-800 rounded-xl max-w-2xl w-full p-6"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center space-x-4">
                                        <img src={selectedCrypto.image}
                                            width={32}
                                            height={32}
                                            alt={selectedCrypto.name} className="w-12 h-12" />
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{selectedCrypto.name}</h3>
                                            <p className="text-gray-400 uppercase">{selectedCrypto.symbol}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedCrypto(null)}
                                        className="text-gray-400 hover:text-white p-1 rounded-full"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">Resumen</h4>
                                            <div className="bg-gray-700 rounded-lg p-4">
                                                <div className="flex justify-between py-2">
                                                    <span className="text-gray-400">Precio actual:</span>
                                                    <span className="text-white font-medium">{formatCurrency(selectedCrypto.current_price)}</span>
                                                </div>
                                                <div className="flex justify-between py-2">
                                                    <span className="text-gray-400">Cambio (24h):</span>
                                                    <span className={`font-medium ${selectedCrypto.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                                                        }`}>
                                                        {formatPercentage(selectedCrypto.price_change_percentage_24h)}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between py-2">
                                                    <span className="text-gray-400">Capitalización:</span>
                                                    <span className="text-white font-medium">{formatLargeNumber(selectedCrypto.market_cap)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">Rango de precios (24h)</h4>
                                            <div className="bg-gray-700 rounded-lg p-4">
                                                <div className="flex justify-between py-2">
                                                    <span className="text-gray-400">Mínimo:</span>
                                                    <span className="text-white font-medium">{formatCurrency(selectedCrypto.low_24h)}</span>
                                                </div>
                                                <div className="flex justify-between py-2">
                                                    <span className="text-gray-400">Máximo:</span>
                                                    <span className="text-white font-medium">{formatCurrency(selectedCrypto.high_24h)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">Volumen</h4>
                                            <div className="bg-gray-700 rounded-lg p-4">
                                                <div className="flex justify-between py-2">
                                                    <span className="text-gray-400">Volumen (24h):</span>
                                                    <span className="text-white font-medium">{formatLargeNumber(selectedCrypto.total_volume)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">Actualización</h4>
                                            <div className="bg-gray-700 rounded-lg p-4">
                                                <div className="flex justify-between py-2">
                                                    <span className="text-gray-400">Última actualización:</span>
                                                    <span className="text-white font-medium">
                                                        {new Date(selectedCrypto.last_updated).toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <a
                                        href={`https://www.coingecko.com/en/coins/${selectedCrypto.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                    >
                                        Ver en CoinGecko
                                        <ArrowUpRight className="ml-2 -mr-1 h-4 w-4" />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default CryptoExplorer