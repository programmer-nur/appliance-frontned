'use client'
import Link from "next/link";
import logo from '../../../../public/assets/images/pro_logo.png';
import Image from "next/image";
import { Facebook, FacebookIcon, InstagramIcon, LinkedinIcon, LucideFacebook } from "lucide-react";

const AppFooter = () => {
	const data = new Date()
	const establish = data.getFullYear()
  return (
    <footer className="px-4 divide-y font-roboto bg-gray-100 text-black">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
	<div className="flex justify-start items-center">
      <Link className="flex h-[60px] w-[150px] justify-start items-center" href="/">
        <Image width={400} height={200} src={logo} alt="logo" className="w-full h-full"/>
      </Link>
    </div>
		<div className="grid grid-cols-2 text-base gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
			<div className="space-y-3">
				<h3 className="tracking-tighter font-bold uppercase text-black">Services</h3>
				<ul className="space-y-1 underline-none text-black list-none">
					<li className="list-none">
						<Link className="text-black no-underline" href="/all-services#Oven Services">Oven Services</Link>
					</li>
					<li>
						<Link className="text-black no-underline" href="/all-services#Water Purifier Services">Water Purifier Services</Link>
					</li>
					<li>
						<Link className="text-black no-underline"  href="/all-services#Generator Services">Generator Services</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-tighter font-bold uppercase text-black">Company</h3>
				<ul className="space-y-1 list-none">
					<li>
						<Link className="text-black no-underline" href="/">Privacy</Link>
					</li>
					<li>
						<Link className="text-black no-underline" href="/">Terms of Service</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase font-bold text-black">Social media</div>
				<div className="flex justify-start space-x-3">
					<Link className="text-black text-3xl no-underline" href="https://web.facebook.com/nurmohammad54800" title="Facebook" >
						<LucideFacebook size={50}/>
					</Link>
					<Link className="text-black text-3xl no-underline" href="https://www.linkedin.com/in/programmer-nur/" title="Linkedine" >
						<LinkedinIcon />
					</Link>
					<Link className="text-black text-3xl no-underline" href="https://www.instagram.com/noor__5480/" title="Instagram" >
						<InstagramIcon />
					</Link>
				</div>
			</div>
		</div>
	</div>
	<div className="py-3 text-sm text-center text-gray-600">© {establish} ProTechFixer. All rights reserved.</div>
</footer>
  );
};

export default AppFooter;
