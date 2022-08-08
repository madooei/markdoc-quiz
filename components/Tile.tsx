function Dummy() {
  return (
    <div className="h-full w-full">
      <div className="h-full p-6">
        <svg
          className="h-full w-full bg-slate-50 text-slate-300 border-slate-300 border-dashed rounded border-2"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeWidth="2"
            d="M0 0l200 200M0 200L200 0"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Dummy;
