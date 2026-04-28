export const UnauthorizedPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Acceso No Autorizado</h1>
            <p className="text-lg text-gray-600 mb-6">No tienes permisos para acceder a esta página.</p>
            <a
                href="/"
                className="px-6 py-3 bg-main-blue text-white rounded-lg hover:bg-blue-700 transition"
            >
                Volver al Inicio
            </a>
        </div>
    )
}