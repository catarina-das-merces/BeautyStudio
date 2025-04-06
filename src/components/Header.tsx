"use client";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header
			className="flex items-center justify-between p-4 bg-gray-200 text-black font-serif border-b-black border-b-2 w-full pb-4"
			style={{ backgroundColor: "rgb(228, 228, 228)" }}
		>
			<div>
				<ul className=" space-x-4 font-bold hidden md:flex">
					<li>
						<Link href="/">HOME</Link>
					</li>
					<li>
						<Link href="/Portefolio">PORTEFOLIO</Link>
					</li>
					<li>
						<Link href="/Marcacoes">MARCAÇÕES</Link>
					</li>
					<li>
						<Link href="/Contactos">CONTACTOS</Link>
					</li>
				</ul>

				{/* Menu Hamburger for mobile */}
				<div className="md:hidden flex items-center" onClick={toggleMenu}>
					<button className="focus:outline-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-menu"
						>
							<path d="M3 12h18M3 6h18M3 18h18"></path>
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`${
					isMenuOpen ? "block" : "hidden"
				} absolute top-16 left-0 w-full bg-gray-100 text-black p-4 md:hidden z-50`}
			>
				<ul className="flex flex-col space-y-4">
					<li>
						<Link href="/" onClick={toggleMenu}>
							HOME
						</Link>
					</li>
					<li>
						<Link href="/Portefolio" onClick={toggleMenu}>
							PORTEFOLIO
						</Link>
					</li>
					<li>
						<Link href="/Marcacoes" onClick={toggleMenu}>
							MARCAÇÕES
						</Link>
					</li>
					<li>
						<Link href="/Contactos" onClick={toggleMenu}>
							CONTACTOS
						</Link>
					</li>
				</ul>
			</div>

			<div>
				<Link href="/admin">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
						/>
					</svg>
				</Link>
			</div>
		</header>
	);
};
