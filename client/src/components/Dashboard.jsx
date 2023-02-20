import React, {useEffect} from 'react'
import TrailCard from './TrailCard'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import ChangeName from './ChangeName'
import CreateTrail from './CreateTrail'

// import Header from './components/Header'

function Dashboard({user, setUser, setErrors, setTrails, errors, trails}) {
    

    useEffect(()=> {
      const fetchUser = async () =>{        
        const response = await fetch('authorized_user')
        if (response.ok){
        const user = await response.json() 
        setUser(user)
      }
else{
  const error = response.json()
  console.log(error.error)
  setErrors(error.error)
}
      }
      if(!user){
      fetchUser()}
    },[user, setErrors, setUser])
  
    useEffect(() => {
      const fetchTrails = async () => {
        const response = await fetch('trails')
        const trails = await response.json() 
      setTrails(trails)
      console.log(trails)
      
    }
    if (user) {
    fetchTrails()    
      .catch(console.error)
    }
     
  }, [user, setTrails])  
  
  function onAddTrail(newTrail) {
    setTrails(currentTrails =>[...currentTrails, newTrail]);
  } 
  
    if (!user) return <span>  <SignUpForm setUser={setUser} errors = {errors} setErrors={setErrors} user={user} /> <LoginForm onLogin={setUser} errors ={errors} setErrors={setErrors} user={user} /></span>    
    
    

    const trailCards = trails && trails.map(trail => <TrailCard key={trail.id} trail={trail} />)
  
    return (
        <>         
         <div className="trailList">
          <CreateTrail onAddTrail={onAddTrail} />
         <ChangeName onLogin={setUser} errors ={errors} setErrors={setErrors} user={user}/>
          {trailCards}
          
        </div>
            {/* <LoginForm onLogin={handleLogIn}  /> */}
        </>
        )
      }
      
      export default Dashboard