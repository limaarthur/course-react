import React from "react";
import type { User } from "../models/user";

export default function UserNewForm() {
  const fromRef = React.useRef<HTMLFormElement>(null);
  const {createUser, userRequestStatus} = useUser();

  async function handleSubmit(e: React.FormEvent) {
    if (!fromRef.current) {
      return;
    }

    e.preventDefault();

    const data = new FormData(fromRef.current);

    const payload = {
      id: data.get('id'),
      name: data.get('name')
    }

    await createUser(payload as User)
  }
  return (
    <form ref={fromRef} onSubmit={handleSubmit}>
      <div>
        <input placeholder="Username" name="id" required />
      </div>
      <div>
        <input placeholder="Name" name="name" required />
      </div>
      <div>
        <button
          type="submit"
        >
          {userRequestStatus === "saving" ? "Criando..." : "Criar usuário"}
          Criar usuário
        </button>
      </div>
    </form>
  )
}