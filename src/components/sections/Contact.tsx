"use client";

import { useLang } from "@/context/LangContext";
import { Mail, Linkedin, CalendarDays, Building2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { t } = useLang();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      need: formData.get("need"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(
        t(
          "No se pudo enviar el mensaje. Intenta de nuevo o escribe a contact@sebtech.dev.",
          "Could not send the message. Please try again or email contact@sebtech.dev."
        )
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-300">
              {t("Contacto", "Contact")}
            </div>

            <h2 className="mb-6 max-w-xl text-4xl font-black tracking-tight text-white md:text-5xl">
              {t(
                "Conversemos sobre tu operación o tu próximo sistema.",
                "Let’s talk about your operation or your next system."
              )}
            </h2>

            <p className="mb-10 max-w-xl text-lg leading-8 text-slate-400">
              {t(
                "Si estás evaluando una plataforma, automatizando procesos o integrando sistemas existentes, podemos revisar tu caso y definir el mejor siguiente paso.",
                "If you are evaluating a platform, automating processes or integrating existing systems, we can review your case and define the best next step."
              )}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <Building2 size={18} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Qué tipo de proyectos", "What kind of projects")}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {t(
                    "Plataformas internas, automatización operativa, marketplaces, trazabilidad e integraciones entre sistemas.",
                    "Internal platforms, operational automation, marketplaces, traceability and system integrations."
                  )}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <CalendarDays size={18} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Siguiente paso", "Next step")}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {t(
                    "Una conversación inicial para entender contexto, alcance y prioridades antes de proponer una solución.",
                    "An initial conversation to understand context, scope and priorities before proposing a solution."
                  )}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              <a
                href="mailto:contact@sebtech.dev"
                className="group flex items-center gap-4 text-slate-300 transition-all hover:text-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {t("Correo", "Email")}
                  </p>
                  <p className="text-sm font-medium">contact@sebtech.dev</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sebastian-peralta-249781178"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-slate-300 transition-all hover:text-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    LinkedIn
                  </p>
                  <p className="text-sm font-medium">
                    {t(
                      "Perfil profesional y contacto",
                      "Professional profile and contact"
                    )}
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-4 text-slate-300 transition-all hover:text-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                  <CalendarDays size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {t("Reunión", "Meeting")}
                  </p>
                  <p className="text-sm font-medium">
                    {t(
                      "Agendar una llamada estratégica",
                      "Book a strategy call"
                    )}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">
                {t(
                  "Cuéntanos qué estás construyendo",
                  "Tell us what you are building"
                )}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {t(
                  "Comparte una idea general del proyecto, el problema que quieres resolver o el sistema que necesitas mejorar.",
                  "Share a general idea of the project, the problem you want to solve or the system you need to improve."
                )}
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Nombre", "Name")}
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder={t("Tu nombre o empresa", "Your name or company")}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Correo electrónico", "Email")}
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Tipo de necesidad", "Type of need")}
                </label>
                <input
                  name="need"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder={t(
                    "Plataforma, automatización, integración, MVP, mejora de sistema...",
                    "Platform, automation, integration, MVP, system improvement..."
                  )}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {t("Mensaje", "Message")}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder={t(
                    "Cuéntanos brevemente qué necesitas, en qué etapa estás y si tienes una fecha objetivo.",
                    "Briefly tell us what you need, what stage you are in and whether you have a target date."
                  )}
                />
              </div>

              <button
                className="h-12 w-full rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? t("Enviando...", "Sending...")
                  : t("Enviar consulta", "Send inquiry")}
              </button>

              {sent && (
                <p className="text-sm text-emerald-400">
                  {t(
                    "Consulta enviada correctamente. Te responderemos en contact@sebtech.dev.",
                    "Inquiry sent successfully. We will reply from contact@sebtech.dev."
                  )}
                </p>
              )}

              {error && (
                <p className="text-sm text-red-400">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}