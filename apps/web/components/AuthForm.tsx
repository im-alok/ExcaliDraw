"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Github } from 'lucide-react';

interface AuthFormProps {
    type: 'login' | 'signup';
}

const AuthForm = ({ type }: AuthFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password, name });
        // Demo purpose only
        alert(`${type === 'login' ? 'Login' : 'Signup'} demo: ${email}`);
    };

    return (
        <div className="glass-morphism rounded-xl p-8 w-full max-w-md animate-scale-in">
            <h2 className="text-2xl font-bold text-gradient mb-6 text-center">
                {type === 'login' ? 'Welcome back' : 'Create an account'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {type === 'signup' && (
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-white/70">
                            Full Name
                        </label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-white/5 border-white/10 focus:border-primary-teal/50 text-white"
                            required
                        />
                    </div>
                )}

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-white/70">
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="youremail@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/5 border-white/10 focus:border-primary-teal/50 text-white"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-sm text-white/70">
                            Password
                        </label>
                        {type === 'login' && (
                            <Link href="/forgot-password" className="text-xs text-primary-teal hover:underline">
                                Forgot password?
                            </Link>
                        )}
                    </div>
                    <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white/5 border-white/10 focus:border-primary-teal/50 text-white"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-teal to-primary-purple text-black font-medium h-11 rounded-lg button-glow"
                >
                    {type === 'login' ? 'Sign In' : 'Sign Up'}
                </Button>

                <div className="relative my-6">
                    <Separator className="bg-white/10" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-dark px-2 text-xs text-white/50">
                        OR CONTINUE WITH
                    </span>
                </div>

                <Button
                    type="button"
                    variant="outline"
                    className="w-full border-white/10 bg-white/5 hover:bg-white/10 text-white"
                >
                    <Github className="w-4 h-4 mr-2" />
                    <span>{type === 'login' ? 'Sign in' : 'Sign up'} with GitHub</span>
                </Button>
            </form>

            <p className="mt-6 text-center text-sm text-white/60">
                {type === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}
                <Link
                    href={type === 'login' ? '/signup' : '/login'}
                    className="ml-1 text-primary-teal hover:underline"
                >
                    {type === 'login' ? 'Sign up' : 'Sign in'}
                </Link>
            </p>
        </div>
    );
};

export default AuthForm;
