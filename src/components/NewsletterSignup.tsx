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
    <div className="bg-[rgba(239,244,252,1)] p-6 rounded-lg max-w-md mx-auto mt-8">
      <h3 className="text-[rgba(3,24,57,1)] text-xl font-bold mb-2">
        Mantente informado
      </h3>
      <p className="text-[rgba(30,30,30,1)] text-sm mb-4">
        Suscríbete a nuestro boletín para recibir las últimas noticias y
        actualizaciones.
      </p>

      {submitSuccess ? (
        <div className="bg-green-100 text-green-700 p-3 rounded-md">
          ¡Gracias por suscribirte a nuestro boletín!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(0,194,177,1)] focus:border-transparent"
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
