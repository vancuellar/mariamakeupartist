import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <h1 className="font-belleza text-2xl uppercase tracking-[0.2em] text-center mb-8">
          Iniciar Sesión
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-border bg-transparent px-4 py-3 font-body text-sm tracking-wide focus:outline-none focus:border-foreground transition-colors"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-border bg-transparent px-4 py-3 font-body text-sm tracking-wide focus:outline-none focus:border-foreground transition-colors"
          />
          {error && (
            <p className="font-body text-xs text-destructive tracking-wide">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 border border-foreground px-8 py-3 font-body text-[10px] uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-500 disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
