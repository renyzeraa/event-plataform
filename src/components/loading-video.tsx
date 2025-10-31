export function LoadingVideo() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] bg-gray-900 text-gray-100 px-4">
            <div className="flex flex-col items-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                <p className="text-lg font-medium text-gray-300 animate-pulse">
                    Carregando conteúdo...
                </p>

                <div className="w-full max-w-[600px] mt-6 space-y-3">
                    <div className="h-6 bg-gray-700 rounded-md animate-pulse"></div>
                    <div className="h-4 bg-gray-700 rounded-md animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded-md animate-pulse w-1/2"></div>
                </div>
            </div>
        </div>
    )
}