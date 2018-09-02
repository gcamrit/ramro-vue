const Contacts = () => import('./views/SettingIndex');

export default [
  {
    path: '/settings',
    component: Contacts,
    name: 'setting.index',
    meta: { requiresAuth: true },
  },
];
