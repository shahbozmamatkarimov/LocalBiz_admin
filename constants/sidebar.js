import dashboard from "@/assets/navbar/dashboard.svg"
import user from "@/assets/navbar/user.svg"
import business from "@/assets/navbar/business.svg"
import contact from "@/assets/navbar/contact.svg"
import advertisement from "@/assets/navbar/advertisement.svg"
import message from "@/assets/navbar/message.svg"

import _dashboard from "@/assets/navbar/dashboard_active.svg"
import _user from "@/assets/navbar/user_active.svg"
import _business from "@/assets/navbar/business_active.svg"
import _contact from "@/assets/navbar/contact_active.svg"
import _advertisement from "@/assets/navbar/advertisement_active.svg"
import _message from "@/assets/navbar/message_active.svg"

export const sidebar = [
  {
    id: 1,
    _icon: _dashboard,
    icon: dashboard,
    title: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    _icon: _user,
    icon: user,
    title: "Users",
    path: "/users",
  },
  {
    id: 3,
    _icon: _business,
    icon: business,
    title: "Businesses",
    path: "/businesses",
  },
  {
    id: 4,
    _icon: _contact,
    icon: contact,
    title: "Contacts",
    path: "/contacts",
  },
  {
    id: 5,
    _icon: _advertisement,
    icon: advertisement,
    title: "Advertisements",
    path: "/advertisements",
  },
  {
    id: 6,
    _icon: _message,
    icon: message,
    title: "Messages",
    path: "/Messages",
  },
];
