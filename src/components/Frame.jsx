/** Light section shell with the faint vertical guide rails + corner crosses from the reference. */
export default function Frame({ id, children, className = "", dark = false }) {
  return (
    <section
      id={id}
      className={`relative px-6 ${dark ? "bg-black text-white" : "bg-paper text-black"} ${className}`}
    >
      {!dark && (
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
          <div className="absolute inset-x-0 top-14 h-px bg-black/10" />
          <div className="absolute inset-x-0 bottom-14 h-px bg-black/10" />
          <div className="relative mx-auto h-full max-w-[1120px]">
            <div className="absolute inset-y-0 left-0 w-px bg-black/10" />
            <div className="absolute inset-y-0 right-0 w-px bg-black/10" />
            {[
              "top-14 left-0",
              "top-14 right-0 translate-x-1/2",
              "bottom-14 left-0",
              "bottom-14 right-0 translate-x-1/2",
            ].map((pos) => (
              <span
                key={pos}
                className={`absolute ${pos} -translate-y-1/2 ${pos.includes("left-0") ? "-translate-x-1/2" : ""} text-[15px] leading-none text-black/35`}
              >
                +
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="relative mx-auto max-w-[1120px]">{children}</div>
    </section>
  );
}
