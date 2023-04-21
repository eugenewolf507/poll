// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
//! Login with auth-helpers
// import { Auth } from '@supabase/auth-ui-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/Account';
import { useState, useEffect } from 'react';

const Home = () => {
  // const notInc4Account = localStorage.getItem('notInc4Account');
  const [notInc4Account, setNotInc4Account] = useState(false);
  const session = useSession();
  const supabase = useSupabaseClient();

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

  const canUserSignIn = () => {
    if (session) {
      if (session?.user.email.endsWith('@inc4.net')) {
        return true;
      } else {
        // alert('Use your INC4 account, please!');
        localStorage.setItem('notInc4Account', true);
        supabase.auth.signOut();
        return false;
      }
    }
    return false;
  };

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!canUserSignIn() ? (
        <>
          <button onClick={signInWithGoogle}>
            SignIn with you INC4 Google account
          </button>
          {notInc4Account && <p>NOT INC4 ACCOUNT</p>}
          {/* <Auth
            providers={['google']}
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          /> */}
        </>
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Home;
//! Login with supabase-js
// import { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { Auth } from '@supabase/auth-ui-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared';

// const supabase = createClient(
//   'https://msctzmagzmnoslmnkjae.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zY3R6bWFnem1ub3NsbW5ramFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4OTcxMTksImV4cCI6MTk5NzQ3MzExOX0.O7hcy5TKNdvWGnvIaaxIhx4jooxZgUm3LHbGpyOhs_o'
// );

// export default function Home() {
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   if (!session) {
//     return (
//       <Auth
//         providers={['google']}
//         supabaseClient={supabase}
//         appearance={{ theme: ThemeSupa }}
//         theme="dark"
//       />
//     );
//   } else {
//     return (
//       <div>
//         <p>Logged in!</p>
//         <button
//           className="button block"
//           onClick={() => supabase.auth.signOut()}
//         >
//           Sign Out
//         </button>
//       </div>
//     );
//   }
// }
