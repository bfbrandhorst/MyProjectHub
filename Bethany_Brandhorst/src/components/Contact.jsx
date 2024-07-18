import React,{useState} from 'react'

const Contact = () => {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [message, setMessage]=useState('')
    const [nameErr, setNameErr]=useState('')
    const [emailErr, setEmailErr]=useState('')
    const [messageErr, setMessageErr]=useState('')


    const handleSubmit = (event)=>{
        event.preventDefault()
        let isValid=true


        if (!name){
            setNameErr('Name field is required')
            isValid=false
        } else {
            setNameErr('')
        }
        if (!/\S+@\S+\.\S+/.test(email)){
            setEmailErr('Email must be valid')
            isValid=false
        } else{
            setEmailErr('')
        }
        if (!message){
            setMessageErr('Must have message')
            isValid=false
        } else {
            setMessageErr('')
        }

        if(isValid){
            console.log('form submitted',{name,email,message})
            setName('')
            setEmail('')
            setMessage('')
        }
    }
  return (
    <div>
      <form id="contactForm" onSubmit={handleSubmit}> 
        <div>
            <label htmlFor="name">
                name
            </label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            {nameErr&& <p>{nameErr}</p>}
        </div>
        <div>
            <label htmlFor="email">
                email
            </label>
            <input
            type="text"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            {emailErr&& <p>{emailErr}</p>}
        </div>
        <div>
            <label htmlFor="message">
                message
            </label>
            <textarea 
            name="message" 
            id="message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}>
                
            </textarea>
            {messageErr&& <p>{messageErr}</p>}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Contact
