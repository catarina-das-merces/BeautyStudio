import Link from "next/link";

export const Button = () => {
	return (
		<>
			{" "}
			<Link href="/Marcacoes">
				<button className="mt-4 border border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
					Agendar
				</button>
			</Link>
		</>
	);
};
