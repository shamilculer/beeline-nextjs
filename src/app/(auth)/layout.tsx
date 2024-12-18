const AuthLayout = ({
     children 
    }: { children: React.ReactNode }) => {
  return (
    <main className="w-screen h-screen p-6">
      {children}
    </main>
  )
}

export default AuthLayout