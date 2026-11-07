import { ImageResponse } from "next/og";
import { productBySlug, products } from "@/data/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg,#06070a 0%,#11141c 60%,#1a1e29 100%)",
          color: "#eef0f5",
        }}
      >
        <div style={{ fontSize: 28, color: "#5eead4", letterSpacing: 4 }}>PRODUCT · KUSHBATRA.COM</div>
        <div style={{ marginTop: 28, fontSize: 88, fontWeight: 600 }}>{p?.name ?? "Product"}</div>
        <div style={{ marginTop: 24, fontSize: 38, color: "#aab1c2", maxWidth: 980 }}>{p?.tagline}</div>
      </div>
    ),
    size
  );
}
