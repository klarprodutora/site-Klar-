// Briefing enviado somente quando o visitante confirmar o envio no WhatsApp.
const leadForm = document.getElementById('lead-form');
if (leadForm) leadForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!leadForm.reportValidity()) return;
  const data = new FormData(leadForm);
  const fields = [['Tipo de contato','perfil'],['Nome','nome'],['Empresa','empresa'],['Cargo','cargo'],['Setor','setor'],['Tipo de projeto','tipo'],['Investimento previsto','investimento'],['Prazo','prazo'],['E-mail','email'],['Objetivo','objetivo']];
  const message = 'Olá, KLAR! Gostaria de apresentar um projeto audiovisual.\n\n' + fields.map(([label,key]) => label + ': ' + String(data.get(key) || '').trim()).join('\n');
  const url = 'https://wa.me/5531989155459?text=' + encodeURIComponent(message);
  const opened = window.open(url, '_blank', 'noopener,noreferrer');
  if (!opened) window.location.href = url;
  document.getElementById('form-status').textContent = 'WhatsApp aberto com o briefing. Confira os dados e envie a mensagem para concluir.';
});
