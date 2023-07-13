'use client';
import { supabase } from '@/utils/supabase';
import React, { useState } from 'react';

const SendEmail = () => {
  const [email, setEmail] = useState<string>('');

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { error: sendEmailError } =
        await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: 'http://localehost:3000/paswordReset/',
        });
      if (sendEmailError) {
        throw sendEmailError;
      }
      alert('パスワード設定メールを確認してください');
    } catch (error) {
      alert('エラーが発生しました');
    }
  };
  return (
    <main className='flex items-center justify-center w-full h-screen'>
      <div className='mx-auto'>
        <form onSubmit={onSubmit}>
          <div>
            <label>登録メールアドレス</label>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-2 rounded-md'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <button
              className='flex items-center justify-center bg-red-400 px-4 py-1 rounded-md'
              type='submit'
            >
              メールを送信
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SendEmail;
