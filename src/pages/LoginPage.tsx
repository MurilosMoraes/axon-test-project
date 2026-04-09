import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left panel - decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
        {/* Abstract shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute top-1/3 right-0 size-80 rounded-full bg-primary-400/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 size-72 rounded-full bg-primary-300/10 blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-xl bg-white/15 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">Axon</span>
            </div>
          </div>

          <div className="space-y-6 max-w-md">
            <h1 className="text-4xl font-bold leading-tight tracking-tight">
              Build something
              <br />
              <span className="text-primary-200">extraordinary</span>
            </h1>
            <p className="text-lg text-primary-100/80 leading-relaxed">
              The platform that empowers your team to ship faster, collaborate
              better, and scale without limits.
            </p>

            {/* Testimonial */}
            <div className="mt-8 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
              <p className="text-sm text-primary-100 italic leading-relaxed">
                &ldquo;Axon transformed how our team works. We shipped 3x faster
                in the first month alone.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="size-9 rounded-full bg-primary-300/30 flex items-center justify-center text-sm font-semibold">
                  SC
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah Chen</p>
                  <p className="text-xs text-primary-200/70">
                    CTO at TechFlow
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-primary-200/50">
            &copy; 2026 Axon. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right panel - login form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-slate-100/80">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-10">
            <div className="flex items-center justify-center size-10 rounded-xl bg-primary-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Axon
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Welcome back
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Enter your credentials to access your account
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  )
}
