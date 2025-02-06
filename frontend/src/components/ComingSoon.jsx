import { useEffect, useState } from "react";

const ComingSoon = () => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
            <div className="max-w-md bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-4xl font-bold text-gray-800">🚧 Under Construction 🚧</h1>
                <p className="text-lg text-gray-600 mt-4">We are working hard to bring something amazing for you!</p>
                <p className="text-xl font-semibold text-blue-500 mt-2">Coming Soon{dots}</p>
            </div>
        </div>
    );
};

export default ComingSoon;
