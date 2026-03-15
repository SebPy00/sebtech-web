import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, need, message, company_website } = body;

    if (company_website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeNeed = escapeHtml(need || "-");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    await resend.emails.send({
      from: "SebTech <contact@sebtech.dev>",
      to: process.env.LEADS_NOTIFICATION_EMAIL || "contact@sebtech.dev",
      replyTo: email,
      subject: `Nuevo lead desde sebtech.dev — ${safeName}`,
      html: `
        <h2>Nuevo contacto desde sebtech.dev</h2>

        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Tipo de necesidad:</strong> ${safeNeed}</p>

        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    await resend.emails.send({
      from: "SebTech <contact@sebtech.dev>",
      to: email,
      subject: "Recibimos tu consulta — SebTech",
      html: `
        <p>Hola ${safeName},</p>

        <p>Gracias por escribir a <strong>SebTech</strong>.</p>

        <p>Recibimos tu mensaje y lo vamos a revisar.  
        Si el proyecto encaja con nuestro enfoque, te responderemos para coordinar una conversación inicial.</p>

        <p>— Sebastián<br/>SebTech</p>
      `,
    });

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}