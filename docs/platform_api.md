# Hamutay Platform API

Documentacion de los endpoints del modulo platform. Esta API es de uso interno para el equipo de Hamutay.

Base URL: `http://localhost:8000` (desarrollo)

---

## Autenticacion

Todos los endpoints (excepto login) requieren el header:

```
Authorization: Bearer <token>
```

El token se obtiene en `POST /platform/auth/login` y expira segun la configuracion de `ACCESS_TOKEN_EXPIRE_MINUTES`.

### Roles disponibles

| Rol | Descripcion |
|-----|-------------|
| `superadmin` | Acceso total al sistema |
| `support` | Soporte y gestion de colegios |
| `sales` | Ventas y suscripciones |
| `dev` | Desarrollo y logs del sistema |

---

## Auth

### POST /platform/auth/login

Autentica un usuario platform. No requiere token.

**Body**
```json
{
  "email": "admin@hamutay.com",
  "password": "Admin1234!"
}
```

**Respuesta 200**
```json
{
  "access_token": "eyJ...",
  "token_type": "bearer",
  "user": {
    "id": "uuid",
    "email": "admin@hamutay.com",
    "role": "superadmin"
  }
}
```

**Errores**
- `401` Credenciales incorrectas o cuenta inactiva

---

### GET /platform/auth/me

Devuelve los datos completos del usuario autenticado.

**Respuesta 200**
```json
{
  "id": "uuid",
  "email": "admin@hamutay.com",
  "first_name": "Admin",
  "last_name": "Hamutay",
  "document_type": "DNI",
  "document_number": "00000000",
  "phone": null,
  "is_active": true,
  "role_obj": { "id": "uuid", "name": "superadmin" },
  "last_login_at": "2026-03-29T03:00:00Z",
  "created_at": "2026-03-29T03:00:00Z"
}
```

---

## Users

Gestion de usuarios platform. Solo accesible por **superadmin**.

### GET /platform/users

Lista todos los usuarios activos.

### GET /platform/users/{user_id}

Devuelve un usuario por ID.

**Errores**
- `404` Usuario no encontrado

### POST /platform/users

Crea un nuevo usuario platform.

**Body**
```json
{
  "email": "soporte@hamutay.com",
  "password": "Soporte1234!",
  "first_name": "Juan",
  "last_name": "Perez",
  "document_type": "DNI",
  "document_number": "12345678",
  "role": "support",
  "phone": "+51999888777"
}
```

Valores validos para `document_type`: `DNI`, `CE`, `PASSPORT`, `CDI`

Valores validos para `role`: `superadmin`, `support`, `sales`, `dev`

**Errores**
- `409` Email o documento ya registrado
- `404` Rol no encontrado en BD

### PATCH /platform/users/{user_id}

Actualiza campos del usuario. Solo enviar los campos a modificar.

**Body** (todos opcionales)
```json
{
  "first_name": "Carlos",
  "last_name": "Lopez",
  "phone": "+51911222333",
  "role": "sales",
  "is_active": true,
  "password": "NuevaPass1234!"
}
```

### DELETE /platform/users/{user_id}

Soft delete del usuario (marca `deleted_at`, no borra de BD).

**Errores**
- `400` No puedes eliminarte a ti mismo

---

## Plans

Gestion de planes de suscripcion.

| Accion | superadmin | sales | support | dev |
|--------|:---:|:---:|:---:|:---:|
| Ver planes | SI | SI | SI | SI |
| Crear / Editar / Eliminar planes | SI | — | — | — |
| Ver modulos | SI | SI | SI | SI |
| Asignar / Quitar modulos | SI | — | — | — |

### GET /platform/plans

Lista todos los planes ordenados por `display_order`.

### GET /platform/plans/{plan_id}

Devuelve un plan con sus modulos incluidos.

### POST /platform/plans

Crea un nuevo plan. Solo **superadmin**.

**Body**
```json
{
  "code": "basic",
  "name": "Plan Basico",
  "description": "Hasta 300 estudiantes",
  "monthly_price": 49.00,
  "annual_price": 490.00,
  "currency": "USD",
  "max_students": 300,
  "max_teachers": 30,
  "max_users": 50,
  "storage_gb": 10,
  "display_order": 2
}
```

**Errores**
- `409` El codigo de plan ya existe

### PATCH /platform/plans/{plan_id}

Actualiza campos del plan. Solo **superadmin**.

**Body** (todos opcionales)
```json
{
  "monthly_price": 59.00,
  "is_active": true,
  "max_students": 500
}
```

### DELETE /platform/plans/{plan_id}

Elimina el plan y sus modulos (hard delete). Solo **superadmin**.

### GET /platform/plans/{plan_id}/modules

Lista los modulos asignados al plan.

### POST /platform/plans/{plan_id}/modules

Asigna un modulo al plan. Solo **superadmin**.

**Body**
```json
{
  "code": "academic",
  "name": "Modulo Academico",
  "description": "Gestion de notas, asistencia y horarios",
  "icon": "book",
  "version": "1.0.0",
  "is_included": true
}
```

Valores validos para `code`: `academic`, `payroll`, `tuition`, `communication`

**Errores**
- `409` El modulo ya esta asignado a este plan

### DELETE /platform/plans/{plan_id}/modules/{module_id}

Quita un modulo del plan. Solo **superadmin**.

---

## Schools

Gestion de colegios registrados en la plataforma.

