export default function PageTitle({ children }) {
  return (
    <h1 className="font-extrabold leading-9 text-3xl text-gray-900 tracking-tight sm:leading-10 sm:text-4xl md:leading-14 md:text-5xl dark:text-gray-100">
      {children}
    </h1>
  )
}
