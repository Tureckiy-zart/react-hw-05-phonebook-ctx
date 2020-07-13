import React, { Component } from "react";
import { ContactListItem } from "./ContactListItem";
import { ThemeContext } from "../../theme/ThemeContext";

class ContactList extends Component {
  state = {};
  render() {
    // ContactList = ({
    //   data: { clients, theme },
    //   onDelComponent,
    //   onToggleTheme,
    // })
    console.log("this.props", this.props);
    const {
      data: { clients, theme },
      onDelComponent,
      onToggleTheme,
    } = this.props;
    // console.log("clients", clients);
    // console.log("theme", theme);
    // return 1
    return clients.length > 0 ? (
      clients.map((client) => (
        // return (clients.map((client) => (

        <div className="contactList" key={client.id}>
          <label className="switch">
            <input
              type="checkbox"
              // checked={theme.type === "dark"}
              checked={theme === "dark"}
              onChange={(event) => onToggleTheme(event.currentTarget.value)}
              // onChange={(event) => console.log('event', event)}
              onChange={(event) =>
                console.log("event", event.currentTarget.value)
              }
            />
          </label>
          <ContactListItem client={client} onDelComponent={onDelComponent} />
        </div>
      ))
    ) : (
      <div className="contactList">
        <p>Contacts is not available</p>
      </div>
    );
  }
}

export default ContactList;

// class Contacts extends Component {
//   state = {};
//   render() {
//     const { clients, theme, onToggleTheme, onDelComponent } = this.props;

//     return (clients.length) ? (
//       clients.map((client) => (
//         // return (clients.map((client) => (
//         <ThemeContext.Consumer>
//           <div className="contactList" key={client.id}>
//             <label className="switch">
//               <input
//                 type="checkbox"
//                 checked={theme.type === "dark"}
//                 // checked={theme === "dark"}
//                 onChange={(event) => onToggleTheme(event.currentTarget.value)}
//                 // onChange={(event) => console.log('event', event)}
//                 // onChange={(event) => console.log('event', event.currentTarget.value)}
//               />
//             </label>
//             <ContactListItem client={client} onDelComponent={onDelComponent} />
//           </div>
//         </ThemeContext.Consumer>
//       ))
//     ) : (
//       <div className="contactList">
//         <p>Contacts is not available</p>
//       </div>
//     );
//   }
// }

// export default Contacts;

// export const ContactList = ({
//   data: { clients, theme },
//   onDelComponent,
//   onToggleTheme,
// }) => {
//   // if (!clients.length) {alert('Enter first name')}/

//   // console.log('data', theme)
//   return clients.length ? (
//     clients.map((client) => (
//       // return (clients.map((client) => (
//         <ThemeContext.Consumer>
//       <div className="contactList" key={client.id}>
//         <label className="switch">
//           <input
//             type="checkbox"
//             checked={theme.type === "dark"}
//             // checked={theme === "dark"}
//             onChange={(event) => onToggleTheme(event.currentTarget.value)}
//             // onChange={(event) => console.log('event', event)}
//             // onChange={(event) => console.log('event', event.currentTarget.value)}
//           />
//         </label>
//         <ContactListItem client={client} onDelComponent={onDelComponent} />
//       </div>
//       </ThemeContext.Consumer>
//     ))
//   ) : (
//     <div className="contactList">
//       <p>Contacts is not available</p>
//     </div>
//   );
// };
