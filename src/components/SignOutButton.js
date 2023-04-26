const SignOutButton = ({ supabase }) => {
  return (
    <button className="button block" onClick={() => supabase.auth.signOut()}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
