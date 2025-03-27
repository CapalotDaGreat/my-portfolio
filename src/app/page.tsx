import Image from "next/image";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-warm-light text-warm-dark font-[var(--font-geist-sans)]">

        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-center sm:text-left">

          <h1 className="text-4xl sm:text-5xl font-bold text-accent-foreground">
            Cadima-Mukasa Lusiola
          </h1>
          <p className="text-lg sm:text-xl font-medium text-foreground mt-4">
            IT Student | Web Developer | Problem Solver
          </p>

          <p className="text-base sm:text-lg font-normal text-foreground mt-6 max-w-[800px] mx-auto">
            Welcome to my portfolio. I am passionate about technology and building scalable, user-friendly applications. I specialize in frontend development and have experience with modern frameworks like Next.js, React, and more.
          </p>

          <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="mailto:cadima.lusiola@student.ksh.ch"
                target="_blank"
                rel="noopener noreferrer"
            >
              Contact Me
            </a>
            <a
                className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                href="https://github.com/CapalotDaGreat"
                target="_blank"
                rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </main>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-12">
          <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/CapalotDaGreat"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                aria-hidden
                src="/github.svg"
                alt="GitHub icon"
                width={16}
                height={16}
            />
            GitHub
          </a>
        </footer>
      </div>
  );
}
