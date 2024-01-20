import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/befit-logo.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="">
            <Image src={profileImg} alt="Be Fit and Thrive" width={250} height={100} />
        </div>
    </Link>
  )
}

export default Logo