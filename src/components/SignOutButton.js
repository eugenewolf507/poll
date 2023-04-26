const SignOutButton = ({ supabase }) => {
  return (
    <button className="button block" onClick={() => supabase.auth.signOut()}>
      Вийти
    </button>
  );
};

export default SignOutButton;
