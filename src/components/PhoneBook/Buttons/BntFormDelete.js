import React from "react";

export const BntFormDelete = ({ client, onDelComponent }) => <button onClick={() => onDelComponent(client.id)}>Delete</button>;
