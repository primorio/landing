import nodemailer from 'nodemailer'

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : undefined,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
})

export interface ContactFormData {
    name: string
    email: string
    phone?: string
    message: string
}

export interface ConciergeFormData {
    firma: string
    ansprechpartner: string
    email: string
    telefon?: string
    anzahl_einheiten: string
}

export async function sendContactEmail(data: ContactFormData) {
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'landing-contact@primorio.de',
        subject: 'Neue Kontaktanfrage von der Website',
        html: `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>E-Mail:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone || 'Nicht angegeben'}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Diese E-Mail wurde automatisch von der Primorio Kontaktseite gesendet.</small></p>
    `,
    }

    await transporter.sendMail(mailOptions)
}

export async function sendConciergeEmail(data: ConciergeFormData) {
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'landing-contact@primorio.de',
        subject: 'Neue Concierge-Anfrage von der Website',
        html: `
      <h2>Neue Concierge-Anfrage</h2>
      <p><strong>Firma/Hausverwaltung:</strong> ${data.firma}</p>
      <p><strong>Ansprechpartner:</strong> ${data.ansprechpartner}</p>
      <p><strong>E-Mail:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.telefon || 'Nicht angegeben'}</p>
      <p><strong>Anzahl verwaltete Einheiten:</strong> ${data.anzahl_einheiten}</p>
      <hr>
      <p><small>Diese E-Mail wurde automatisch von der Primorio Concierge-Seite gesendet.</small></p>
    `,
    }

    await transporter.sendMail(mailOptions)
} 