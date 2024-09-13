export default function AvalCard({ icon, name, message }) {
    return (
        <>
            <div className="flex flex-col justify-around p-4 m-5 bg-zinc-900 rounded-lg shadow-lg h-60 w-96">
                <div className="flex gap-1">
                    {icon}
                    {icon}
                    {icon}
                    {icon}
                    {icon}
                </div>
                <div>
                    {message}
                </div>
                <div>
                    {name}
                </div>
            </div>
        </>
    );
}