| Accion | superadmin | sales | support | dev |
|--------|:---:|:---:|:---:|:---:|
| Ver colegios | SI | SI | SI | SI |
| Crear colegio | SI | SI | — | — |
| Editar (todos los campos) | SI | SI | — | — |
| Editar (solo email y phone) | SI | SI | SI | — |
| Cambiar plan | SI | SI | — | — |
| Cambiar estado | SI | — | — | — |
| Eliminar | SI | — | — | — |

### GET /platform/schools

Lista todos los colegios no eliminados.

### GET /platform/schools/{school_id}

Devuelve el detalle de un colegio.

### POST /platform/schools

Crea un nuevo colegio. Accesible por **superadmin** y **sales**.

**Body**
```json
{
  "name": "Colegio San Marcos",
  "slug": "colegio-san-marcos",
  "email": "contacto@sanmarcos.edu.pe",
  "phone": "+51984123456",
  "country": "PE",
  "region": "Lima",
  "province": "Lima",
  "district": "Miraflores",
  "address": "Av. Larco 123",
  "institution_code": "1234567",
  "institution_type": "private",
  "founding_year": 1985,
  "modality": "presencial",
  "language": "es",
  "timezone": "America/Lima",
  "plan_code": "free"
}
```

Valores validos para `institution_type`: `private`, `public`, `international`

Valores validos para `modality`: `presencial`, `semipresencial`, `virtual`

Valores validos para `plan_code`: `free`, `basic`, `pro`, `enterprise`

**Errores**
- `409` Nombre, slug o codigo de institucion ya registrado

### PATCH /platform/schools/{school_id}

Actualiza datos del colegio. Los campos disponibles dependen del rol:

- **superadmin / sales**: name, email, phone, website, region, province, district, address, institution_type, founding_year, modality, logo_url, language, timezone, configuracion academica, funcionalidades habilitadas.
- **support**: solo `email` y `phone`.

**Body** (todos opcionales)
```json
{
  "email": "nuevo@sanmarcos.edu.pe",
  "phone": "+51984000111",
  "website": "https://sanmarcos.edu.pe"
}
```

### PATCH /platform/schools/{school_id}/plan

Cambia el plan de suscripcion del colegio. Accesible por **superadmin** y **sales** (sales puede aplicar descuentos).

**Body**
```json
{
  "plan_code": "basic",
  "monthly_price": 49.00,
  "annual_price": 490.00,
  "discount_percentage": 10,
  "auto_renew": true
}
```

### PATCH /platform/schools/{school_id}/status

Cambia el estado del colegio. Solo **superadmin**.

**Body** (todos opcionales)
```json
{
  "is_active": true,
  "is_verified": true,
  "subscription_status": "active"
}
```

Valores validos para `subscription_status`: `active`, `expired`, `cancelled`, `suspended`

### DELETE /platform/schools/{school_id}

Soft delete del colegio. Solo **superadmin**.

---

## Invoices

Gestion de facturas de colegios.

| Accion | superadmin | sales | support | dev |
|--------|:---:|:---:|:---:|:---:|
| Ver facturas | SI | SI | SI | SI |
| Crear / Editar facturas | SI | SI | — | — |
| Cambiar status desde PATCH | SI | — | — | — |
| Marcar como pagada | SI | — | SI | — |
| Eliminar | SI | — | — | — |

### GET /platform/invoices

Lista todas las facturas, ordenadas de mas reciente a mas antigua.

**Query params opcionales**

| Parametro | Tipo | Descripcion |
|-----------|------|-------------|
| `school_id` | UUID | Filtra por colegio |

### GET /platform/invoices/{invoice_id}

Devuelve el detalle de una factura.

### POST /platform/invoices

Crea una nueva factura. Accesible por **superadmin** y **sales**.

**Body**
```json
{
  "school_id": "uuid-del-colegio",
  "invoice_number": "INV-2026-001",
  "subtotal": 49.00,
  "tax_amount": 8.82,
  "discount_amount": 0,
  "total_amount": 57.82,
  "currency": "USD",
  "payment_method": "transferencia",
  "description": "Suscripcion Plan Basico - Marzo 2026"
}
```

**Errores**
- `404` Colegio no encontrado
- `409` Numero de factura ya existe

### PATCH /platform/invoices/{invoice_id}

Actualiza una factura. **sales** no puede cambiar el campo `status` (usar `mark-paid`).

**Body** (todos opcionales)
```json
{
  "notes": "Pago pendiente de confirmacion",
  "payment_method": "yape",
  "status": "sent"
}
```

Valores validos para `status`: `draft`, `sent`, `paid`, `overdue`, `cancelled`

### PATCH /platform/invoices/{invoice_id}/mark-paid

Marca la factura como pagada y registra la fecha. Accesible por **superadmin** y **support**.

**Query params opcionales**

| Parametro | Tipo | Descripcion |
|-----------|------|-------------|
| `payment_reference` | string | Numero de referencia del pago |
| `payment_method` | string | Metodo de pago utilizado |

**Errores**
- `409` La factura ya esta marcada como pagada

### DELETE /platform/invoices/{invoice_id}

Elimina la factura permanentemente (hard delete). Solo **superadmin**.

---

## Codigos de error comunes

| Codigo | Descripcion |
|--------|-------------|
| `401` | Token invalido, expirado o cuenta inactiva |
| `403` | Sin permisos para esta accion |
| `404` | Recurso no encontrado |
| `409` | Conflicto de unicidad (email, codigo, numero de factura, etc.) |
