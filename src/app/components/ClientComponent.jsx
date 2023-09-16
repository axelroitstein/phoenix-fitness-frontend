"use client";
import React from "react"

export default function ClientComponent() {
  const handlePaymentClick = async () => {
    try {
      const response = await fetch("/mercadopago", { method: "POST" });
      const data = await response.json()
      window.location.href = data.init_point;
    } catch (error) {
      console.error("Error al iniciar el pago:", error);
    }
  }

  return <button onClick={handlePaymentClick}>Click Aquí</button>;
}