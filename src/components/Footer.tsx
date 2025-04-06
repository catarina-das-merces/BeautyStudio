"use client";
import React from "react";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="py-4">
			<p className="text-center text-sm text-gray-500">
				&copy; {currentYear} Catarina Ferreira. Todos os direitos reservados.
			</p>
		</footer>
	);
};
