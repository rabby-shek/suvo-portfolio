import React from 'react'

const Engineering = () => {
  return (
    <section className='engineering-container'>
     <div className="container">
      <div className="row gx-5 align-items-center no-gutters">
        <div className="col-lg-6 col-sm-6" data-aos="fade-right" >
          <div className='title'>Design</div>
          <p>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
        </div>
        <div className="col-lg-6 col-sm-6"></div>
        <div className="col-lg-6 col-sm-6"></div>
        <div className="col-lg-6 col-sm-6" data-aos="fade-left">
          <div className='title'>Engineering</div>
          <p>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Engineering;
