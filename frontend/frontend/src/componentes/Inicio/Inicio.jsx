
import { useRef, useState } from 'react'
import Button3b from '../atoms/Button3b'

const Inicio = () => {
  const [isForm, setIsForm] = useState({
    login : true,
    register : false,
    forgotPW : false,
  })
  const signInEmailRef = useRef()
  const signInPasswordRef = useRef()
  const signUpEmailRef = useRef()
  const signUpPasswordRef = useRef()
  const signUpConfirmPasswordRef = useRef()
  const emailForgotPWRef = useRef()
  const handleSubmitSignIn = (e) => {
    e.preventDefault()
    /* 
    Inicio
    */
  }
  const handleSubmitSignUp = (e) => {
    e.preventDefault()
    /* 
    Registro
    */
  }
  const handleResetPassword = (e) => {
    e.preventDefault()
    /* 
    Recuperar contraseña
    */
  }
  const getPosition = () => {
    return isForm.login ? "top-full"
    : isForm.register ? "top-0"
    : isForm.forgotPW ? "-top-full"
    : null
  }

  return (
    <div className="relative w-full py-10 px-5 flex flex-col items-center  font-body"> 
      <div className="mb-16 text-center z-5">
        <h1 className="text-3xl font-extrabold text-black sm:text-4xl lg:text-5xl">Prueba tecnica ING. Industria4</h1>
      </div>
      <img src="https://images.freeimages.com/images/large-previews/34a/the-photoser-1155658.jpg" alt="" className="absolute top-0 w-full h-full bg-center object-cover opacity-50"/>
      <div className="relative z-10 max-w-5xl w-full md:w-3/4 grid grid-cols-7 overflow-hidden rounded-lg shadow-xl">
        <div className="hidden md:block md:col-span-2 relative border-t border-transparent">
          <img src="https://media.istockphoto.com/id/537331500/es/foto/c%C3%B3digo-de-programaci%C3%B3n-de-fondo-abstracto-tecnolog%C3%ADa-de-deve-de-software.jpg?s=612x612&w=0&k=20&c=D33xO9c12VXtJduSypBszR1WUo_D8nyN6CTaBxAu9D4=" alt="" className="absolute h-full bg-center object-cover"/>
        </div>
        {/* ::Options */}
        <div className="z-10 col-span-7 sm:col-span-2 md:col-span-1 h-full flex sm:flex-col border-t border-transparent items-center text-sm text-gray-500">
          {/* Login */}
          <button onClick={() => setIsForm({ login : true, register : false, forgotPW : false })} className={`py-1.5 w-full h-full sm:h-1/3 inline-flex flex-col justify-center items-center active:outline-none focus:outline-none ${isForm.login ? "bg-white bg-opacity-90 text-gray-800" : "text-white"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="">Iniciar sesion</span>
          </button>
          {/* Registro */}
          <button onClick={() => setIsForm({ login : false, register : true, forgotPW : false })} className={`py-1.5 w-full h-full sm:h-1/3 inline-flex flex-col justify-center items-center active:outline-none focus:outline-none ${isForm.register ? "bg-white bg-opacity-90 text-gray-800" : "text-white"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="">Registrarse</span>
          </button>
          {/* Recuperar contraseña */}
          <button onClick={() => setIsForm({ login : false, register : false, forgotPW : true })} className={`py-1.5 w-full h-full sm:h-1/3 inline-flex flex-col justify-center items-center active:outline-none focus:outline-none ${isForm.forgotPW ? "bg-white bg-opacity-90 text-gray-800" : "text-white"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span className="">Recuperar contraseña</span>
          </button>
        </div>
        <div className={`col-span-7 sm:col-span-5 md:col-span-4 relative max-h-550px transition-all duration-500 ease-in-out transform -translate-y-full ${getPosition()}`}>
          {/* ::Login Form */}
          <div onSubmit={handleSubmitSignIn} className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-90 transition-all duration-150 ease-in transform ${!isForm.login && "opacity-0"}`}>
            {/* :::Login Title */}
            <h2 className="py-4 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-t from-gray-200 to-sky-600 font-bold">Inicia sesion aquí</h2>
            {/* :::Login Form */}
            <form action="" className="py-10 w-full">
              {/* Login Email */}
              <label htmlFor="email" className="relative">
                <input ref={signInEmailRef} id="email" type="email" name="email" className="form-input mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:ring-0 focus:border-sky-600" placeholder="Email" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </label>
              {/* Login Password */}
              <label htmlFor="password" className="relative">
                <input ref={signInPasswordRef} id="password" type="password" name="password" className="form-input mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:ring-0 focus:border-sky-600" placeholder="Contraseña" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </label>
              {/* Login Submit Button */}
              <div className="mt-10 w-full">
                <Button3b type="submit" bgColor="bg-sky-600 bg-opacity-70">Entrar</Button3b>
              </div>
            </form>
          </div>
          {/* ::Registro form */}
          <div onSubmit={handleSubmitSignUp} className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-90 transition-all duration-150 ease-in transform ${!isForm.register && "opacity-0"}`}>
            {/* :::Register Title */}
            <h2 className="py-4 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-t from-gray-200 to-blue-600 font-bold">Registrate aquí</h2>
            {/* :::Register Form */}
            <form action="" className="py-10 w-full">
              {/* Register Email */}
              <label htmlFor="email" className="relative">
                <input ref={signUpEmailRef} id="email" type="email" name="email" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-blue-600 focus:ring-0" placeholder="Email" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </label>
              {/* Register Password */}
              <label htmlFor="password" className="relative">
                <input ref={signUpPasswordRef} id="password" type="password" name="password" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-blue-600 focus:ring-0" placeholder="Contraseña" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </label>
              {/* Register Confirm Password */}
              <label htmlFor="password" className="relative">
                <input ref={signUpConfirmPasswordRef} id="password" type="password" name="password" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-blue-600 focus:ring-0" placeholder="Confirmar contraseña" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400 text-opacity-70" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
              </label>
              {/* Login Submit Button */}
              <div className="mt-10 w-full">
                <Button3b type="submit" bgColor="bg-blue-600 bg-opacity-70">Registrarme</Button3b>
              </div>
            </form>
          </div>
          {/* ::Recuperar contraseña Form */}
          <div onSubmit={handleResetPassword} className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-90 transition-all duration-150 ease-in transform ${!isForm.forgotPW && "opacity-0"}`}>
            {/* :::Reset Title */}
            <h2 className="py-4 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-t from-gray-200 to-red-600 font-bold">Recuperar contraseña</h2>
            {/* :::Reset informations */}
            <div className="py-5">
              <p className="py-2">Ingresa tu email y te enviaremos las instrucciones para recuperarla o crear una nueva.</p>
            </div>
            {/* :::Reset Form */}
            <form action="" className="py-8 w-full">
              {/* Email */}
              <label htmlFor="email" className="relative">
                <input ref={emailForgotPWRef} id="email" type="email" name="email" className="mb-5 py-0.5 w-full text-base text-gray-700 border-0 border-b border-gray-700 outline-none bg-transparent focus:border-red-600 focus:ring-0" placeholder="Email" required/>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </label>
              {/* Login Submit Button */}
              <div className="mt-10 w-full">
                <Button3b type="submit" bgColor="bg-red-600 bg-opacity-70">Recuperar</Button3b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio
