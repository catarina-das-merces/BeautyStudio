import { Header } from "../../components/Header";

export default function Portefolio() {
	return (
		<>
			<Header />
			<section className="px-6 md:px-20 py-12">
				<div className="text-center mb-10">
					<h3 className="text-3xl font-base font-[roboto]">
						Noivas | Cut Crease | Maquilhagem Social
					</h3>
					<h5 className="text-1xl font-[roboto]">
						Brow Lamination & Lash Lifting
					</h5>
				</div>

				{/* Grid 3 colunas */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{/* Item 1 */}
					<div className="relative">
						<img
							src="/makeup1.jpeg"
							alt="Projeto 1"
							className="rounded-lg shadow-lg w-full h-full object-cover"
						/>
					</div>

					{/* Item 2 */}
					<div className="relative">
						<img
							src="/makeup2.jpg"
							alt="Projeto 2"
							className="rounded-lg shadow-lg w-full h-full object-cover"
						/>
					</div>

					{/* Item 3 */}
					<div className="relative">
						<img
							src="/makeup3.jpg"
							alt="Projeto 3"
							className="rounded-lg shadow-lg w-full h-full object-cover"
						/>
					</div>

					{/* Item 4 */}
					<div className="relative">
						<img
							src="/makeup4.jpg"
							alt="Projeto 4"
							className="rounded-lg shadow-lg w-full h-full object-cover"
						/>
					</div>

					{/* Item 5 */}
					<div className="relative">
						<img
							src="/makeup5.jpg"
							alt="Projeto 5"
							className="rounded-lg shadow-lg w-full h-full object-cover"
						/>
					</div>

					{/* Item 6 */}
					<div className="relative">
						<img
							src="/makeup6.jpg"
							alt="Projeto 6"
							className="rounded-lg shadow-lg w-full h-full object-cover"
						/>
					</div>

					{/* Item 7 */}
					<div className="relative">
						<img
							src="/makeup7.jpg"
							alt="Projeto 7"
							className="rounded-lg shadow-lg w-full h-full object-cover"
						/>
					</div>

					{/* Item 8 */}
					<div className="relative">
						<img
							src="/makeup8.jpeg"
							alt="Projeto 8"
							className="rounded-lg shadow-lg w-full h-full object-cover"
						/>
					</div>

					{/* Item 9 */}
					<div className="relative">
						<img
							src="/makeup9.jpeg"
							alt="Projeto 9"
							className="rounded-lg shadow-lg w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
