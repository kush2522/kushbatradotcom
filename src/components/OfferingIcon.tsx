import { Bot, Cloud, Coins, Compass, Database, Factory, Wrench } from "lucide-react";
import type { Offering } from "@/data/products";

const map = {
  compass: Compass,
  bot: Bot,
  factory: Factory,
  cloud: Cloud,
  database: Database,
  coins: Coins,
  wrench: Wrench,
};

export default function OfferingIcon({ icon, size = 20 }: { icon: Offering["icon"]; size?: number }) {
  const Icon = map[icon];
  return (
    <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan/15 via-accent-blue/10 to-accent-violet/15 border border-white/10 text-accent-cyan">
      <Icon size={size} />
    </span>
  );
}
