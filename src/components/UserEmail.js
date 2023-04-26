const UserEmail = ({ session }) => {
  return <div>Your email: {session.user.email}</div>;
};

export default UserEmail;
