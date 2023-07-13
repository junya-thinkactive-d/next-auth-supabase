import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col'>
      <Link href='/login'>Login</Link>
      </div>
    </main>
  );
}
