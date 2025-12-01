import React from "react";
import UseUser from "../hooks/use-user";

export default function UserInfo() {
  const { user, userRequestStatus, getUser } = UseUser();

  React.useEffect(() => {
    getUser("hele");
  }, [getUser]);

  if (userRequestStatus === 'loading') {
    return <div>Carregando usuário...</div>
  }
  return (
    <ul>
      <li>Nome: {user?.name}</li>
      <li>Username: {user?.id}</li>
    </ul>
  );
}