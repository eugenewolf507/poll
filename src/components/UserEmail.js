const UserEmail = ({ session }) => {
  return <div className="user-email">Ваш email: {session.user.email}</div>;
};

export default UserEmail;
