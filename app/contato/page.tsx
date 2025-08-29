export const dynamic = 'force-static';

export default function ContatoPage() {
  const address = 'R. José Maria Castelo Prado, 13 - Ayrosa, Osasco - SP, 06290-130';
  const mapSrc = 'https://www.google.com/maps?q=' + encodeURIComponent(address) + '&output=embed';
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Contato</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <p className="font-medium">Polus Eletrotécnica</p>
          <p>{address}</p>
          <p>Email: <a className="underline" href="mailto:poluseletrotecnica@hotmail.com">poluseletrotecnica@hotmail.com</a></p>
          <p>WhatsApp: <a className="underline" href="https://wa.me/551135992935">+55 (11) 3599-2935</a></p>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            <p className="font-medium">Atendimento</p>
            <p>Seg–Sex: 08:00–12:00 · 13:00–17:00</p>
            <p>Sábado/Domingo: Fechado</p>
          </div>
        </div>
        <div className="rounded overflow-hidden border border-black/5 dark:border-white/10">
          <iframe title="Mapa" src={mapSrc} className="w-full h-[360px]" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
