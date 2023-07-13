'use client';

import { supabase } from '@/utils/supabase';
import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConf, setPasswordConf] = useState<string>('');

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { error: sinupError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (sinupError) {
        throw sinupError;
      }
      alert('登録メールを確認してください');
    } catch (error) {
      alert('エラーが発生しました');
    }
  };

  return (
    <main className='flex items-center justify-center w-full h-screen'>
      <div className='mx-auto'>
        <form onSubmit={onSubmit}>
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
          <div className='flex items-center justify-center my-4'>
            <button
              className='flex items-center justify-center bg-sky-400 px-4 py-1 rounded-md'
              type='submit'
            >
              サインアップ
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
