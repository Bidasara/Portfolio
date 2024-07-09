import React from 'react'
import { useState, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Windmill from '../models/windmill'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const Contact = () => {
  const [speed, setspeed] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const {showAlert,hideAlert,alert}= useAlert();
  const [form, setform] = useState({name:'',email:'',message:''})
  const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsLoading(true)
    setspeed(5)
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Harshit",
        from_email:form.email,
        to_email:'harshitbidasara@gmail.com',
        message:form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false)
      showAlert({show:true,text:'Message sent successfully!',type:'success'})
      setTimeout(() => {
        hideAlert()
        setspeed(0)
        setform({name:'',email:'',message:''})
      }, [3000]);
    }).catch((error)=>{
      showAlert({show:true,text:'I didnt recieve your message',type:'danger'})
      setIsLoading(false)
      setspeed(1)
      console.log(error)
    })

  }
  const handleBlur=()=>setspeed(1)
  const handleFocus=()=>setspeed(5)
  
  return (
      <section className="relative flex lg:flex-row flex-col max-container ">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="font-bold text-4xl">Get in touch</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 mt-12">
            <label className="font-semibold text-md">
              Name
              <input 
              type="text"
              name="name"
              className="px-1 flex rounded-lg w-full border-[1px] border-gray-300 h-7"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
               />
            </label>
            <label className="font-semibold text-mid">
              Email
              <input 
              type="email"
              name="email"
              className="px-1 flex rounded-lg w-full border-[1px] border-gray-300 h-7"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
               />
            </label>
            <label className="font-semibold">
              Your Message
              <textarea
              name="message"
              className="px-1 flex  rounded-lg w-full border-[1px] border-gray-300"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
               />
            </label>
            <button
            type="submit"
            className=" bg-blue-900 p-3 rounded-lg font-semibold text-white"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}>
            {isLoading?'Sending message ....':'Send Message'}
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
          camera={{
            position:[0,0,5],
            fov:75,
            near:0.1,
            far:1000
          }}>
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader/>}>
            <Windmill
            speed={speed}
             position={[0,-3,0]}
             rotation={[12.7,4.4,0]}
             scale={[0.6,0.6,0.6]}
            />
          </Suspense>
          </Canvas>
        </div>
      </section>
  )
}

export default Contact
