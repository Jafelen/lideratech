# Lideratech

Nuevo proyecto de Lideratech. Este repositorio arranca como scaffold: la
estructura, el README y la licencia ya están; el código, la documentación
técnica y el pipeline de CI se definen a medida que se definan las
funcionalidades.

## Estado

| Área | Estado |
| --- | --- |
| Alcance funcional | Por definir |
| Stack / runtime | Por definir |
| CI | Por definir |
| Documentación | README inicial |

## Estructura

```
.
├── .atl/      # estado local de tooling (no versionado)
├── .gitignore
├── LICENSE    # MIT
└── README.md
```

## Cómo trabajar

1. Crear una rama de trabajo: `git switch -c feat/<descripcion-corta>`.
2. Commits por unidad de trabajo revisable, con mensaje en formato
   Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
3. Abrir un PR contra `main` describiendo el cambio y cómo se verifica.

## Verificación

Todavía no hay comandos de verificación definidos. Cuando se defina el stack,
este bloque debe listar los comandos exactos (build, test, lint) que corren
antes de abrir un PR.

## Licencia

MIT — ver [LICENSE](LICENSE).
