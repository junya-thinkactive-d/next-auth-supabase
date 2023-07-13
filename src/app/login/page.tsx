'use client';

import { supabase } from '@/utils/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConf, setPasswordConf] = useState<string>('');

  const onLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { error: signinError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (signinError) {
        throw signinError;
      }
      router.push('/auth/callback');
    } catch (error) {
      alert('エラーが発生しました');
    }
  };

  return (
    <main className='flex items-center justify-center w-full h-screen'>
      <div className='mx-auto'>
        <form onSubmit={onLogin}>
          <div className='flex items-center justify-between'>
            <label>メールアドレス</label>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-2 rounded-md'
            />
          </div>
          <div className='flex items-center justify-between'>
            <label>パスワード</label>
            <input
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border-2 rounded-md'
            />
          </div>
          <div className='flex items-center justify-between'>
            <label>パスワード（確認）</label>
            <input
              type='password'
              required
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
              className='border-2 rounded-md'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <button
              className='flex items-center justify-center bg-red-400 px-4 py-1 rounded-md'
              type='submit'
            >
              ログイン
            </button>
            <br />
            <Link href='/signup'>ユーザー登録がお済みでない方はこちらから</Link>
            <br />
            <Link href='/sendemail'>パスワードをお忘れの方はこちらから</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
