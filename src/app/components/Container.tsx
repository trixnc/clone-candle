export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1480px] mx-auto pt-5 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}