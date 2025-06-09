'use server'

import pb from '@/lib/pocketbase'
import { sendContactEmail, type ContactFormData } from '@/lib/email'

export async function submitContactForm(formData: FormData) {
    const data: ContactFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
    }

    try {
        // Run PocketBase save and email send in parallel
        await Promise.all([
            pb.collection("kontaktanfragen_allgemein").create({
                name: data.name,
                email: data.email,
                telefon: data.phone,
                nachricht: data.message,
            }),
            sendContactEmail(data)
        ])

        return { success: true }
    } catch (error) {
        console.error('Error submitting contact form:', error)
        return { success: false, error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.' }
    }
} 