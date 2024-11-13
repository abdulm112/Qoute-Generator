import React, { useEffect, useState } from 'react'

 const Qoutes = () => {
    const [qoutes, setQoutes] = useState()
    const [isCicked, setisCicked] = useState(false)


    async function getdata(p) {
        const baseUrl = "https://api.adviceslip.com/advice"
        setisCicked(true)

        try {
            const response = await fetch(baseUrl)
            const responseData = await response.json()

            if (response.ok) {
                setQoutes(responseData)
                setisCicked(false)
                console.log(responseData);
                
            }else{
                alert("unable to fecth data")
                setisCicked(false)


            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
    getdata()
    }, [])
  return (
    <div>
        <div className='min-h-screen flex flex-col justify-center items-center'>
            
            <legend className=' bg-blue-800 rounded-3xl shadow-lg py-10 px-5 text-center flex flex-col'>
            <h1 className='text-3xl'>ADVICE GENERATOR</h1>
               {
                qoutes ? (
                   <div  className='flex flex-col gap-5 items-center text-white p-2'>
                    <span>{'ADVICE'+ ' #' + qoutes.slip.id}</span>
                    <span className='w-[30vw] max-sm:w-[80vw] text-center'>{'"' + qoutes.slip.advice + '"'}</span>
                    </div>
                ) :(
                  <div>
                      <p></p>
                      <p></p>
                  </div>
                )
            }
            <div className='text-center p-5'>
            <button className={`bg-black text-white p-2 rounded-lg ${isCicked ? "cursor-not-allowed" : "cursor-pointer"}`}  onClick={getdata}>
            {isCicked ? "Please wait......" : "GET ADVICE"}
            </button>
            </div>
            </legend>
          
        </div>
    </div>
  )
}

export default Qoutes
