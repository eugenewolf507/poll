const UserEmail = ({ session }) => {
  return <div>Ваш email: {session.user.email}</div>;
};

export default UserEmail;
