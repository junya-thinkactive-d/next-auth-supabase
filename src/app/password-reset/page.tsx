'use client'
import { supabase } from '@/utils/supabase';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PasswordReset = () => {
  const router = useRouter();
  const [password, setPassword] = useState<string>('');
  const [passwordConf, setPasswordConf] = useState<string>('');

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { error: passwordResetError } = await supabase.auth.updateUser({
        password,
      });
      if (passwordResetError) {
        throw passwordResetError;
      }
      alert('パスワード変更が完了しました');
    } catch (error) {
      alert('エラーが発生しました');
    }
  };

  return (
    <main className='flex items-center justify-center w-full h-screen'>
      <div className='mx-auto'>
        <form onSubmit={onSubmit}>
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
          <div>
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
              パスワード変更
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PasswordReset;
