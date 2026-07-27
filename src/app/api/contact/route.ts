import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, whatsapp, message } = data;

    if (!name || !email || !whatsapp || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const pushoverUserKey = process.env.PUSHOVER_USER_KEY;
    const pushoverAppToken = process.env.PUSHOVER_APP_TOKEN;
    const toEmail = process.env.CONTACT_EMAIL || 'seu@email.com';

    // 1. Enviar e-mail via Resend
    let emailSuccess = false;
    if (resendApiKey) {
      const emailHtml = `
        <h2>Nova mensagem do site H'ART</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <br/>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `;

      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: 'H\'ART Site <onboarding@resend.dev>', // Atualize com seu domínio verificado
          to: [toEmail],
          subject: `Novo Contato: ${name}`,
          html: emailHtml
        })
      });

      if (emailResponse.ok) {
        emailSuccess = true;
      } else {
        console.error('Erro Resend:', await emailResponse.text());
      }
    }

    // 2. Enviar notificação push via Pushover
    let pushSuccess = false;
    if (pushoverUserKey && pushoverAppToken) {
      const pushMessage = `Novo Contato Site\n\nNome: ${name}\nWhats: ${whatsapp}\nEmail: ${email}\n\nMensagem: ${message}`;
      
      const pushResponse = await fetch('https://api.pushover.net/1/messages.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: pushoverAppToken,
          user: pushoverUserKey,
          message: pushMessage,
          title: "Lead H'ART",
          priority: 0
        })
      });

      if (pushResponse.ok) {
        pushSuccess = true;
      } else {
        console.error('Erro Pushover:', await pushResponse.text());
      }
    }

    // Retorna sucesso mesmo se não tiver chaves configuradas (para teste local do UI)
    // No mundo real, você validaria se pelo menos um funcionou
    if (!resendApiKey && !pushoverUserKey) {
       console.log('Modo de Teste (Sem chaves API):', data);
    } else if (!emailSuccess && !pushSuccess) {
      return NextResponse.json({ error: 'Falha ao enviar mensagem.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}
