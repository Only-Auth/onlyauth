function CardLayout({ children }) {
  return (
    <div className="bg-white w-full md:max-w-md max-w-sm px-4 py-6 rounded-2xl flex flex-col items-center justify-center">
      <div className="text-md my-2">
        Sign in with <span className="font-lobster">OnlyAuth</span>
      </div>
      {children}
    </div>
  )
}

export default CardLayout
