import { Button } from "@/components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Header />
			<section className="relative w-full h-[600px]">
				{/* Background */}
				<div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-60"></div>

				{/* Imagem sobreposta */}
				<div className="relative flex justify-center w-max-700">
					<Image
						src="/cover.jpeg"
						alt="Claudia Lemos"
						width={450}
						height={350}
						className="mt-20 rounded-lg shadow-lg"
					/>
					{/* Logo sobreposto */}
					<Image
						src="/logo.png"
						alt="Logo Claudia Lemos"
						width={300}
						height={500}
						className="absolute top-7"
					/>
				</div>
			</section>

			<section className="flex flex-col items-center justify-center text-center min-h-[500px] w-full">
				<h2 className="font-[playfair] text-2l font-extralight mt-30">
					MAKEUP | BEAUTY{" "}
				</h2>
				<h1 className="font-[baskerville] mt-4 text-5xl">
					Comunicadora que se encontrou na beleza
				</h1>
				<p className="text-lg text-black max-w-3xl mt-4">
					Com mais de 7 anos de experiência no setor da cosmética, desenvolvi um
					olhar apurado para realçar a individualidade de cada cliente. Para
					além de maquilhadora profissional (MUA), sou especialista em lifting
					de pestanas (Lash Tech) e Brow Lamination (Brow Designer),
					proporcionando assim um serviço completo e diversificado para melhor
					realçar a sua beleza natural. O meu lema como profissional?
					Transformar beleza em arte!
				</p>
			</section>

			<section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 bg-white pb-7">
				{/* Lado Esquerdo: Texto */}
				<div className="md:w-1/2 text-left md:text-right max-w-md">
					<p className="text-3xl font-[Playfair Display] italic leading-snug text-black">
						Descubra o charme e a vivacidade dos serviços de beleza existentes,
						onde cada visita é uma nova experiência para explorar tratamentos
						incríveis e inovadores. Deixe-se envolver pelos serviços
						cuidadosamente selecionados e sinta a magia de encontrar o serviço
						perfeito para si que realçará a sua beleza única.
					</p>
				</div>

				{/* Lado Direito: Imagens Sobrepostas */}
				<div className="md:w-1/2 flex justify-center relative mt-6 md:mt-0">
					{/* Imagem de fundo (Computer) */}
					<div className="relative">
						<Image
							src="/computer.jpeg"
							alt="Imagem Exemplo"
							width={400}
							height={300}
							className="rounded-lg shadow-lg border-4 border-white"
						/>
						{/* Borda no canto superior direito */}
						<div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-black"></div>
					</div>

					{/* Imagem da frente (Phone) */}
					<div className="absolute bottom-0 right-0 translate-x-10 translate-y-10 z-10">
						<Image
							src="/phone.jpeg"
							alt="Imagem secção about"
							width={300}
							height={200}
							className="rounded-lg shadow-xl border-4 border-white"
						/>
						{/* Borda no canto inferior esquerdo */}
						<div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-black"></div>
					</div>
				</div>
			</section>

			<section className="px-6 md:px-20 py-12 mt-15">
				{/* Título da Secção */}
				<div className="text-center mb-10">
					<h3 className="text-3xl font-semibold">Serviços</h3>
				</div>

				{/* Grid de Serviços */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Serviço 1 - Brow Lamination */}
					<div className="flex flex-col items-center text-center">
						<Image
							src="/brows.jpeg"
							alt="Brow Lamination"
							width={300}
							height={200}
							className="rounded-lg shadow-lg"
						/>
						<p className="mt-4 font-semibold">Brow Lamination - 30€</p>
						<p className="mt-2 text-gray-700">
							Se deseja sobrancelhas mais volumosas, definidas e alinhadas, este
							procedimento é perfeito para você.
						</p>
						<Button />
					</div>

					{/* Serviço 2 - Maquilhagem */}
					<div className="flex flex-col items-center text-center">
						<Image
							src="/makeup.JPG"
							alt="Maquilhagem"
							width={300}
							height={200}
							className="rounded-lg shadow-lg"
						/>
						<p className="mt-4 font-semibold">Maquilhagem - a partir de 30€</p>
						<p className="mt-2 text-gray-700">
							Seja para um evento especial ou para o dia a dia, a maquilhagem é
							adaptada às suas preferências.
						</p>
						<Button />
					</div>

					{/* Serviço 3 - Lash Lifting */}
					<div className="flex flex-col items-center text-center">
						<Image
							src="/lashes.jpeg"
							alt="Lash Lifting"
							width={300}
							height={200}
							className="rounded-lg shadow-lg"
						/>
						<p className="mt-4 font-semibold">Lash Lifting - 30€</p>
						<p className="mt-2 text-gray-700">
							Realce o seu olhar com um tratamento que curva e define as suas
							pestanas naturalmente.
						</p>
						<Button />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
