"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { YourInstagramIcon, FacebookIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";
import { hr } from "date-fns/locale";
import Logo from "../../components/Header/Logo"

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
		<footer className="mt-16 rounded-2xl m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
			<h3 className="mt-20 font-medium text-black font-bold text-center capitalize text-xl sm:text-xl lg:text-xl px-4">
				Unlock your healthiest you: Subscribe for personalized fitness &
				wellness tips
			</h3>
			<p className="mt-5 px-4 text-black text-center w-full sm:w-3/5 font-light text-sm sm:text-base">
				Ignite your journey to a fitter, happier you. Get personalized guidance,
				daily inspiration, and a vibrant community to support your every step.
				Healthier starts here.
			</p>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
			>
				<input
					type="email"
					placeholder="Enter your email"
					{...register('email', { required: true, maxLength: 80 })}
					className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
				/>

				<input
					type="submit"
					className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
				/>
			</form>
			<div className="flex items-center mt-8">
				{/* 				
				<a
					href={siteMetadata.facebook}
					className="inline-block w-6 h-6 mr-4"
					aria-label="Reach out to me via LinkedIn"
					target="_blank"
				>
					<FacebookIcon className="hover:scale-125 transition-all ease duration-200" />
				</a>
				<a
					href={siteMetadata.twitter}
					className="inline-block w-6 h-6 mr-4"
					aria-label="Reach out to me via Twitter"
					target="_blank"
				>
					<TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
				</a>
				<a
					href={siteMetadata.github}
					className="inline-block w-6 h-6 mr-4 fill-light"
					aria-label="Check my profile on Github"
					target="_blank"
				>
					<InstagramIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
				</a> */}
			</div>
			<section className="text-sm text-black h-auto md:py-32 py-20 2xl:px-0 px-10">
				<div className="max-w-7xl mx-auto flex md:flex-row md:space-y-0 space-y-2 flex-col flex-wrap xl:space-x-5 xl:flex-nowrap items-start justify-between">
					<div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 space-y-5 pr-10">
						<Logo />
					</div>
					<div className="w-full md:w-1/5 pt-6">
						<h4 className="text-lg mb-5">Focus</h4>
						<ul className="relative text-black space-y-2">
							<li>
								<Link href="/categories/health" className="hover:underline">
									Health
								</Link>
							</li>
							<li>
								<Link href="/categories/fitness" className="hover:underline">
									Fitness
								</Link>
							</li>
							<li>
								<Link href="/categories/lifestyle" className="hover:underline">
									Lifestyle
								</Link>
							</li>
							<li>
								<Link href="/categories/nutrition" className="hover:underline">
									Nutrition
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/5 lg:w-1/5 pt-6">
						<h4 className="text-lg mb-5">About Us</h4>
						<ul className="relative text-black space-y-2">
							<li>
								<Link href="/about" className="hover:underline">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:underline">
									Contact
								</Link>
							</li>

							<li>
								<Link href="/advertise" className="hover:underline">
									Advertize With Us
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-2/3 lg:w-1/3 pt-6">
						<h4 className="text-lg mb-5">Our Mission</h4>
						<p className="text-black">
							Sparking your transformation through personalized well-being,
							daily inspiration, and a thriving community.
						</p>

						<div className="flex justify-center mt-8 space-x-6">
							<a href="#" className="text-gray-400 hover:text-gray-500">
								<span className="sr-only">Facebook</span>
								<svg
									className="w-6 h-6"
									ariaHidden="true"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
							<a href="#" className="text-gray-400 hover:text-gray-500">
								<span className="sr-only">Instagram</span>
								<svg
									className="w-6 h-6"
									ariaHidden="true"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fill-rule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
							<a href="#" className="text-gray-400 hover:text-gray-500">
								<span className="sr-only">Twitter</span>
								<svg
									className="w-6 h-6"
									ariaHidden="true"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>
							<a href="#" className="text-gray-400 hover:text-gray-500">
								<span className="sr-only">YouTube</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;





		