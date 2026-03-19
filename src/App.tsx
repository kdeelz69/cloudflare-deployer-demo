import { Rocket, GitBranch, Cloud, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="sparkle-container mb-8">
              <Sparkles className="w-16 h-16 mx-auto text-yellow-400 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Congratulations on Your Cloudflare Deployer
            </h1>

            <p className="text-2xl md:text-3xl mb-8 text-purple-200 animate-fade-in-delay-1">
              A milestone project by <span className="font-bold text-cyan-300">You</span>
            </p>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2 leading-relaxed">
              This project marks your first deployment automation workflow using GitHub Actions
              and Cloudflare Pages. A significant step in your journey as a developer, automating
              the build and deployment process for seamless continuous delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
              <button className="btn-primary group">
                <Rocket className="w-5 h-5 inline-block mr-2 group-hover:translate-x-1 transition-transform" />
                View Project
              </button>
              <button className="btn-secondary group">
                <Cloud className="w-5 h-5 inline-block mr-2 group-hover:scale-110 transition-transform" />
                Live Demo
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects Highlights
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card card-hover group">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">First Deployer</h3>
                <p className="text-gray-300 leading-relaxed">
                  Successfully built and deployed my first automated deployment pipeline,
                  marking a major milestone in development automation.
                </p>
              </div>

              <div className="glass-card card-hover group">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GitBranch className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">GitHub Actions Automation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Leveraging GitHub Actions to automate the entire CI/CD workflow,
                  ensuring code quality and seamless deployments.
                </p>
              </div>

              <div className="glass-card card-hover group">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cloud className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Live on Cloudflare Pages</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deployed on Cloudflare's global edge network, ensuring lightning-fast
                  performance and reliability for users worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-large text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Every Great Journey Starts with a Single Step
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                This deployment represents more than just code going live. It's about
                <span className="text-cyan-300 font-semibold"> growth</span>,
                <span className="text-purple-300 font-semibold"> consistency</span>, and the commitment to
                <span className="text-pink-300 font-semibold"> building real projects</span>.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Each project builds on the last, each deployment teaches something new.
                Here's to the first of many successful automations and the continuous journey
                of learning, building, and shipping.
              </p>
            </div>
          </div>
        </section>

        <footer className="px-6 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"></div>
            <p className="text-gray-400 text-lg">
              Built with by <span className="text-cyan-300 font-semibold">Me Kdeelz</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              React • Tailwind CSS • Cloudflare Pages
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
