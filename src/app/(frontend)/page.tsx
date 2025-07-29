import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="home">
      <div className="background-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      <div className="content">
        <div className="logo-glow">
          <Image
            alt="Payload Logo"
            height={80}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={80}
            className="logo"
          />
        </div>

        <div className="welcome-section">
          {!user && (
            <>
              <h1 className="gradient-text">Welcome to your new project</h1>
              <p className="subtitle">Start building something amazing with Payload CMS</p>
            </>
          )}
          {user && (
            <>
              <h1 className="gradient-text">Welcome back, {user.email}</h1>
            </>
          )}
        </div>

        <div className="links">
          <a
            className="btn btn-secondary"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="btn-icon">🚀</span>
            Go to Admin Panel
          </a>
          <a
            className="btn btn-secondary"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="btn-icon">📚</span>
            Documentation
          </a>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Built with modern technologies for optimal performance</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Customizable</h3>
            <p>Tailor your CMS to match your exact requirements</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Yapping</h3>
            <p>Enterprise-grade security built into every feature</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Ready to customize? Start by editing</p>
        <a className="codeLink" href={fileURL}>
          <code>app/(frontend)/page.tsx</code>
        </a>
      </div>
    </div>
  )
}
