export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();

export async function sendContactMessage(message: ContactMessage): Promise<void> {
  if (!contactEndpoint) {
    throw new Error('O canal de envio ainda não foi configurado. Nenhum dado foi enviado.');
  }

  const response = await fetch(contactEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
    signal: AbortSignal.timeout(15_000),
  });

  if (!response.ok) {
    throw new Error('Não foi possível enviar a mensagem. Tente novamente mais tarde.');
  }

  const result: unknown = await response.json();
  const accepted =
    typeof result === 'object' && result !== null && 'ok' in result && result.ok === true;

  if (!accepted) {
    throw new Error('O serviço não confirmou o recebimento. Tente novamente mais tarde.');
  }
}
