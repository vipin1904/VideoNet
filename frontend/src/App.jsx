import {
  SignedOut,
  SignedIn,
  SignInButton,
  SignOutButton,
  UserButton
} from '@clerk/clerk-react'

function App() {
  return (
    <div>
      <h1>Welcome to the app</h1>

      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default App