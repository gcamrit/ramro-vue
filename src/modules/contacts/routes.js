const Contacts = () => import('./views/ContactsList');
const AddContact = () => import('./views/AddContact');

export default [
  {
    path: '/contacts',
    component: Contacts,
    name: 'contact.list',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'add',
        name: 'contact.add',
        component: AddContact,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/contacts/:id',
    component: Contacts,
    meta: { requiresAuth: true },
  },
];
