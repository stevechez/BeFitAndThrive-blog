"use client"
import Link from "next/link";
import Logo from "./Logo";
import { InstagramIcon, FacebookIcon, MoonIcon, SunIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
// import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {

  // const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}
  return (
		<header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
			<Logo />

			<button
				className="inline-block sm:hidden z-50"
				onClick={toggle}
				aria-label="Hamburger Menu"
			>
				<div className="w-6 cursor-pointer transition-all ease duration-300">
					<div className="relative">
						<span
							className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
							style={{
								transform: click
									? 'rotate(-45deg) translateY(0)'
									: 'rotate(0deg) translateY(6px)',
							}}
						>
							&nbsp;
						</span>
						<span
							className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
							style={{
								opacity: click ? 0 : 1,
							}}
						>
							&nbsp;
						</span>
						<span
							className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
							style={{
								transform: click
									? 'rotate(45deg) translateY(0)'
									: 'rotate(0deg) translateY(-6px)',
							}}
						>
							&nbsp;
						</span>
					</div>
				</div>
			</button>

			<nav
				className="w-max py-3 font-medium capitalize items-center flex flex-col sm:hidden
        fixed top right-1/4 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
				style={{
					top: click ? '0rem' : '-5rem',
				}}
			>
				<Link href="/" className="mr-2">
					Home
				</Link>
				<Link href="/categories/health" className="mr-2">
					Health
				</Link>
				<Link href="/categories/fitness" className="mx-2">
					Fitness
				</Link>
				<Link href="/categories/lifestyle" className="mx-2">
					Lifestyle
				</Link>

				<Link href="/categories/nutrition" className="mx-2">
					Nutrition
				</Link>

				{/* <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button> */}
			</nav>

			<nav
				className=" w-max  font-sm capitalize flex items-center hidden sm:flex
          bg-light/80 backdrop-blur-sm z-50"
			>
				<Link href="/" className="mr-6">
					Home
				</Link>
				<Link href="/categories/health" className="mr-6">
					Health
				</Link>
				<Link href="/categories/fitness" className="mr-4">
					Fitness
				</Link>
				<Link href="/categories/lifestyle" className="mr-4">
					Lifestyle
				</Link>

				<Link href="/categories/nutrition" className="mr-4">
					Nutrition
				</Link>

				{/* <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button> */}
			</nav>
		</header>
	);
}

export default Header;