
import React, { useState } from "react";
import { ButtonCustom } from "./ui/button-custom";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Por favor ingresa tu correo electrónico");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Newsletter signup:", email);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-white p-8 rounded-lg max-w-md shadow-md w-full">
      <h3 className="text-[rgba(3,24,57,1)] text-2xl font-bold mb-4">
        Suscríbete a nuestro boletín
      </h3>
      <p className="text-[rgba(30,30,30,1)] text-base mb-6">
        Recibe las últimas noticias, actualizaciones y ofertas directamente en tu bandeja de entrada.
      </p>

      {submitSuccess ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-md">
          ¡Gracias por suscribirte a nuestro boletín!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(0,194,177,1)] focus:border-transparent"
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>

          <ButtonCustom
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Procesando..." : "Suscribirme"}
          </ButtonCustom>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
