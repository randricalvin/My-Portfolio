import React from 'react'

const Presentation = () => {
  return (
    <div>
        <div className="text-presentation ml-5">
            <h3 className='text-xl text-[#5C64CF]'>
                Hello !
            </h3>
            <h1 className=''>
                I'm <span className="text-[#5C64CF] underline">Calvin</span>, 
                and I'm a <span className="text-[#5C64CF] underline">Full Stack Developer</span>
            </h1>
        </div>
        <div className="p-presentation mt-5 ml-5">
            <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
        </div>
    </div>
  )
}

export default Presentation