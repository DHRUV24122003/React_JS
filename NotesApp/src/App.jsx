import React from 'react'




const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }



  return (
    <div className='h-screen flex-col bg-black text-white' >
      
        
      
      <form onSubmit = {(e) => {submitHandler(e)}} className="flex justify-between items-start p-10 ">
        <div className='flex gap-4  w-1/2 items-start flex-col'>
          <input 
          type="text" 
          placeholder="Enter notes heading" 
          className ='px-5 w-full font-medium py-2 border-2 outline-none rounded'></input>
        
       
       
        <textarea 
          type="text" 
          className = 'px-5 w-full py-2 font-medium flex item-start flex-row h-32 border-2 outline-none rounded'
          placeholder='write details'></textarea>
        
        
        <button className = 'bg-white w-full px-5 py-2 text-black rounded'>Add Note</button>
         
       
        </div>
        <img className = 'h-52 rounded'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjbuEAC8rqo3JZW-OAkwCrjMp3_ui3ElVgYDfQnhL0g&s=10" alt="" />     
      </form>
    </div>
  )
}

export default App