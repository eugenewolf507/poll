// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
//! Login with auth-helpers
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Poll from '../components/Poll';
import SignOutButton from '../components/SignOutButton';
import UserEmail from '../components/UserEmail';
import { useState, useEffect } from 'react';

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
    <div className="container">
      {canUserSignIn() ? (
        <>
          <UserEmail session={session} />
          <SignOutButton supabase={supabase} />
          <Poll session={session} />
        </>
      ) : (
        <>
          <button onClick={signInWithGoogle}>
            Залогінтесь через корпоративний INC4 (Google) аккаунт
          </button>
          {notInc4Account && (
            <p>
              Ви намагаєтесь залогінитись не через корпоративний INC4 аккаунт
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
