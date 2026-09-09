"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


const loginSchema = z.object({
    phone: z.string().min(10, { message: "Iltimos Nomeringiz 998 dan boshlanib yozilsin" }),
    password: z.string().min(6, { message: "Paroliz judda kichkina" })
})

const LoginPage = () => {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    // Initialize react-hook-form with the Zod resolver (no TS generics needed)

    // Handle form submission 
    const handleSubmit = async (e) => {
        e.preventDefault();  // Page reload qilmaslik uchun
        // API'ga jo'natish
        const response = await fetch('/api/loading', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, password })
        });

        const data = await response.json();
        console.log(data);
        // Qaytgan javobni ishlash
    }



    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-95 rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)]">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Welcome Back</h2>
                    <p className="mt-1.5 mb-6 text-sm text-slate-500">Please enter your credentials to continue</p>

                    <div className="mb-4">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            autoComplete="tel"
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            autoComplete="current-password"
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800 active:scale-[0.99]"

                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage