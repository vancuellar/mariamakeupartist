export function saveToken(token: string) {
  localStorage.setItem("access_token", token);
}

export function clearToken() {
  localStorage.removeItem("access_token");
}

export function getToken(): string | null {
  return localStorage.getItem("access_token");
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

function parseJwt(token: string): Record<string, unknown> | null {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}

export function getRole(): string | null {
  const token = getToken();
  if (!token) return null;
  const payload = parseJwt(token);
  return (payload?.role as string) ?? null;
}
