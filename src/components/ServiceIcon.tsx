import { Code2, Compass, Layers, ShieldCheck, Users } from "lucide-react";
import type { Service } from "@/data/consulting";

const map = {
  code: Code2,
  compass: Compass,
  layers: Layers,
  shield: ShieldCheck,
  users: Users,
};

export default function ServiceIcon({
  icon,
  size = 20,
}: {
  icon: Service["icon"];
  size?: number;
}) {
  const Icon = map[icon];
  return (
    <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan/15 via-accent-blue/10 to-accent-violet/15 border border-white/10 text-accent-cyan">
      <Icon size={size} />
    </span>
  );
}
