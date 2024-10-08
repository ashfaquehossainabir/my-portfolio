const aboutItems = [
  {
    label: 'Projects done',
    number: 35
  },
  {
    label: 'Years of experience',
    number: 4
  }
];

function About() {
  return (
    <>
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              Hello! I'm Ashfaque Hossain Abir. I am passionate about coding, solving problems, and building 
              innovative projects. I believe that knowledge has no limits, and constantly seeking opportunities 
              to expand my skills and contribute to meaningful projects.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
              {
                aboutItems.map(({label, number}, key) => (
                  <div key={ key }>
                    <div className="flex items-center md:mb-2">
                      <span className="text-2xl font-semibold md:text-4xl">{ number }</span>
                      <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                    </div>

                    <p className="text-sm text-zinc-400">{ label }</p>
                  </div>
                ))
              }

              <img src="/images/logo.svg" alt="logo" className="ml-auto md:w-[40px] md:h-[40px]" width={30} height={30}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
