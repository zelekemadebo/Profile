// import Header from './components/Header.jsx'
// import Alert from './components/Alert.jsx'
// import First from './components/First.jsx'
import User from './components/User.jsx'
import Profile from './components/Profile.jsx'
const App = () => {
const userCard =true
  const data = {
    name: 'Larry hulston',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
  };
  const user = {
    name: 'Hedy ',
    imageUrl: 'https://cdn.pixabay.com/photo/2024/05/04/02/30/african-woman-8738173_640.jpg',
    imageSize: 190,
  };
  const user2 = {
    name: 'Bred',
    imageUrl: 'https://i.pinimg.com/236x/2d/3b/7d/2d3b7ddb118183749311528e0728c5f9.jpg',
    imageSize: 190,
  };
  const user3 = {
    name: ' Lamos',
    imageSize: 190,
    imageUrl: 'https://www.vibe.com/wp-content/uploads/2017/04/aja-naomi-king-vibe-1492635003.jpg?w=1024',
  };
  
  // if(user) {
  //    "true"
  // } else {
  //   "false"
  // }
  // user ? "true" : "false"
  return (
    <>
    <p>If we want to Display conditionally</p>
     {
        userCard ? 
                <div className='d-md-flex justify-content-between'>
                    <User data={data}/>
                    <User data={data}/>
                    <User data={data}/>
                </div> 
              :      
                <div className="profileLine">
                      <Profile user={user}/>
                      <Profile user={user2}/>
                      <Profile user={user3}/>
                </div>
      } 
    <p>If we want to Display when the condition is only true</p>
    {
      userCard &&  <div className="profileLine">
                        <Profile user={user}/>
                        <Profile user={user2}/>
                        <Profile user={user3}/>
                  </div>
    }
    
    </>
  )
}

export default App