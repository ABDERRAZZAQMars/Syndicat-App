import { useState, useEffect } from "react";
import axios from "axios";
import TablePaiement from "../../components/dashboard/tables/TablePaiement";

const LINK = "http://localhost:8000/api/admin";

function PaiementsPage() {
  const [paiements, setPaiements] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios.get(LINK + "/clients").then((res) => setPaiements(res.data));
  }, [deleted]);
  return (
    <div>
      <TablePaiement paiements={paiements} setDeleted={setDeleted} />
    </div>
  );
}

export default PaiementsPage;
