const Contacts = () => import('./views/SettingIndex');

export default [
  {
    path: '/settings',
    component: Contacts,
    name: 'contact.list',
    meta: { requiresAuth: true },
  },
];
