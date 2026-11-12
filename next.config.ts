import type { NextConfig } from "next";

// The old domain still points at this project. Send it permanently to the
// new one so Google indexes a single site instead of two copies.
const OLD_HOSTS = ["fremlosmedia.cz", "www.fremlosmedia.cz"];

const nextConfig: NextConfig = {
  async redirects() {
    return OLD_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.kukinmedia.cz/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
