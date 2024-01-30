const currentYear = new Date().getUTCFullYear();

export function Footer() {
  return (
    <footer>
      <div className="py-7 w-full flex justify-center items-center text-gray-50  bg-black/90">
        <div className="flex flex-col items-center gap-1">
          <h6 className="text-xl">
            Copyright {currentYear}&copy;{" "}
            <span>
              <a href={import.meta.env.VITE_WEBSITE_DOMAIN}>
                {import.meta.env.VITE_WEBSITE_NAME}
              </a>
            </span>
          </h6>
          <p>
            Icons by{" "}
            <span className="underline">
              <a href="https://icons8.com/" target="_main">
                Icon8
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
