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
      throw new Error('MAILCHIMP_AUDIENCE_ID not configured')
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

    console.log('Newsletter subscription successful:', {
      email,
      source,
      mailchimp_id: response.id,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ 
      success: true, 
      status: 'subscribed',
      already: false,
      message: 'Newsletter subscription completed successfully!' 
    })

  } catch (error: any) {
    console.error('Newsletter subscription error:', error)

    // Handle specific Mailchimp errors
    if (error.response?.body?.title === 'Member Exists') {
      return NextResponse.json(
        { 
          success: true,
          status: 'subscribed',
          already: true,
          message: 'This email address is already subscribed to our newsletter'
        },
        { status: 200 }
      )
    }

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Invalid data', 
          code: 'VALIDATION_ERROR',
          details: error.errors 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false,
        error: 'Error during subscription. Please try again later.',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
