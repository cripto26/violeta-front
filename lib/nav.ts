export const NAV = {
    home: "/",
    login: "/login",
    pago: "/pago",
    registro: "/registro",
    miCuenta: "/mi-cuenta",
  } as const;
  
  export const topNavLinks = [
    { href: NAV.registro, label: "Registro" },
    { href: NAV.miCuenta, label: "Mi cuenta" },
  ] as const;
  