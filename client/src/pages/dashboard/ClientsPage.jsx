import { useState, useEffect } from "react";
import axios from "axios";
import TableClient from "../../components/dashboard/tables/TableClient";

const LINK = "http://localhost:8000/api/admin";

function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios.get(LINK + "/clients").then((res) => setClients(res.data));
  }, [deleted]);
  return (
    <div>
      <TableClient clients={clients} setDeleted={setDeleted} />
    </div>
  );
}

export default ClientsPage;

