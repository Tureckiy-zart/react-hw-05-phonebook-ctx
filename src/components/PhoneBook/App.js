import React, { Component } from "react";
import { Form } from "./Form/Form";
import { FindedContact } from "./FindedContact/FindedContact";
import ContactList from "./Contacts/Contacts";
import { ThemeContext } from "../../components/theme/ThemeContext";
import withTheme from "./HOC/theme";

const userSelector = (clients, filter) =>
  clients.filter((client) =>
    client.name.toLowerCase().includes(filter.toLowerCase())
  );
class App extends Component {
  state = {
    clients: [
      { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
      { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
    ],
    filter: "",
    theme: "dark",
  };

  // toggleTheme(newTheme) {
  //   this.setState({
  //     // theme: this.state.theme === true ? "dark" : "light",
  //     theme: this.state.theme === "light" ? "dark" : "light",
  //   });
  // }

  componentDidMount() {
    this.setState({
      clients: localStorage.getItem("clients")
        ? JSON.parse(localStorage.getItem("clients"))
        : this.state.clients,
    });
    // this.toggleTheme()
  }

  filterClient = ({ target: { value } }) => {
    this.setState({ filter: value });
  };
  addClientData = (client) => {
    this.setState((prev) => {
      localStorage.setItem(
        "clients",
        JSON.stringify([...prev.clients, client])
      );
      return { clients: [...prev.clients, client] };
    });
  };

  delComponent = (id) => {
    this.setState((prev) => {
      localStorage.setItem(
        "clients",
        JSON.stringify(prev.clients.filter((client) => client.id !== id))
      );
      return { clients: prev.clients.filter((client) => client.id !== id) };
    });
  };

  render() {
    console.log("this.propsAPPPP", this.props);
    const { clients, filter, theme } = this.state;
    const { toggle, themeCfg } = this.props;
    console.log("clients", clients);
    console.log(" this.state.theme", theme.type);
    const filteredClients = userSelector(clients, filter);
    return (
      <div style={{ color: themeCfg.fontColor, background: themeCfg.background }}>
        {/* <ThemeContext.Provider
          value={{
            type: this.state.theme,
            // config: themeConfig[this.state.theme],
          }}
        > */}
        <button onClick={() => toggle()}> switch theme</button>

        <Form addClientData={this.addClientData} clients={clients} />
        <ContactList
          data={this.state}
          onDelComponent={this.delComponent}
          onToggleTheme={this.toggleTheme}
        />
        <FindedContact
          onfilterClient={this.filterClient}
          value={filter}
          filteredClients={filteredClients}
          onDelComponent={this.delComponent}
        />
        {/* <button type="button" onClick={() => {}}>
          switch theme
        </button> */}
        {/* </ThemeContext.Provider> */}
      </div>
    );
  }
}

export default withTheme(App);
