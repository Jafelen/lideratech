# Lideratech

Nuevo proyecto de Lideratech. Hoy es un sitio estático de espera para
`lideratech.ar`, con la promesa que abre la web:

> Muy pronto estaremos liderando el futuro de quienes hacen tecnología en
> Argentina.

## Estado

| Área | Estado |
| --- | --- |
| Sitio | Página de espera implementada (`index.html`, sin build) |
| Dominio | `CNAME` con `lideratech.ar`; falta apuntar el DNS al hosting |
| Pages | Bloqueado: plan Free no habilita Pages sobre repos privado |
| Redirección `.com.ar` → `.ar` | JS en el `<head>`; falta el 301 del servidor de origen |
| Stack / runtime | HTML + CSS + JS estático, sin dependencias ni bundler |
| CI | Por definir |
| Documentación | Este README |

## Estructura

```
.
├── assets/
│   ├── main.js       # mejoras progresivas (año del aviso)
│   └── styles.css    # tokens + componentes
├── design/
│   └── lideratech-teaser/   # dirección de diseño aprobada (artboard 01)
├── .atl/      # estado local de tooling (no versionado)
├── .gitignore
├── .nojekyll  # GitHub Pages: no ejecutar Jekyll
├── CNAME      # dominio custom: lideratech.ar
├── index.html  # la página de espera
├── LICENSE    # MIT
└── README.md
```

## Dominios

- `lideratech.ar` — sitio canónico. El `<link rel="canonical">` y el `CNAME`
  apuntan acá.
- `lideratech.com.ar` — dominio viejo, debe redirigir con **301** a
  `lideratech.ar`. El script inline del `<head>` es sólo la red de seguridad
  para cuando el 301 no está configurado.

### Registros DNS

Para `lideratech.ar` (dominio raíz, sin `www`):

| Tipo | Nombre | Valor |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8000::154` |
| AAAA | `@` | `2606:50c0:8000::110` |
| AAAA | `@` | `2606:50c0:8000::111` |
| CNAME | `www` | `lideratech.ar` |

El certificado TLS lo emite y renueva GitHub automáticamente una vez que los
registros apuntan y el `CNAME` está en `main`.

## Cómo trabajar

1. Crear una rama de trabajo: `git switch -c feat/<descripcion-corta>`.
2. Commits por unidad de trabajo revisable, con mensaje en formato
   Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
3. Abrir un PR contra `main` describiendo el cambio y cómo se verifica.

## Verificación

No hay runner de tests todavía. Los chequeos actuales son estáticos:

- Estructura y accesibilidad del HTML: frase requerida, `canonical`,
  `lang="es"`, `h1` único, landmarks, sin `meta refresh`, sin recursos externos.
- CSS: capa de tokens, `prefers-reduced-motion`, foco visible, targets de 44px.
- Servidor local: que `/`, `/assets/styles.css` y `/assets/main.js` respondan 200.

Para levantar el sitio en local:

```
npx serve .
```

o cualquier servidor estático desde la raíz del repo.

## Licencia

MIT — ver [LICENSE](LICENSE).
