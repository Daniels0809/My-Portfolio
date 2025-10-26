"use client";

import React from "react";

const Contact = () => {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage(null);

    try {
      const form = e.currentTarget;
      const dataObj = Object.fromEntries(new FormData(form) as any);

      const payload = {
        name: dataObj.name,
        email: dataObj.email,
        message: dataObj.message,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        console.error("Error response:", err);
        throw new Error(err?.message || "Server error");
      }

      const resJson = await res.json();
      setStatus("success");
      setMessage(`Mensaje enviado (id: ${resJson.createId ?? "—"})`);

      form.reset();
      
    } catch (err: any) {
      console.error("Submit error:", err);
      setStatus("error");
      setMessage(err?.message ?? "Ocurrió un error al enviar");
    } finally {

      setTimeout(() => {
        if (status !== "submitting") setStatus("idle");
      }, 3000);
    }
  }

  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-70 sm:p-20">
        <div className="container1">
          <div className="titleDashboard">
            <h1 className="span1">CONTACT ME</h1>
          </div>
          <div className="text-gray-400">
            <p>Ready to create something extraordinary together?</p>
          </div>
        </div>

        <div className="flex justify-center items-center py-10 px-4">
          <form
            className="w-full max-w-lg bg-[#0f0f12] border border-yellow-600/30 rounded-2xl p-8 shadow-xl text-gray-200"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
              SEND ME A MESSAGE
            </h2>

            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name" // <<--- importante: "name" en minúscula
                placeholder="Your Name"
                required
                className="w-full p-3 bg-[#1a1a1d] border border-yellow-600/30 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="...@email.com"
                required
                className="w-full p-3 bg-[#1a1a1d] border border-yellow-600/30 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full p-3 bg-[#1a1a1d] border border-yellow-600/30 rounded-lg focus:outline-none focus:border-yellow-400 resize-none transition-colors"
              ></textarea>
            </div>

            {/* Estado (mensaje) */}
            {message && (
              <div
                className={`mb-4 text-sm font-medium ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-yellow-300"
                }`}
              >
                {message}
              </div>
            )}

            {/* Botón */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-black font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Enviando..." : "Send Message!"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
