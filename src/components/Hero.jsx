// Components
import { ButtonPrimary, ButtonOutline } from "./Button"

function Hero() {
    return (
        <section id="home" className="pt-36 lg:pt-[6.5rem]">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/images/avatar-1.png" className="img-cover" width={40} height={40} alt="Portrait Pic"/>
                        </figure>
                        
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">I'm <br/>Ashfaque Hossain <br/>A Web Expert</h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            href="https://ashfaquehossainabir.github.io/documents/Resume(CV)_of_A.H.%20Abir.pdf"
                            label="Download Resume"
                            icon="download"
                        />

                        <ButtonOutline
                            href="https://github.com/ashfaquehossainabir?tab=repositories"
                            label="My Github Repo"
                            icon="code"
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] max-h-[550px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-100% rounded-[60px] overflow-hidden">
                        <img src="/images/HeroImageBanner.png" className="w-full" width={656} height={800} alt="Hero-banner"/>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero