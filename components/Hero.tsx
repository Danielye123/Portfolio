import Image from "next/image"
import Link from "next/link";


const Hero = () => {
  return (
    <div className="flex flex-row min-h-screen bg-[#F6F6F6]">

      <div className="text-black">
        <div>
          <h2>HI, I AM DANIEL YE</h2>
        </div>
        <div>
          Professional 
          <span>Web Developer </span>
          based in USA
        </div>
        <div>
        Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed. Ullamcorper tellus ac cras nec, pretium laoreet duis. 
        </div>
        <Link href="/contact">
          Contact me
        </Link>

        <div>
          Social Media
        </div>
      </div>

      <div className="text-black">
        Image
      </div>
    </div>
  )
}

export default Hero;