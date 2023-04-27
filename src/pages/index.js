// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
//! Login with auth-helpers
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Poll from '../components/Poll';
import SignOutButton from '../components/SignOutButton';
import UserEmail from '../components/UserEmail';

const Home = () => {
  const [notInc4Account, setNotInc4Account] = useState(false);
  const session = useSession();
  const supabase = useSupabaseClient();

  //Get from Local Storage
  useEffect(() => {
    const storedData = localStorage.getItem('notInc4Account');
    if (storedData) {
      setNotInc4Account(JSON.parse(storedData));
    }
  }, [session]);

  async function signInWithGoogle() {
    localStorage.setItem('notInc4Account', false);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  //Check if session exist and account endswith @inc4.net
  const canUserSignIn = () => {
    if (session) {
      if (session?.user.email.endsWith('@inc4.net')) {
        return true;
      } else {
        localStorage.setItem('notInc4Account', true);
        supabase.auth.signOut();
        return false;
      }
    }
    return false;
  };
  // //! DELETE AFTER TESTING DIFFERENT USERS
  // const canUserSignIn = () => {
  //   return session ? true : false;
  // };

  return (
    <div>
      {canUserSignIn() ? (
        <>
          <div className="header">
            <Image
              src="/logo.svg"
              alt="INC4 Logo"
              width={70}
              height={41}
              priority
            />
            <UserEmail session={session} />
            <SignOutButton supabase={supabase} />
          </div>
          <Poll session={session} />
        </>
      ) : (
        <>
          <div className="header">
            <Image
              src="/logo.svg"
              alt="INC4 Logo"
              width={70}
              height={41}
              priority
            />
          </div>
          <div className="loginBtn-wrapper">
            <button onClick={signInWithGoogle} className="btn">
              Залогінтесь через корпоративний INC4 (Google) аккаунт
            </button>
            {notInc4Account && (
              <p>
                Ви намагаєтесь залогінитись не через корпоративний INC4 аккаунт.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
