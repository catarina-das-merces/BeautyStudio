"use client";
import { Header } from "../../components/Header";
import { useState } from "react";
import { submitAppointment } from "@/Services/appoitmentsServices";
import toast from "react-hot-toast";

export default function Marcacoes() {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState("");
	const [isSuccess, setIsSuccess] = useState("");
	const [appointment, setAppointment] = useState({
		customerName: "",
		email: "",
		phone: "",
		date: "",
		time: "",
		service: "Selecione um serviço",
		artist: "Cláudia Lemos",
		notes: "",
	});

	const handleAppoitmentSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		setIsLoading(true);
		setIsError("");
		console.log(appointment);
		try {
			await submitAppointment(appointment);
			toast.success("Agendamento enviado com sucesso!");
			setAppointment({
				customerName: "",
				email: "",
				phone: "",
				date: "",
				time: "",
				service: "Selecione um serviço",
				artist: "Cláudia Lemos",
				notes: "",
			});
		} catch (error) {
			console.error("Error submitting appointment:", error);
			toast.error("Erro ao enviar agendamento. Tenta novamente.");
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<p>carregando</p>
			</div>
		);
	}

	return (
		<>
			<Header />
			{/* <section className="bg-[#646464] text-white min-h-screen h-[200px]py-12 font-[serif]">
				<div className="relative w-screen mt-0">
					<Image
						src="/bookingphoto.jpeg"
						alt="Elegant model"
						width={1920}
						height={600}
						className="w-screen h-auto object-cover"
					/>
					<h1 className="absolute top-1/2 right-16 transform -translate-y-1/2 text-5xl md:text-7xl font-light uppercase font-[baskerville]">
						<span className="text-[#E4D3C8]">Faz a tua</span>
						<br />
						<span className="font-bold text-white">Marcação</span>
					</h1>
				</div>
			</section> */}

			<section>
				<div className="mt-16 text-black">
					<h2 className="text-4xl font-light text-center">
						Faça o seu agendamento!
					</h2>
					<p className="text-center text-sm max-w-lg mx-auto mt-2">
						Descrição breve sobre os serviços e como entrar em contacto.
					</p>
					<form
						onSubmit={handleAppoitmentSubmit}
						className="max-w-2xl mx-auto mt-8 mb-10 space-y-6"
					>
						<input
							type="text"
							placeholder="Nome"
							className="w-full p-3 border rounded-md"
							value={appointment.customerName}
							onChange={(e) =>
								setAppointment({
									...appointment,
									customerName: e.target.value,
								})
							}
							required
						/>
						<input
							type="email"
							placeholder="Email"
							className="w-full p-3 border rounded-md"
							value={appointment.email}
							onChange={(e) =>
								setAppointment({
									...appointment,
									email: e.target.value,
								})
							}
							required
						/>
						<input
							type="phone"
							placeholder="Número de Telemóvel"
							className="w-full p-3 border rounded-md"
							value={appointment.phone}
							onChange={(e) =>
								setAppointment({
									...appointment,
									phone: e.target.value,
								})
							}
							required
						/>
						<input
							type="date"
							className="w-full p-3 border rounded-md"
							value={appointment.date}
							onChange={(e) =>
								setAppointment({
									...appointment,
									date: e.target.value,
								})
							}
							required
						/>
						<input
							type="time"
							className="w-full p-3 border rounded-md"
							value={appointment.time}
							onChange={(e) =>
								setAppointment({
									...appointment,
									time: e.target.value,
								})
							}
							required
						/>
						<select
							className="w-full p-3 border rounded-md"
							value={appointment.service}
							onChange={(e) =>
								setAppointment({ ...appointment, service: e.target.value })
							}
							required
						>
							<option value="">Selecione um serviço</option>
							<option value="maquilhagem-noivas">Maquilhagem - Noivas</option>
							<option value="maquilhagem-cut-crease">
								Maquilhagem - Cut Crease
							</option>
							<option value="maquilhagem-social-dia-a-dia">
								Maquilhagem - Social Dia a Dia
							</option>
							<option value="brow-lamination">Brow Lamination</option>
							<option value="lash-lifting">Lash Lifting</option>
						</select>
						<textarea
							placeholder="Notas Adicionais"
							className="w-full p-3 border rounded-md h-32"
							value={appointment.notes}
							onChange={(e) =>
								setAppointment({
									...appointment,
									notes: e.target.value,
								})
							}
						></textarea>
						<button className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
							Enviar
						</button>
					</form>
				</div>
			</section>
		</>
	);
}
