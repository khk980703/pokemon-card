import AuthForm from './components/AuthForm'

export default function Home() {
  return (
    <main>
      <div>
        <h2>Welcome to Pokemon Card Trading App!</h2>
        <p>Sign in to start trading.</p>
        <AuthForm />
      </div>
    </main>
  )
}
