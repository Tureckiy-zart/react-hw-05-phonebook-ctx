import React from "react";
import { BntFormDelete } from "../Buttons/BntFormDelete";

export const ContactListItem = ({ client, onDelComponent }) => (
  <p className="clientName">
    {client.name}: {client.phone}
    <BntFormDelete client={client} onDelComponent={onDelComponent} />
  </p>
);
