/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de segurança HTTP
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN' // Impede que o site seja aberto em iframes de outros domínios (Clickjacking)
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff' // Impede que o navegador "adivinhe" tipos de arquivos (MIME sniffing)
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
