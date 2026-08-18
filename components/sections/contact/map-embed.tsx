import { company } from "@/data/company";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <iframe
        src={company.mapEmbedUrl}
        title={`Map showing ${company.name} location in Katpadi, Udupi`}
        className="h-72 w-full sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
