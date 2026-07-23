export interface FormDetails {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
  deliveryDate?: string;
  location?: string;
}

export const sendToWhatsApp = (data: FormDetails, refNumber: string) => {
  // Format WhatsApp message with emojis and clean line breaks
  const rawMessage = 
`🏗️ *GNA LOGISTICS - FREIGHT QUOTE REQUEST*
----------------------------------------
*Reference Number:* ${refNumber}

👤 *Client Name:* ${data.name}
🏢 *Company:* ${data.company}
📧 *Email:* ${data.email}
📱 *Phone / WhatsApp:* ${data.phone}
🚚 *Service Requested:* ${data.service}
${data.deliveryDate ? `📅 *Target Delivery Date:* ${data.deliveryDate}\n` : ''}📍 *Service Area:* ${data.location || 'Edmonton & Greater Alberta'}

📋 *Project Details & Cargo Specs:*
${data.projectDetails || 'No additional details specified.'}
----------------------------------------
⏱️ *Dispatch Status:* Received by Edmonton Operations Coordinator
📞 *GNA Dispatch Hotline:* (780) 555-0199`;

  // Sanitize phone number (keep digits only)
  const cleanPhone = data.phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(rawMessage);

  // If a valid phone number was provided, target user's number; otherwise fallback to wa.me with text
  const waUrl = cleanPhone && cleanPhone.length >= 10
    ? `https://wa.me/${cleanPhone}?text=${encodedText}`
    : `https://wa.me/?text=${encodedText}`;

  // Open WhatsApp Web or WhatsApp App in a new window/tab
  window.open(waUrl, '_blank');
  return waUrl;
};
