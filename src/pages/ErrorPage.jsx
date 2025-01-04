

const ErrorPage = () => {
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-9xl font-bold text-biru-uhamka">500</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4">
                Internal Server Error
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
                Maaf, halaman yang kamu cari tidak tersedia.
            </p>
            <a
                href="/"
                className="mt-6 px-4 py-2 bg-biru-uhamka text-white rounded hover:bg-blue-700 transition duration-300"
            >
                Kembali ke Beranda
            </a>
        </div>
    )
}

export default ErrorPage