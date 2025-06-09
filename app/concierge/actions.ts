'use server'

import pb from '@/lib/pocketbase'
import { sendConciergeEmail, type ConciergeFormData } from '@/lib/email'

export async function submitConciergeForm(formData: FormData) {
    const data: ConciergeFormData = {
        firma: formData.get('firma') as string,
        ansprechpartner: formData.get('ansprechpartner') as string,
        email: formData.get('email') as string,
        telefon: formData.get('telefon') as string,
        anzahl_einheiten: formData.get('anzahl_einheiten') as string,
    }

    try {
        // Run PocketBase save and email send in parallel
        await Promise.all([
            pb.collection("kontaktanfragen_concierge").create({
                firma: data.firma,
                ansprechpartner: data.ansprechpartner,
                email: data.email,
                telefon: data.telefon,
                anzahl_einheiten: data.anzahl_einheiten,
            }),
            sendConciergeEmail(data)
        ])

        return { success: true }
    } catch (error) {
        console.error('Error submitting concierge form:', error)
        return { success: false, error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.' }
    }
} 