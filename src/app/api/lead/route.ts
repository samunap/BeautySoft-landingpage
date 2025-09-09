import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const leadSchema = z.object({
  email: z.string().email('Invalid email address'),
  role: z.enum(['owner', 'staff', 'customer']).default('owner'),
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
    const data = leadSchema.parse(body)

    // Here you would typically:
    // 1. Save to database
    // 2. Send to CRM (HubSpot, Salesforce, etc.)
    // 3. Send welcome email via Resend/SendGrid
    // 4. Add to marketing automation

    // Example: Send email notification (replace with your email service)
    if (process.env.RESEND_API_KEY) {
      // This is a placeholder for email integration
      console.log('New lead:', {
        email: data.email,
        role: data.role,
        source: data.source,
        utm: data.utm,
        timestamp: new Date().toISOString(),
      })

      // Example Resend integration:
      /*
      await resend.emails.send({
        from: 'leads@beautysoft.app',
        to: ['team@beautysoft.app'],
        subject: 'New Lead from Landing Page',
        html: `
          <h2>New Lead Captured</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Role:</strong> ${data.role}</p>
          <p><strong>Source:</strong> ${data.source}</p>
          <p><strong>UTM:</strong> ${JSON.stringify(data.utm)}</p>
        `,
      })
      */
    }

    // Simulate database save
    console.log('Lead saved:', data)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Lead capture error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
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
