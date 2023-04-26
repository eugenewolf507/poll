const SignOutButton = ({ supabase }) => {
  return (
    <button className="btn" onClick={() => supabase.auth.signOut()}>
      Вийти
    </button>
  );
};

export default SignOutButton;
