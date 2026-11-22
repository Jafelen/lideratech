# Publicación

El sitio es estático: no hay build, no hay dependencias, no hay paso de
compilación. El hosting recibe los archivos tal cual están en el repo.

## Qué subir

Al document root del hosting que sirve `lideratech.ar`:

```
index.html
assets/styles.css
assets/main.js
```

Los directorios `design/`, `deploy/`, `odd/` y los archivos de configuración del
repo **no** se suben: son fuente de trabajo, no contenido del sitio.

El `CNAME` de la raíz tampoco se sube: sólo lo usa GitHub Pages, que no es el
hosting elegido.

## Orden de publicación

1. Subir `index.html` y `assets/` al document root.
2. Verificar que la página carga: `curl -I https://lideratech.ar/`.
3. Aplicar los registros DNS (ver la tabla en el README).
4. Subir `deploy/com-ar/.htaccess` al document root del hosting que sirve
   `lideratech.com.ar`, renombrado como `.htaccess`.
5. Verificar la redirección: `curl -I https://lideratech.com.ar/` debe
   devolver `301` con `Location: https://lideratech.ar/`.

## Verificación del redirect en el navegador

Desde el sitio final, el script inline del `<head>` detecta el dominio viejo
y reenvía igual. Ese script es la red de seguridad: **no reemplaza al 301**,
que es lo que Google y los navegadores respetan sin ejecutar JavaScript.

## Si algún día se usa GitHub Pages

El repo ya tiene `CNAME` (con `lideratech.ar`) y `.nojekyll`, así que alcanza
con habilitar Pages desde la rama `main`. Recordá que GitHub Pages no publica
repos privados en planes gratuitos: habría que pasar el repo a público o
contratar un plan pago.
