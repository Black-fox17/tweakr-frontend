import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { register, login } from '@/service/authService';
import { toast } from 'sonner';
import { Eye, EyeClosed } from 'lucide-react';

type CreateAccountModalProps = {
    setIsRegisterReady: (ready: boolean) => void;
    setIsPayment: (ready: boolean) => void;
};

const CreateAccountModal = ({ setIsRegisterReady, setIsPayment }: CreateAccountModalProps) => {
    const [isLogin, setIsLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const clearForm = () => {
        setFormData({ email: '', password: '', confirmPassword: '' });
    };

    const registerMutation = useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            toast.success('Account created successfully!');
            setIsRegisterReady(false);
            setIsPayment(true)
        },
        onError: (err: any) => {
            const detail = err?.response?.data?.detail;
            const msg = Array.isArray(detail) && detail[0]?.msg
                ? detail[0].msg
                : err?.response?.data?.message || 'Registration failed';
            toast.error(msg);
        }
    });

    const loginMutation = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            toast.success('Login successful!');
            setIsRegisterReady(false);
            setIsPayment(true)
        },
        onError: (err: any) => {
            const detail = err?.response?.data?.detail;
            const msg = Array.isArray(detail) && detail[0]?.msg
                ? detail[0].msg
                : err?.response?.data?.message || 'Login failed';
            toast.error(msg);
        }
    });



    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = () => {
        const { email, password, confirmPassword } = formData;

        if (!email || !password || (!isLogin && !confirmPassword)) {
            toast.error("All fields are required.");
            return;
        }

        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters.");
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        const payload = { email, password };

        if (isLogin) {
            loginMutation.mutate(payload);
        } else {
            registerMutation.mutate(payload);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-[#545454] py-[30rem] sm:py-0 overflow-y-scroll">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[811px] flex items-center justify-center gap-2 flex-col">
                <p className='text-[20px] font-medium'>
                    {isLogin ? "Welcome Back!" : "Your Citations Are Ready to Roll!"}
                </p>
                <div className='text-left flex items-start flex-col w-full'>
                    <h3 className='text-[24px] font-semibold text-black'>
                        {isLogin ? "Login to your Tweakrr account" : "Create your Tweakrr account to unleash them."}
                    </h3>
                    <p className='text-[#8A8A8A] text-[18px]'>
                        (Don't worry, this takes 30 seconds - way faster than formatting one citation manually)
                    </p>
                </div>
                <div className='bg-[#D8D8D8] h-[0.5px] w-full'></div>
                <div className='w-full flex flex-col gap-2'>
                    <div className='flex flex-col gap-1 w-full'>
                        <label className='text-[18px] font-semibold'>Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            className='text-[#9E9E9E] text-[18px] bg-[#FAFAFA] border border-[#FAFAFA] p-4 rounded-[10px] w-full' />
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[18px] font-semibold'>Password</label>
                            <div className='w-full relative'>
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    className='text-[#9E9E9E] text-[18px] bg-[#FAFAFA] border border-[#FAFAFA] p-4 rounded-[10px] w-full' />
                                <div
                                    className='w-[20px] h-[20px] absolute right-4 top-[18px] cursor-pointer'
                                    onClick={() => setShowConfirm(!showConfirm)}
                                >
                                    {showConfirm ? <Eye /> : <EyeClosed />}
                                </div>
                            </div>
                        </div>
                        {!isLogin && (
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='text-[18px] font-semibold'>Confirm Password</label>
                                <div className='w-full relative'>
                                    <input
                                        name="confirmPassword"
                                        type={showConfirm ? "text" : "password"}
                                        placeholder='Confirm Password'
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className='text-[#9E9E9E] text-[18px] bg-[#FAFAFA] border border-[#FAFAFA] p-4 rounded-[10px] w-full' />
                                    <div
                                        className='w-[20px] h-[20px] absolute right-4 top-[18px] cursor-pointer'
                                        onClick={() => setShowConfirm(!showConfirm)}
                                    >
                                        {showConfirm ? <Eye /> : <EyeClosed />}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex items-center gap-6 w-full'>
                    <p className='text-[18px]'>Or take the express route</p>
                    <div className='bg-[#D8D8D8] h-[0.5px] w-[67%] hidden sm:block'></div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <button className='border border-[#EEEEEE] w-full p-4 flex items-center justify-center gap-4 rounded-full'>
                        <img src="/assets/google.svg" alt="google" />
                        <p className='text-[16px] font-medium'>Continue with Google</p>
                    </button>
                    <p>
                        {isLogin ? "Don't have an account?" : "Already registered?"}
                        <span
                            className='text-[#010F34] font-medium cursor-pointer ml-1'
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? "Create one!" : "Login!"}
                        </span>
                    </p>
                    <button
                        onClick={handleSubmit}
                        className="bg-[#31DAC0] text-[14px] text-black rounded-full py-[14px] px-[20px] font-semibold self-start w-full">
                        Work Your Citation Magic
                    </button>
                </div>
                <div>
                    <p className='text-center'>
                        By signing up, you're joining the citation liberation movement. <br />
                        Also, you agree to <span className='text-[#010F34] font-medium'>our Terms</span> and <span className='font-medium text-[#010F34]'>Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreateAccountModal;
