import React from 'react';

const Top = () => {
 

  return (
    <main>
      <div>
        <h1>トップページ</h1>
        <form action='/auth/signout' method='post'>
          <button type='submit'>ログアウトする</button>
        </form>
      </div>
    </main>
  );
};

export default Top;
