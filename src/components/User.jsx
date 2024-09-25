
const User = ({data}) => {
    const {name, imageSize, imageUrl } = data;
  return (
    <div className="shadow-lg" style={{
        margin: "40px auto",
        width: '32%',
        maxWidth:320,
        textAlign: "center",
        backgroundColor: "teal",
        color: "whitesmoke",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 14px 18px rgba(0, 0, 0, 0.5)"
    }}>
  
      <h1>{name}</h1>
      <img
        className="avatar"
        src={imageUrl}
        alt={'Photo of ' + name}
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: "50%"
        }}
      />
    </div>
  )
}
export default User