import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const mailchimp = require("@mailchimp/mailchimp_marketing");

// Configurazione Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER || "us5", 
});

// Schema di validazione per l'email
const newsletterSchema = z.object({
  email: z.string().email('Email non valida'),
  source: z.string().optional(),
  utm: z.object({
    source: z.string().optional(),
    medium: z.string().optional(),
    campaign: z.string().optional(),
  }).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source, utm } = newsletterSchema.parse(body)

    const listId = process.env.MAILCHIMP_AUDIENCE_ID

    if (!listId) {
      throw new Error('MAILCHIMP_AUDIENCE_ID non configurato')
    }

    // Aggiungi l'email alla lista Mailchimp
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        SOURCE: source || 'website',
        UTM_SOURCE: utm?.source || '',
        UTM_MEDIUM: utm?.medium || '',
        UTM_CAMPAIGN: utm?.campaign || '',
      },
      tags: [
        source ? `source-${source}` : 'source-website'
      ]
    })

    console.log('Iscrizione newsletter riuscita:', {
      email,
      source,
      mailchimp_id: response.id,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Iscrizione alla newsletter completata con successo!' 
    })

  } catch (error: any) {
    console.error('Errore iscrizione newsletter:', error)

    // Gestione errori specifici di Mailchimp
    if (error.response?.body?.title === 'Member Exists') {
      return NextResponse.json(
        { 
          error: 'Questo indirizzo email è già iscritto alla newsletter',
          code: 'ALREADY_SUBSCRIBED'
        },
        { status: 400 }
      )
    }

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dati non validi', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Errore durante l\'iscrizione. Riprova più tardi.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Metodo non consentito' },
    { status: 405 }
  )
}
