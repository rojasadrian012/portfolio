---
description: Crea un git worktree aislado en .trees/<nombre> y ejecuta ahí las instrucciones dadas
argument-hint: <descripción de la tarea a realizar en el worktree>
allowed-tools: Bash(git worktree:*), Bash(git status:*), Bash(git branch:*), Bash(cd:*)
---

# Tarea en worktree aislado

El usuario quiere trabajar en la siguiente tarea de forma **aislada del código principal**, dentro de un git worktree:

<requerimiento>
$ARGUMENTS
</requerimiento>

## Paso 1 — Determinar el nombre del worktree

A partir del requerimiento anterior, deriva un nombre corto en `kebab-case` (2-4 palabras, en inglés, sin acentos ni espacios) que describa la tarea. Ejemplos:

- "arreglar el bug del formulario de contacto" → `fix-contact-form`
- "añadir modo oscuro" → `dark-mode`
- "refactorizar la sección de experiencia" → `refactor-experience`

Llama a ese nombre `<nombre>`.

## Paso 2 — Crear el worktree

Ejecuta:

```bash
git worktree add .trees/<nombre>
```

Esto crea una rama nueva llamada `<nombre>` y un directorio de trabajo aislado en `.trees/<nombre>`. Si `.trees/` no está en `.gitignore`, añádelo para no ensuciar el repo principal.

Si el nombre ya existe, añade un sufijo corto (`-2`, `-alt`, etc.) hasta que sea único.

## Paso 3 — Trabajar dentro del worktree

**A partir de aquí, TODO el trabajo ocurre exclusivamente dentro de `.trees/<nombre>/`.** Usa siempre rutas absolutas o `cd` hacia ese directorio en cada comando. No modifiques ningún archivo fuera de `.trees/<nombre>/` — el código principal debe quedar intacto.

Ejecuta el requerimiento del usuario dentro de ese worktree: lee los archivos que necesites, haz los cambios, corre las pruebas/lint que apliquen, y verifica que funcione.

## Paso 4 — Reportar

Al terminar, informa al usuario:

- El nombre del worktree y su ruta (`.trees/<nombre>`) y la rama creada.
- Un resumen de los cambios realizados.
- Cómo continuar: cómo revisar el diff (`git -C .trees/<nombre> diff`), cómo fusionar la rama cuando esté conforme, y cómo eliminar el worktree al terminar (`git worktree remove .trees/<nombre>`).

No fusiones ni borres el worktree automáticamente; deja esa decisión al usuario.
