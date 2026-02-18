import { type FormEventHandler, useState } from 'react';
import { Eye, EyeOff, User, Users, Lock, ArrowRight, BookOpen } from 'lucide-react';
import { Head, useForm } from '@inertiajs/react';
import { store as loginStore } from '@/routes/login';
import { request as passwordRequest } from '@/routes/password';
import AuthLayout from '@/app/layouts/auth.layout';
import LoadingSpinner from '@/app/components/ui/loading-spinner';
import FormAlert from '@/app/components/form-alert';

interface LoginProps {
    canResetPassword: boolean;
    canRegister: boolean;
    status?: string;
}

export default function Login({ canResetPassword, status }: LoginProps) {
    const [activeTab, setActiveTab] = useState<'staff' | 'wali'>('staff');
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        identifier: '',
        password: '',
        remember: false,
        login_type: 'staff' as 'staff' | 'wali',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setData('login_type', activeTab);
        post(loginStore().url);
    };

    const handleTabChange = (tab: 'staff' | 'wali') => {
        setActiveTab(tab);
        setData('login_type', tab);
    };

    return (
        <>
            <Head title="Masuk" />
            <AuthLayout title="Selamat Datang" subtitle="Silakan masuk ke akun Anda untuk melanjutkan.">

                {/* Status Message */}
                {status && (
                    <FormAlert variant="success" message={status} />
                )}

                {/* Error: User not found */}
                {errors.identifier && (
                    <FormAlert variant="error" title="Login Gagal" message={errors.identifier} />
                )}

                {/* Error: Wrong password */}
                {errors.password && (
                    <FormAlert variant="error" title="Login Gagal" message={errors.password} />
                )}

                {/* Role Switcher */}
                <div className="bg-gray-100 p-1.5 rounded-xl flex shadow-inner relative">
                    <div
                        className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-lg shadow-sm transition-all duration-300 ease-out transform ${activeTab === 'wali' ? 'translate-x-full left-1.5' : 'left-1.5'}`}
                    />
                    <button
                        type="button"
                        onClick={() => handleTabChange('staff')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg relative z-10 transition-colors duration-200 ${activeTab === 'staff' ? 'text-emerald-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <User size={18} />
                        PTK / Staff
                    </button>
                    <button
                        type="button"
                        onClick={() => handleTabChange('wali')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg relative z-10 transition-colors duration-200 ${activeTab === 'wali' ? 'text-emerald-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <Users size={18} />
                        Wali Santri
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={submit}>
                    {/* Identifier */}
                    <div className="space-y-2">
                        <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                            {activeTab === 'staff' ? 'ID PTK / Email' : 'ID Wali / Email'}
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                {activeTab === 'staff' ? <BookOpen size={20} /> : <Users size={20} />}
                            </div>
                            <input
                                id="identifier"
                                name="identifier"
                                type={activeTab === 'staff' ? 'text' : 'tel'}
                                required
                                className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 transition-all bg-gray-50 focus:bg-white sm:text-sm ${errors.identifier ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-emerald-500 focus:border-emerald-500'}`}
                                placeholder={activeTab === 'staff' ? 'Contoh: 198501...' : 'Contoh: 08123456...'}
                                value={data.identifier}
                                onChange={(e) => setData('identifier', e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Kata Sandi
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <Lock size={20} />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                className={`block w-full pl-10 pr-10 py-3 border rounded-xl focus:ring-2 transition-all bg-gray-50 focus:bg-white sm:text-sm ${errors.password ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-emerald-500 focus:border-emerald-500'}`}
                                placeholder="••••••••"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded cursor-pointer"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer select-none">
                                Ingat saya
                            </label>
                        </div>
                        {canResetPassword && (
                            <div className="text-sm">
                                <a href={passwordRequest().url} className="font-medium text-emerald-600 hover:text-emerald-500 hover:underline">
                                    Lupa kata sandi?
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={processing}
                        className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-linear-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all transform active:scale-[0.98] ${processing ? 'opacity-80 cursor-wait' : ''}`}
                    >
                        {processing ? (
                            <LoadingSpinner className="text-white -ml-1 mr-2" />
                        ) : (
                            <>
                                Masuk Aplikasi
                                <ArrowRight size={18} className="ml-2" />
                            </>
                        )}
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-6 text-center text-xs text-gray-400">
                    <p>Butuh bantuan? Hubungi <a href="#" className="underline hover:text-emerald-600">Operator Yayasan</a></p>
                </div>
            </AuthLayout>
        </>
    );
}
