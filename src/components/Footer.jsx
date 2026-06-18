export default function Footer() {
  return (
    <footer className="w-full py-8 mt-stack-lg bg-surface dark:bg-surface border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto w-full">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <span className="font-display-typing text-primary-fixed">ReyType</span>
          <span className="text-on-surface-variant text-body-sm">
            © 2024. Precision Typing.
          </span>
        </div>
        <div className="flex gap-6">
          <a
            className="text-body-sm text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Privacy
          </a>
          <a
            className="text-body-sm text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Terms
          </a>
          <a
            className="text-body-sm text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
