const Profile = ({ user }) => {
  return (
    <div className="profileCard">
      <h1>{user.name} </h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        // style={{
        //     width: user.imageSize,
        //     height: user.imageSize,
        //     borderRadius: '50%'
        // }}
      />
    </div>
  );
};

export default Profile;
