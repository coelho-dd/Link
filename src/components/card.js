export default function Card({ icon, value, text }) {
    return (
        <>
            <div className="bg-zinc-900 rounded-lg shadow-lg p-6 h-96 max-w-xs mx-auto">
                <div className="flex justify-center mb-4 pt-5 text-7xl">
                    {icon}
                </div>
                <div className="text-xl font-semibold text-center mb-5">
                    {value}
                </div>
                <div className="text-linkWhite break-words">
                    {text}
                </div>
            </div>
        </>
    );
}