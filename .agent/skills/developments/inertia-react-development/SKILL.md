---
name: inertia-react-development
description: >-
  Develops Inertia.js v2 React client-side applications. Activates when creating
  React pages, forms, or navigation; using <Link>, <Form>, useForm, or router;
  working with deferred props, prefetching, or polling; or when user mentions
  React with Inertia, React pages, React forms, or React navigation.
---

# Inertia React Development

## 🔴 Cross-References (Penting!)
- Aplikasi ini **TIDAK MENGGUNAKAN ZIGGY**. Semua *URL routing* dari Laravel ke React harus menggunakan **Wayfinder**. Panggil skill `wayfinder-development` untuk panduan *import* route.
- Untuk *styling* komponen, panggil skill `tailwindcss-development`.

## When to Apply

Activate this skill when:

- Creating or modifying React page components for Inertia
- Working with forms in React (using `<Form>` or `useForm`)
- Implementing client-side navigation with `<Link>` or `router`
- Using v2 features: deferred props, prefetching, or polling
- Building React-specific features with the Inertia protocol

## Documentation

Use `search-docs` for detailed Inertia v2 React patterns and documentation.

## Basic Usage

### Page Components Location

React page components should be placed in the `resources/js/Pages` directory. Folder structure should mirror the `Modules/` domain if applicable.

### Page Component Structure

<code-snippet name="Basic React Page Component" lang="react">

export default function UsersIndex({ users }) {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

</code-snippet>

## Client-Side Navigation

**CRITICAL**: Always use Wayfinder imports for URLs instead of hardcoded strings or the `route()` helper.

### Basic Link Component

Use `<Link>` for client-side navigation instead of traditional `<a>` tags:

<code-snippet name="Inertia React Navigation with Wayfinder" lang="react">

import { Link } from '@inertiajs/react'
import { index, show } from '@/actions/App/Http/Controllers/UserController'
import { logout } from '@/actions/App/Http/Controllers/AuthController'

<Link href="/">Home</Link>
<Link href={index.url()}>Users</Link>
<Link href={show.url(user.id)}>View User</Link>

{/* Link with Method */}
<Link href={logout.url()} method="post" as="button">
    Logout
</Link>

</code-snippet>

### Prefetching

Prefetch pages to improve perceived performance:

<code-snippet name="Prefetch on Hover" lang="react">

import { Link } from '@inertiajs/react'
import { index } from '@/actions/App/Http/Controllers/UserController'

<Link href={index.url()} prefetch>
    Users
</Link>

</code-snippet>

### Programmatic Navigation

<code-snippet name="Router Visit" lang="react">

import { router } from '@inertiajs/react'
import { index, store } from '@/actions/App/Http/Controllers/UserController'

function handleClick() {
    router.visit(index.url())
}

// Or with options and Wayfinder specific method
router.visit(store.url(), {
    method: 'post',
    data: { name: 'John' },
    onSuccess: () => console.log('Success!'),
})

</code-snippet>

## Form Handling

### Form Component (Recommended)

The recommended way to build forms is with the `<Form>` component. Use Wayfinder's `.form()` method to automatically inject `action` and `method` props:

<code-snippet name="Form Component Example" lang="react">

import { Form } from '@inertiajs/react'
import { store } from '@/actions/App/Http/Controllers/UserController'

export default function CreateUser() {
    return (
        {/* store.form() automatically resolves to { action: "/users", method: "post" } */}
        <Form {...store.form()}>
            {({ errors, processing, wasSuccessful }) => (
                <>
                    <input type="text" name="name" />
                    {errors.name && <div>{errors.name}</div>}

                    <input type="email" name="email" />
                    {errors.email && <div>{errors.email}</div>}

                    <button type="submit" disabled={processing}>
                        {processing ? 'Creating...' : 'Create User'}
                    </button>

                    {wasSuccessful && <div>User created!</div>}
                </>
            )}
        </Form>
    )
}

</code-snippet>

### Form Component Reset Props

The `<Form>` component supports automatic resetting:

- `resetOnError` - Reset form data when the request fails
- `resetOnSuccess` - Reset form data when the request succeeds
- `setDefaultsOnSuccess` - Update default values on success

<code-snippet name="Form with Reset Props" lang="react">

import { Form } from '@inertiajs/react'
import { store } from '@/actions/App/Http/Controllers/UserController'

<Form
    {...store.form()}
    resetOnSuccess
    setDefaultsOnSuccess
>
    {({ errors, processing, wasSuccessful }) => (
        <>
            <input type="text" name="name" />
            {errors.name && <div>{errors.name}</div>}

            <button type="submit" disabled={processing}>
                Submit
            </button>
        </>
    )}
</Form>

</code-snippet>

### `useForm` Hook

For more programmatic control or to follow existing conventions, use the `useForm` hook:

<code-snippet name="useForm Hook Example" lang="react">

import { useForm } from '@inertiajs/react'
import { store } from '@/actions/App/Http/Controllers/UserController'

export default function CreateUser() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
    })

    function submit(e) {
        e.preventDefault()
        // Use Wayfinder URL
        post(store.url(), {
            onSuccess: () => reset('password'),
        })
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                value={data.name}
                onChange={e => setData('name', e.target.value)}
            />
            {errors.name && <div>{errors.name}</div>}
            
            <button type="submit" disabled={processing}>
                Create User
            </button>
        </form>
    )
}

</code-snippet>

## Inertia v2 Features

### Deferred Props

Use deferred props to load data after initial page render:

<code-snippet name="Deferred Props with Empty State" lang="react">

export default function UsersIndex({ users }) {
    // users will be undefined initially, then populated
    return (
        <div>
            <h1>Users</h1>
            {!users ? (
                <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

</code-snippet>

### Polling

Automatically refresh data at intervals:

<code-snippet name="Polling Example" lang="react">

import { router } from '@inertiajs/react'
import { useEffect } from 'react'

export default function Dashboard({ stats }) {
    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({ only: ['stats'] })
        }, 5000) // Poll every 5 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>Dashboard</h1>
            <div>Active Users: {stats?.activeUsers || 'Loading...'}</div>
        </div>
    )
}

</code-snippet>

### WhenVisible (Infinite Scroll)

Load more data when user scrolls to a specific element:

<code-snippet name="Infinite Scroll with WhenVisible" lang="react">

import { WhenVisible } from '@inertiajs/react'

export default function UsersList({ users }) {
    return (
        <div>
            {users.data.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}

            {users.next_page_url && (
                <WhenVisible
                    data="users"
                    params={{ page: users.current_page + 1 }}
                    fallback={<div>Loading more...</div>}
                />
            )}
        </div>
    )
}

</code-snippet>

## Common Pitfalls

- **Using `route()` helper**: This project uses Wayfinder. `route()` will cause errors.
- Using traditional `<a>` links instead of Inertia's `<Link>` component (breaks SPA behavior)
- Forgetting to add loading states (skeleton screens) when using deferred props
- Not handling the `undefined` state of deferred props before data loads
- Using `<form>` without preventing default submission (use `<Form>` component or `e.preventDefault()`)
- Forgetting to check if `<Form>` component is available in your Inertia version