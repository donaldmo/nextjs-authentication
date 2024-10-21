"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "antd";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the Dashboard</h1>
      <p>Hello, {session?.user?.email}!</p>
      
      <Button type="primary" onClick={() => signOut({ callbackUrl: "/api/auth/signin" })}>
        Logout
      </Button>
    </div>
  );
}
